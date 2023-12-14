"use strict";
function obtenerDescripcionUsuario(usuario) {
    return "Hola! Soy el usuario ".concat(usuario.nombre, ", tengo ").concat(usuario.edad, " a\u00F1os y mi correo electr\u00F3nico es ").concat(usuario.correoElectronico);
}
var usuario1 = {
    nombre: "Juan",
    edad: 25,
    correoElectronico: "juan@example.com",
};
var usuario2 = {
    nombre: "María",
    edad: 30,
    correoElectronico: "maria@example.com",
};
var usuario3 = {
    nombre: "Carlos",
    edad: 22,
    correoElectronico: "carlos@example.com",
};
var usuario4 = {
    nombre: "Ana",
    edad: 28,
    correoElectronico: "ana@example.com",
};
var usuario5 = {
    nombre: "Pedro",
    edad: 35,
    correoElectronico: "pedro@example.com",
};
var arrayUsuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];
// Función que imprime la descripción de un usuario con un delay
function imprimirConDelay(usuario, tiempo) {
    setTimeout(function () {
        console.log(obtenerDescripcionUsuario(usuario));
    }, tiempo);
}
// Establecer un tiempo de retraso inicial
var tiempoInicial = 0;
// Imprimir por consola la descripción para cada usuario con un delay
for (var _i = 0, arrayUsuarios_1 = arrayUsuarios; _i < arrayUsuarios_1.length; _i++) {
    var usuario = arrayUsuarios_1[_i];
    imprimirConDelay(usuario, tiempoInicial);
    tiempoInicial += 1000; // Añadir 1000 milisegundos (1 segundo) al tiempo de retraso
}
