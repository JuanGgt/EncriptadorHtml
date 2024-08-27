function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let buscador = document.getElementById("buscador");

    let textoCifrado = texto
       .replace(/e/gi, "enter")
       .replace(/i/gi, "imes")
       .replace(/a/gi, "ai")
       .replace(/o/gi, "ober")
       .replace(/u/gi, "ufat");

if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    buscador.src = "./img/encriptador.avif";
} else {
    buscador.src = "./img/buscador.png";
    tituloMensaje.textContent = "Mensaje no encontrado"
    parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
    alert ("Por favor ingrese un texto");
}
}


function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let buscador = document.getElementById("buscador");

    let textoCifrado = texto
       .replace(/enter/gi, "e")
       .replace(/imes/gi, "i")
       .replace(/ai/gi, "a")
       .replace(/ober/gi, "o")
       .replace(/ufat/gi, "u");

if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    buscador.src = "./img/desencriptado.avif";
} else {
    buscador.src = "./img/buscador.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado"
    parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
    alert ("Es necesario ingresar un texto");
}
}