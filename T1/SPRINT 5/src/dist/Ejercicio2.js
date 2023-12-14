"use strict";
function saludar(nombre, edad) {
    console.log("Hola soy ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os "));
}
var nombre = "sergio";
var edad = 21;
saludar(nombre, edad);
