const E1 = document.getElementById('e1');
const E2 = document.getElementById('e2');
const E3 = document.getElementById('e3');

const PI = document.getElementById('f1');
const PA = document.getElementById('f2');
const TI = document.getElementById('f3');

const GANASTE = document.getElementById('ganaste');
const EMPATASTE = document.getElementById('empataste');
const PERDISTE = document.getElementById('perdiste');

const UNO = document.getElementById('1');


E1.style.display = "none";
E2.style.display = "none";
E3.style.display = "none";

GANASTE.style.display = "none";
EMPATASTE.style.display = "none";
PERDISTE.style.display = "none";

PI.style.display = "none";
PA.style.display = "none";
TI.style.display = "none";

let puntosJugados = 0;
let puntosGanados = 0;
let puntosEmpatados = 0;
let puntosPerdidos = 0;

function btn_presionado(button_id) {
    // armo el id de la figura elegida
    let armado_de_id = 'f' + button_id;
    // pongo la figura elegida
    document.getElementById(armado_de_id).style.display = "block";
    // aleatorio para la pc
    let pc = Math.round(Math.random() * (3 - 1) + 1);
    // oculto el ?
    document.getElementById('signo_pregunta').textContent = "";
    // armo el id de la figura al azar
    let armado_id = 'e' + pc;
    // pongo la figura elegida al azar
    document.getElementById(armado_id).style.display = "block";
    // llamo a la función que desactiva los botones

    // Métrica 
    puntosJugados++


    if (button_id == pc){
        EMPATASTE.style.display = "flex";
        puntosEmpatados++
    }

    if (button_id == 1) { // sacaste piedra
        if (pc == 2) { // la pc sacó papel
            PERDISTE.style.display = "flex";
            puntosPerdidos++
        } else if (pc == 3) { // la pc sacó tijera
            GANASTE.style.display = "flex";
            puntosGanados++
        }
    }

    if (button_id == 2) { // sacaste papel
        if (pc == 1) { // la pc sacó piedra
            GANASTE.style.display = "flex";
            puntosGanados++
        } else if (pc == 3) { // la pc sacó tijera
            PERDISTE.style.display = "flex";
            puntosPerdidos++
        }
    }

    if (button_id == 3) { // sacaste tijera
        if (pc == 1) { // la pc sacó piedra
            PERDISTE.style.display = "flex";
            puntosPerdidos++
        } else if (pc == 2) { // la pc sacó papel
            GANASTE.style.display = "flex";
            puntosGanados++
        }
    }

 
    setTimeout(
        () => {
            resetear_pagina()
        },
        2500
    )


    document.getElementById('pj').textContent = puntosJugados;
    document.getElementById('pg').textContent = puntosGanados;
    document.getElementById('pe').textContent = puntosEmpatados;
    document.getElementById('pp').textContent = puntosPerdidos;

}


// Reseteo de la página 
let btn_reset = document.getElementById('btn_reset');
btn_reset.addEventListener('click', () => {
    window.location.reload()
});

function resetear_pagina() {
    // cuerpo
    E1.style.display = "none";
    E2.style.display = "none";
    E3.style.display = "none";

    PI.style.display = "none";
    PA.style.display = "none";
    TI.style.display = "none";

    GANASTE.style.display = "none";
    EMPATASTE.style.display = "none";
    PERDISTE.style.display = "none";

    document.getElementById('signo_pregunta').textContent = "?";
}