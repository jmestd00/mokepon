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
    let seccionAtaque = document.getElementById("ataque")
    seccionAtaque.style.display = "none"
    
    let sectionReinicio = document.getElementById("reiniciar")
    sectionReinicio.style.display = "none"
    
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionarMascota)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    
    let botonReinicio = document.getElementById("boton-reinicio")
    botonReinicio.addEventListener("click", reinicio)
}

function seleccionarMascota() {
    let ratihuella = document.getElementById("ratihuella")
    let hipodoge = document.getElementById("hipodoge")
    let capipepo = document.getElementById("capipepo")
    let langostelvis = document.getElementById("langostelvis")
    let tucapalma = document.getElementById("tucapalma")
    let pydos = document.getElementById("pydos")
    let spanMascotaJugador = document.getElementById("mascotaJugador")
    let seleccionada = ""

    if (ratihuella.checked) {
        seleccionada = "ratihuella"
    } else if (hipodoge.checked) {
        seleccionada = "hipodoge"
    } else if (capipepo.checked) {
        seleccionada = "capipepo"
    } else if (langostelvis.checked) {
        seleccionada = "langostelvis"
    } else if (tucapalma.checked) {
        seleccionada = "tucapalma"
    } else if (pydos.checked) {
        seleccionada = "pydos"
    } else {
        alert("Seleccione una mascota")
    }

    spanMascotaJugador.innerHTML = seleccionada
    mascotaAleatoria()
}

function mascotaAleatoria() {
    let seccionMascota = document.getElementById("mascota")
    seccionMascota.style.display = "none"
    
    let seccionAtaque = document.getElementById("ataque")
    seccionAtaque.style.display = "block"
    
    let random = rand(1, 6)
    let spanMascotaEnemiga = document.getElementById("mascotaEnemigo")
    let seleccionada

    if (random === 1) {
        seleccionada = "ratihuella"
    } else if (random === 2) {
        seleccionada = "hipodoge"
    } else if (random === 3) {
        seleccionada = "capipepo"
    } else if (random === 4) {
        seleccionada = "langostelvis"
    } else if (random === 5) {
        seleccionada = "tucapalma"
    } else {
        seleccionada = "pydos"
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
    let spanVidasJugador = document.getElementById("spanVidasJugador")
    let spanVidasEnemigo = document.getElementById("spanVidasEnemigo")
    let conclusion

    if (ataqueJugador === ataqueEnemigo) {
        conclusion = "empate"
    } else if (ataqueJugador === "fuego" && ataqueEnemigo === "tierra") {
        conclusion = "ganaste"
        vidasEnemigo--
    } else if (ataqueJugador === "agua" && ataqueEnemigo === "fuego") {
        conclusion = "ganaste"
        vidasEnemigo--
    } else if (ataqueJugador === "tierra" && ataqueEnemigo === "agua") {
        conclusion = "ganaste"
        vidasEnemigo--
    } else {
        conclusion = "perdiste"
        vidasJugador--;
    }

    spanVidasJugador.innerHTML = vidasJugador.toString()
    spanVidasEnemigo.innerHTML = vidasEnemigo.toString()
    mensaje(conclusion)

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
    let sectionMensajes = document.getElementById("mensajes")
    let par = document.createElement("p")

    par.innerHTML = "Tu mascota atacó con " + ataqueJugador.toUpperCase() + " y la mascota enemiga atacó con " + ataqueEnemigo.toUpperCase() + " → " + combate.toUpperCase()

    sectionMensajes.appendChild(par)
}

function mensajeFinal(msg) {
    let sectionMensajes = document.getElementById("mensajes")
    let par = document.createElement("p")

    if (msg === 0) {
        par.innerHTML = "PERDISTE LA PARTIDA"
    } else if (msg === 1) {
        par.innerHTML = "GANASTE LA PARTIDA"
    }

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    
    sectionMensajes.appendChild(par)

    let seccionAtaque = document.getElementById("ataque")
    seccionAtaque.style.display = "none"

    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "block"
}

function reinicio() {
    location.reload()
}


//Código funcional
window.addEventListener("load", init)
