interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
    importante: boolean;
  }
  
  // Array para almacenar las tareas
  const listaTareas: Tarea[] = [];
  let tareasImportantes: Tarea[] = []; // Variable global para almacenar tareas importantes
  
  function agregarTareaDesdeInput(): void {
    const tareaInput = document.getElementById('tareaInput') as HTMLInputElement;
    const nuevoTitulo = tareaInput.value;
    if (nuevoTitulo.trim() !== '') {
      agregarTarea(nuevoTitulo);
      tareaInput.value = ''; // Limpiar el input después de agregar la tarea
    } else {
      console.log('El título de la tarea no puede estar vacío.');
    }
  }
  
  function agregarTarea(titulo: string): void {
    const nuevaTarea: Tarea = {
      id: listaTareas.length + 1,
      titulo: titulo,
      completada: false,
      importante: false,
    };
  
    listaTareas.push(nuevaTarea);
    console.log(`Tarea "${titulo}" añadida.`);
    mostrarTodas(); // Actualizar la lista de tareas en el elemento correspondiente
  }
  
  function eliminarTarea(id: number): void {
    const indice = listaTareas.findIndex((tarea) => tarea.id === id);
  
    if (indice !== -1) {
      const tareaEliminada = listaTareas.splice(indice, 1)[0];
      console.log(`Tarea "${tareaEliminada.titulo}" eliminada.`);
  
      // Eliminar la tarea de la lista de tareas importantes
      tareasImportantes = tareasImportantes.filter((tarea) => tarea.id !== id);
  
      mostrarTodas(); // Actualizar la lista de tareas en el elemento correspondiente
    } else {
      console.log(`No se encontró la tarea con ID ${id}.`);
    }
  }
  
  function marcarComoCompletada(id: number): void {
    const tarea = listaTareas.find((t) => t.id === id);
  
    if (tarea) {
      tarea.completada = true;
      console.log(`Tarea "${tarea.titulo}" marcada como completada.`);
      mostrarTodas(); // Actualizar la lista de tareas en el elemento correspondiente
    } else {
      console.log(`No se encontró la tarea con ID ${id}.`);
    }
  }
  
  function marcarComoImportante(id: number): void {
    const tarea = listaTareas.find((t) => t.id === id);
  
    if (tarea) {
      tarea.importante = true;
      console.log(`Tarea "${tarea.titulo}" marcada como importante.`);
      tareasImportantes.push(tarea);
      mostrarTodas(); // Actualizar la lista de tareas en el elemento correspondiente
    } else {
      console.log(`No se encontró la tarea con ID ${id}.`);
    }
  }
  
  function mostrarTodas(): void {
    const listaTareasElemento = document.getElementById('listaTareas');
    const tareaInputElemento = document.getElementById('sistemaTareas');
  
    if (listaTareasElemento && tareaInputElemento) {
      listaTareasElemento.innerHTML = '';
      tareaInputElemento.innerHTML = `<h1>Sistema de Tareas</h1>
        <label for="tareaInput">Nueva Tarea:</label>
        <input type="text" id="tareaInput" placeholder="Escribe tu nueva tarea">
        <button onclick="agregarTareaDesdeInput()">Agregar Tarea</button>`;
  
      listaTareas.forEach((tarea) => {
        const tareaElemento = document.createElement('li');
        tareaElemento.innerHTML = `
          <span>${tarea.titulo}</span>
          <button onclick="marcarComoImportante(${tarea.id})">&#x2605; Importante</button>
          <button onclick="marcarComoCompletada(${tarea.id})">&#10003; Completada</button>
          <button onclick="eliminarTarea(${tarea.id})">&#x1F5D1; Eliminar</button>
        `;
        if (tarea.completada) {
          tareaElemento.classList.add('completed');
        }
        listaTareasElemento.appendChild(tareaElemento);
      });
    }
  }
  
  function mostrarImportantes(): void {
    const listaTareasElemento = document.getElementById('listaTareas');
    const tareaInputElemento = document.getElementById('sistemaTareas');
    const h1Importantes = document.createElement('h1');
    h1Importantes.textContent = 'Importantes';
  
    if (listaTareasElemento && tareaInputElemento) {
      listaTareasElemento.innerHTML = '';
      tareaInputElemento.innerHTML = '';
      tareaInputElemento.appendChild(h1Importantes);
  
      tareasImportantes.forEach((tarea) => {
        const tareaElemento = document.createElement('li');
        tareaElemento.textContent = `${tarea.titulo}`;
        listaTareasElemento.appendChild(tareaElemento);
      });
    }
  }
  
  function mostrarCompletadas(): void {
    const listaTareasElemento = document.getElementById('listaTareas');
    const tareaInputElemento = document.getElementById('sistemaTareas');
    const h1Completadas = document.createElement('h1');
    h1Completadas.textContent = 'Completadas';
  
    if (listaTareasElemento && tareaInputElemento) {
      listaTareasElemento.innerHTML = '';
      tareaInputElemento.innerHTML = '';
      tareaInputElemento.appendChild(h1Completadas);
  
      const completadas = listaTareas.filter((tarea) => tarea.completada);
  
      completadas.forEach((tarea) => {
        const tareaElemento = document.createElement('li');
        tareaElemento.innerHTML = `
          <span>${tarea.titulo}</span>
        `;
        tareaElemento.classList.add('completed');
        listaTareasElemento.appendChild(tareaElemento);
      });
    }
  }
  
  function mostrarImportantesDesdeMenu(): void {
    mostrarImportantes();
  }
  
  function borrarTarea(id: number): void {
    eliminarTarea(id);
    mostrarTodas();
  }
  
  function marcarImportante(id: number): void {
    marcarComoImportante(id);
    mostrarTodas();
  }

  function mostrarTareasEnConsola(): void {
    console.log('Lista de Tareas:');
    listaTareas.forEach((tarea) => {
      console.log(`ID: ${tarea.id}, Título: ${tarea.titulo}, Completada: ${tarea.completada ? 'Sí' : 'No'}, Importante: ${tarea.importante ? 'Sí' : 'No'}`);
    });
  
    console.log('Lista de Tareas Importantes:');
    tareasImportantes.forEach((tarea) => {
      console.log(`ID: ${tarea.id}, Título: ${tarea.titulo}, Completada: ${tarea.completada ? 'Sí' : 'No'}, Importante: ${tarea.importante ? 'Sí' : 'No'}`);
    });
  }
  
  // Llamas a la función cuando sea necesario
  mostrarTareasEnConsola();
  