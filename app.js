let numeroRamdon;
const span = document.querySelector("span");
const btnReset = document.getElementById("btnReset");
span.textContent = localStorage.getItem("puntaje") || 0;

function numeroAleatorio() {
numeroRamdon = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
}

function crearPreguntas() {
    numeroAleatorio();
const container = document.getElementById("container");

container.innerHTML = `<label>${todasLasPreguntas[numeroRamdon].pregunta}</label></br>
                      <button id="opcion1">${todasLasPreguntas[numeroRamdon].opciones[0]}</button><br>
                      <button id="opcion2">${todasLasPreguntas[numeroRamdon].opciones[1]}</button><br>
                      <button id="opcion3">${todasLasPreguntas[numeroRamdon].opciones[2]}</button><br>`;
}

function Juego() {

    crearPreguntas();
    let OpcionCorrecta = todasLasPreguntas[numeroRamdon].correcta;
    const opcion1 = document.getElementById("opcion1");
    const opcion2 = document.getElementById("opcion2");
    const opcion3 = document.getElementById("opcion3");
    opcion1.addEventListener("click", function() {
        respuestaCorrecta1();
    });
    
    opcion2.addEventListener("click", function() {
        respuestaCorrecta2();
    });
    
    opcion3.addEventListener("click", function() {
        respuestaCorrecta3();
    });
    
    function respuestaCorrecta1() {
        if (OpcionCorrecta == opcion1.textContent) {
            span.textContent++;
            Juego();
        }
    }
    
    function respuestaCorrecta2() {
        if (OpcionCorrecta == opcion2.textContent) {
            span.textContent++;
            Juego();
        }
    }
    
    function respuestaCorrecta3() {
        if (OpcionCorrecta == opcion3.textContent) {
            span.textContent++;
            Juego();
        }
    }
    guardarLocalStorage();
    obtenerLocalStorage();
}
Juego();



btnReset.addEventListener("click", function() {
    span.textContent = 0;
    localStorage.removeItem("puntaje");
});

function guardarLocalStorage() {
    localStorage.setItem("puntaje", span.textContent);
}
function obtenerLocalStorage() {
    const puntaje = localStorage.getItem("puntaje");
    if (puntaje) {
        span.textContent = puntaje;
    }
}