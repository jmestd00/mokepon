let sectionReinicio = document.getElementById("reiniciar")
let botonMascota = document.getElementById("boton-mascota")
let botonFuego = document.getElementById("boton-fuego")
let botonAgua = document.getElementById("boton-agua")
let botonTierra = document.getElementById("boton-tierra")
let botonReinicio = document.getElementById("boton-reinicio")

let ratihuella = document.getElementById("ratihuella")
let hipodoge = document.getElementById("hipodoge")
let capipepo = document.getElementById("capipepo")
let spanMascotaJugador = document.getElementById("mascotaJugador")
let spanMascotaEnemiga = document.getElementById("mascotaEnemigo")
let seccionMascota = document.getElementById("mascota")
let seccionAtaque = document.getElementById("ataque")

let spanVidasJugador = document.getElementById('spanVidasJugador')
let spanVidasEnemigo = document.getElementById('spanVidasEnemigo')

let sectionResultado = document.getElementById("resultado")
let sectionJugador = document.getElementById("ataque-jugador")
let sectionEnemigo = document.getElementById("ataque-enemigo")

let seccionReiniciar = document.getElementById("reiniciar")


//Variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


//Funciones
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function init() {
    seccionAtaque.style.display = "none"
    sectionReinicio.style.display = "none"
    botonMascota.addEventListener("click", seleccionarMascota)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReinicio.addEventListener("click", reinicio)
}

function seleccionarMascota() {
    let seleccionada = ""

    if (ratihuella.checked) {
        seleccionada = "Ratihuella"
    } else if (hipodoge.checked) {
        seleccionada = "Hipodoge"
    } else if (capipepo.checked) {
        seleccionada = "Capipepo"
    } else {
        alert("Seleccione una mascota")
    }

    spanMascotaJugador.innerHTML = seleccionada
    mascotaAleatoria()
}

function mascotaAleatoria() {
    seccionMascota.style.display = "none"
    seccionAtaque.style.display = "flex"

    let random = rand(1, 6)
    let seleccionada

    if (random === 1) {
        seleccionada = "Ratihuella"
    } else if (random === 2) {
        seleccionada = "Hipodoge"
    } else if (random === 3) {
        seleccionada = "Capipepo"
    }
    spanMascotaEnemiga.innerHTML = seleccionada;
}

function ataqueFuego() {
    ataqueJugador = "fuego"
    ataqueAleatorio()
}

function ataqueAgua() {
    ataqueJugador = "agua"
    ataqueAleatorio()
}

function ataqueTierra() {
    ataqueJugador = "tierra"
    ataqueAleatorio()
}

function ataqueAleatorio() {
    let enemigo = rand(1, 3)
    if (enemigo === 1) {
        ataqueEnemigo = "fuego"
    } else if (enemigo === 2) {
        ataqueEnemigo = "agua"
    } else {
        ataqueEnemigo = "tierra"
    }
    combate()
}

function combate() {
    if (ataqueEnemigo === ataqueJugador) {
        mensaje("empate")
    } else if (ataqueJugador === 'fuego' && ataqueEnemigo === 'tierra') {
        mensaje("ganaste")
        vidasEnemigo--
    } else if (ataqueJugador === 'agua' && ataqueEnemigo === 'fuego') {
        mensaje("ganaste")
        vidasEnemigo--
    } else if (ataqueJugador === 'tierra' && ataqueEnemigo === 'agua') {
        mensaje("ganaste")
        vidasEnemigo--
    } else {
        mensaje("perdiste")
        vidasJugador--
    }

    spanVidasJugador.innerHTML = vidasJugador.toString()
    spanVidasEnemigo.innerHTML = vidasEnemigo.toString()

    revisarVidas()
}

function revisarVidas() {
    if (vidasJugador === 0) {
        mensajeFinal(0)
    } else if (vidasEnemigo === 0) {
        mensajeFinal(1)
    }
}

function mensaje(combate) {
    let jugador = document.createElement("p")
    let enemigo = document.createElement("p")

    sectionResultado.innerHTML = combate.toUpperCase()
    jugador.innerHTML = ataqueJugador
    enemigo.innerHTML = ataqueEnemigo

    sectionJugador.appendChild(jugador)
    sectionEnemigo.appendChild(enemigo)
}

function mensajeFinal(msg) {
    if (msg === 0) {
        sectionResultado.innerHTML = "PERDISTE LA PARTIDA"
    } else if (msg === 1) {
        sectionResultado.innerHTML = "GANASTE LA PARTIDA"
    }

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    seccionReiniciar.style.display = "block"
}

function reinicio() {
    location.reload()
}


//Código funcional
window.addEventListener("load", init)
