function estudiantesDestacadosPorAsignatura(estudiantes, asignatura) {
    return estudiantes
      .map(estudiante => ({ nombre: estudiante.nombre, nota: estudiante.calificaciones[asignatura] }))
      .sort((a, b) => b.nota - a.nota)
      .slice(0, 3);
  }
  
  function asignaturaMenorRendimiento(estudiantes) {
    const asignaturas = Object.keys(estudiantes[0].calificaciones);
  
    const promedios = asignaturas.map(asignatura => ({
      asignatura,
      promedio: estudiantes.reduce((total, estudiante) => total + estudiante.calificaciones[asignatura], 0) / estudiantes.length
    }));
  
    return promedios.reduce((min, current) => (current.promedio < min.promedio ? current : min)).asignatura;
  }
  
  function mejoraNotasBeca(estudiantes) {
    const PORCENTAJE_AUMENTO = 0.10;
    const NOTA_MAXIMA = 10;
  
    estudiantes.forEach(estudiante => {
      if (estudiante.beca) {
        // Aumentar todas las notas en un 10%, sin superar la nota máxima de 10
        for (const asignatura in estudiante.calificaciones) {
          estudiante.calificaciones[asignatura] = Math.min(
            estudiante.calificaciones[asignatura] * (1 + PORCENTAJE_AUMENTO),
            NOTA_MAXIMA
          );
        }
      }
    });
  }
  function copiarEstudiantes(estudiantes) {
    return estudiantes.map(estudiante => ({
      ...estudiante,
      calificaciones: { ...estudiante.calificaciones } // Copia profunda de las calificaciones
    }));
  }
  
  function filtrarPorCiudadYAsignatura(estudiantes, ciudad, asignatura) {
    return estudiantes
      .filter(estudiante => estudiante.ciudad === ciudad)
      .sort((a, b) => b.calificaciones[asignatura] - a.calificaciones[asignatura]);
  }
  
  function estudiantesSinBecaPorCiudad(estudiantes, ciudad) {
    const estudiantesSinBecaEnCiudad = estudiantes.filter(estudiante => 
      estudiante.ciudad.toLowerCase() === ciudad.toLowerCase() && !estudiante.beca
    );
  
    return estudiantesSinBecaEnCiudad.length;
  }

  function promedioEdadEstudiantesConBeca(estudiantes) {
    const estudiantesConBeca = estudiantes.filter(estudiante => estudiante.beca);
  
    if (estudiantesConBeca.length === 0) {
      return 0; // Para evitar la división por cero si no hay estudiantes con beca
    }
  
    const sumaEdades = estudiantesConBeca.reduce((acumulador, estudiante) => acumulador + estudiante.edad, 0);
    const promedioEdad = sumaEdades / estudiantesConBeca.length;
  
    return promedioEdad;
  }
  
  function mejoresEstudiantes(estudiantes) {
    const estudiantesConPromedio = estudiantes.map(estudiante => ({
      nombre: estudiante.nombre,
      promedio: calcularPromedio(estudiante.calificaciones),
    }));
  
    const mejoresEstudiantes = estudiantesConPromedio
      .sort((a, b) => b.promedio - a.promedio)
      .slice(0, 2);
  
    return mejoresEstudiantes;
  }
  
  function calcularPromedio(calificaciones) {
    const sumatoriaNotas = Object.values(calificaciones).reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = sumatoriaNotas / Object.keys(calificaciones).length;
    return promedio;
  }
  
  function estudiantesAprobados(estudiantes) {
    return estudiantes
      .filter(estudiante => todasMateriasAprobadas(estudiante.calificaciones))
      .map(estudiante => estudiante.nombre);
  }
  
  function todasMateriasAprobadas(calificaciones) {
    return Object.values(calificaciones).every(nota => nota >= 5);
  }



  
    const estudiantes = [
        { nombre: "Juan", ciudad: "Madrid", beca: false, edad: 21, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
        { nombre: "Ana", ciudad: "Barcelona", beca: true, edad: 20, calificaciones: { matematicas: 9, fisica: 6, historia: 8 } },
        { nombre: "Pedro", ciudad: "Madrid", beca: false, edad: 23, calificaciones: { matematicas: 4, fisica: 5, historia: 7 } },
        { nombre: "Maria", ciudad: "Sevilla", beca: true, edad: 19, calificaciones: { matematicas: 8, fisica: 7, historia: 9 } },
        { nombre: "Jose", ciudad: "Madrid", beca: false, edad: 22, calificaciones: { matematicas: 6, fisica: 7, historia: 5 } },
        { nombre: "Isabel", ciudad: "Valencia", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 8, historia: 7 } },
        { nombre: "David", ciudad: "Bilbao", beca: false, edad: 24, calificaciones: { matematicas: 7, fisica: 6, historia: 8 } },
        { nombre: "Laura", ciudad: "Barcelona", beca: true, edad: 19, calificaciones: { matematicas: 6, fisica: 8, historia: 7 } },
        { nombre: "Miguel", ciudad: "Sevilla", beca: false, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 8 } },
        { nombre: "Sara", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 6, fisica: 5, historia: 9 } },
        { nombre: "Daniela", ciudad: "Valencia", beca: false, edad: 22, calificaciones: { matematicas: 8, fisica: 9, historia: 6 } },
        { nombre: "Alberto", ciudad: "Bilbao", beca: true, edad: 23, calificaciones: { matematicas: 5, fisica: 8, historia: 6 } },
        { nombre: "Gabriel", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 8, fisica: 5, historia: 7 } },
        { nombre: "Carmen", ciudad: "Barcelona", beca: true, edad: 24, calificaciones: { matematicas: 9, fisica: 9, historia: 9 } },
        { nombre: "Roberto", ciudad: "Madrid", beca: false, edad: 20, calificaciones: { matematicas: 4, fisica: 5, historia: 5 } },
        { nombre: "Carolina", ciudad: "Valencia", beca: true, edad: 22, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
        { nombre: "Alejandro", ciudad: "Bilbao", beca: false, edad: 23, calificaciones: { matematicas: 9, fisica: 8, historia: 8 } },
        { nombre: "Lucia", ciudad: "Barcelona", beca: true, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 7 } },
        { nombre: "Ricardo", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 6, fisica: 5, historia: 6 } },
        { nombre: "Marina", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 9, historia: 8 } }
      ];



    //funcion 1
      function mostrarEstudiantesDestacados() {
        const asignaturaBuscada = prompt("asignatura");
        console.log(`Estudiantes destacados en ${asignaturaBuscada}:`, estudiantesDestacadosPorAsignatura(estudiantes, asignaturaBuscada));
      }
    //funcion2 
      function mostrarAsignaturaMenorRendimiento() {
        const asignaturaMenorRendimientoEjemplo = asignaturaMenorRendimiento(estudiantes);
        console.log("Asignatura con menor rendimiento:", asignaturaMenorRendimientoEjemplo);
      }
    //funcion3 
      function mostrarMejoraNotasBeca() {
        console.log("Antes de la mejora:", copiarEstudiantes(estudiantes).filter(estudiante => estudiante.beca).map(estudiante => ({ nombre: estudiante.nombre, calificaciones: estudiante.calificaciones })));
        mejoraNotasBeca(estudiantes);
        console.log("\nDespués de la mejora:", estudiantes.filter(estudiante => estudiante.beca).map(estudiante => ({ nombre: estudiante.nombre, calificaciones: estudiante.calificaciones })));
      }

    //funcion4
    function mostrarFiltrarPorCiudadYAsignatura() {
        const ciudadEjemplo = prompt('ciudad');
        const asignaturaEjemplo = prompt("asignatura");
        const estudiantesFiltrados = filtrarPorCiudadYAsignatura(estudiantes, ciudadEjemplo, asignaturaEjemplo);
        console.log(`Estudiantes de ${ciudadEjemplo} ordenados por ${asignaturaEjemplo}:\n`, estudiantesFiltrados.map(estudiante => ({ nombre: estudiante.nombre, calificacion: estudiante.calificaciones[asignaturaEjemplo] })));
      }

    //función5
    function mostrarEstudiantesSinBecaPorCiudad() {
        const ciudad = prompt('ciudad');
        const cantidadEstudiantesSinBeca = estudiantesSinBecaPorCiudad(estudiantes, ciudad);
        console.log(`Cantidad de estudiantes sin beca en ${ciudad}: ${cantidadEstudiantesSinBeca}`);
      }
    
    //funcion 6
    function mostrarPromedioEdadEstudiantesConBeca() {
        const promedioEdadConBeca = promedioEdadEstudiantesConBeca(estudiantes);
        console.log(`Promedio de edad de estudiantes con beca: ${promedioEdadConBeca}`);
      }
    //funcion 7
    function mostrarMejoresEstudiantes() {
        const mejoresEstudiantesArray = mejoresEstudiantes(estudiantes);
        console.log(`Mejores estudiantes:`);
        console.log(mejoresEstudiantesArray);
      }
      

    //funcion 8 
    
    function mostrarEstudiantesAprobados() {
        console.log(estudiantesAprobados(estudiantes));
    }
