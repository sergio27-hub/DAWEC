"use strict";
// Array para almacenar las tareas
var listaTareas = [];
var tareasImportantes = []; // Variable global para almacenar tareas importantes
function agregarTareaDesdeInput() {
    var tareaInput = document.getElementById('tareaInput');
    var nuevoTitulo = tareaInput.value;
    if (nuevoTitulo.trim() !== '') {
        agregarTarea(nuevoTitulo);
        tareaInput.value = ''; // Limpiar el input después de agregar la tarea
    }
    else {
        console.log('El título de la tarea no puede estar vacío.');
    }
}
function agregarTarea(titulo) {
    var nuevaTarea = {
        id: listaTareas.length + 1,
        titulo: titulo,
        completada: false,
        importante: false,
    };
    listaTareas.push(nuevaTarea);
    console.log("Tarea \"".concat(titulo, "\" a\u00F1adida."));
    mostrarTodas(); // Actualizar la lista de tareas en el elemento correspondiente
}
function eliminarTarea(id) {
    var indice = listaTareas.findIndex(function (tarea) { return tarea.id === id; });
    if (indice !== -1) {
        var tareaEliminada = listaTareas.splice(indice, 1)[0];
        console.log("Tarea \"".concat(tareaEliminada.titulo, "\" eliminada."));
        // Eliminar la tarea de la lista de tareas importantes
        tareasImportantes = tareasImportantes.filter(function (tarea) { return tarea.id !== id; });
        mostrarTodas(); // Actualizar la lista de tareas en el elemento correspondiente
    }
    else {
        console.log("No se encontr\u00F3 la tarea con ID ".concat(id, "."));
    }
}
function marcarComoCompletada(id) {
    var tarea = listaTareas.find(function (t) { return t.id === id; });
    if (tarea) {
        tarea.completada = true;
        console.log("Tarea \"".concat(tarea.titulo, "\" marcada como completada."));
        mostrarTodas(); // Actualizar la lista de tareas en el elemento correspondiente
    }
    else {
        console.log("No se encontr\u00F3 la tarea con ID ".concat(id, "."));
    }
}
function marcarComoImportante(id) {
    var tarea = listaTareas.find(function (t) { return t.id === id; });
    if (tarea) {
        tarea.importante = true;
        console.log("Tarea \"".concat(tarea.titulo, "\" marcada como importante."));
        tareasImportantes.push(tarea);
        mostrarTodas(); // Actualizar la lista de tareas en el elemento correspondiente
    }
    else {
        console.log("No se encontr\u00F3 la tarea con ID ".concat(id, "."));
    }
}
function mostrarTodas() {
    var listaTareasElemento = document.getElementById('listaTareas');
    var tareaInputElemento = document.getElementById('sistemaTareas');
    if (listaTareasElemento && tareaInputElemento) {
        listaTareasElemento.innerHTML = '';
        tareaInputElemento.innerHTML = "<h1>Sistema de Tareas</h1>\n        <label for=\"tareaInput\">Nueva Tarea:</label>\n        <input type=\"text\" id=\"tareaInput\" placeholder=\"Escribe tu nueva tarea\">\n        <button onclick=\"agregarTareaDesdeInput()\">Agregar Tarea</button>";
        listaTareas.forEach(function (tarea) {
            var tareaElemento = document.createElement('li');
            tareaElemento.innerHTML = "\n          <span>".concat(tarea.titulo, "</span>\n          <button onclick=\"marcarComoImportante(").concat(tarea.id, ")\">&#x2605; Importante</button>\n          <button onclick=\"marcarComoCompletada(").concat(tarea.id, ")\">&#10003; Completada</button>\n          <button onclick=\"eliminarTarea(").concat(tarea.id, ")\">&#x1F5D1; Eliminar</button>\n        ");
            if (tarea.completada) {
                tareaElemento.classList.add('completed');
            }
            listaTareasElemento.appendChild(tareaElemento);
        });
    }
}
function mostrarImportantes() {
    var listaTareasElemento = document.getElementById('listaTareas');
    var tareaInputElemento = document.getElementById('sistemaTareas');
    var h1Importantes = document.createElement('h1');
    h1Importantes.textContent = 'Importantes';
    if (listaTareasElemento && tareaInputElemento) {
        listaTareasElemento.innerHTML = '';
        tareaInputElemento.innerHTML = '';
        tareaInputElemento.appendChild(h1Importantes);
        tareasImportantes.forEach(function (tarea) {
            var tareaElemento = document.createElement('li');
            tareaElemento.textContent = "".concat(tarea.titulo);
            listaTareasElemento.appendChild(tareaElemento);
        });
    }
}
function mostrarCompletadas() {
    var listaTareasElemento = document.getElementById('listaTareas');
    var tareaInputElemento = document.getElementById('sistemaTareas');
    var h1Completadas = document.createElement('h1');
    h1Completadas.textContent = 'Completadas';
    if (listaTareasElemento && tareaInputElemento) {
        listaTareasElemento.innerHTML = '';
        tareaInputElemento.innerHTML = '';
        tareaInputElemento.appendChild(h1Completadas);
        var completadas = listaTareas.filter(function (tarea) { return tarea.completada; });
        completadas.forEach(function (tarea) {
            var tareaElemento = document.createElement('li');
            tareaElemento.innerHTML = "\n          <span>".concat(tarea.titulo, "</span>\n        ");
            tareaElemento.classList.add('completed');
            listaTareasElemento.appendChild(tareaElemento);
        });
    }
}
function mostrarImportantesDesdeMenu() {
    mostrarImportantes();
}
function borrarTarea(id) {
    eliminarTarea(id);
    mostrarTodas();
}
function marcarImportante(id) {
    marcarComoImportante(id);
    mostrarTodas();
}
function mostrarTareasEnConsola() {
    console.log('Lista de Tareas:');
    listaTareas.forEach(function (tarea) {
        console.log("ID: ".concat(tarea.id, ", T\u00EDtulo: ").concat(tarea.titulo, ", Completada: ").concat(tarea.completada ? 'Sí' : 'No', ", Importante: ").concat(tarea.importante ? 'Sí' : 'No'));
    });
    console.log('Lista de Tareas Importantes:');
    tareasImportantes.forEach(function (tarea) {
        console.log("ID: ".concat(tarea.id, ", T\u00EDtulo: ").concat(tarea.titulo, ", Completada: ").concat(tarea.completada ? 'Sí' : 'No', ", Importante: ").concat(tarea.importante ? 'Sí' : 'No'));
    });
}
// Llamas a la función cuando sea necesario
mostrarTareasEnConsola();
