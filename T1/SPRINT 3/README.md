# Boletín de Ejercicios - Sprint 3

## ANÁLISIS DEL PROBLEMA ![Logito](Images/lapiz.png)

## Ejercicio 1: Filtrado de propiedades de un objeto

- Dado un objeto y una lista de propiedades, escribe una función que devuelva un nuevo objeto solo con las propiedades indicadas.

## Ejercicio 2: Transposición de matrices

- Dada una matriz, escribe una función que devuelva la transposición de esa matriz.

## Ejercicio 3: Fusión de objetos sin duplicados

- Dado dos objetos, escribe una función que los fusiona en uno solo. Si hay propiedades repetidas, conserva el valor del segundo objeto.
  
## Ejercicio 4: Cadena más larga en un array

- Escribe una función que, dado un array de cadenas, devuelva la cadena más larga y su longitud.

## Ejercicio 5: Análisis y Transformación Avanzada de Datos

#### Descripción

Dada una tabla de personas con las columnas "Nombre", "Edad", "DNI", "Tiene/No tiene hijos" y "Fecha de nacimiento", escribe una función que permita ordenar la tabla por cualquiera de esas columnas. La columna "Fecha de nacimiento" debe tener el formato DD/MM/AAAA.

#### Especificaciones

- Se debe generar la tabla en HTML a partir del array de ejemplo pero con 20 filas en total (hay que añadir 15 más al ejemplo).
- Al hacer un primer click sobre la clave de la columna, por ejemplo, Nombre, las filas se ordenaran de manera descendente (Z-A).
- Al hacer un segundo click sobre la clave de la columna, por ejemplo, Nombre, las filas se ordenaran de manera ascendente (A-Z).
- Debe mantener la relación de las filas, es decir, no se ordena solo la columna, sino la fila completa.

## Ejercicio 6: Ordenamiento interactivo de tabla de personas

#### Descripción

Dado un conjunto de datos en forma de array con información sobre estudiantes, sus calificaciones en diferentes asignaturas y detalles adicionales, implementa funciones para analizar, filtrar y transformar estos datos.

### Parte 1: Estudiantes Destacados por Asignatura
- Crea una función que, dada una asignatura, retorne los 3 estudiantes con las mejores notas en esa asignatura.

### Parte 2: Asignatura con Menor Rendimiento
- Diseña una función que identifique la asignatura en la que los estudiantes tienen, en promedio, la menor calificación.

### Parte 3: Mejora de Notas para Estudiantes con Beca
- Escribe una función que aumente todas las notas de los estudiantes con beca en un 10% (sin superar el máximo de 10).

### Parte 4: Filtrado por Ciudad y Asignatura
- Crea una función que, dada una ciudad y una asignatura, retorne la lista de estudiantes de esa ciudad ordenados descendentemente por la nota de la asignatura dada.

### Parte 5: Estudiantes Sin Beca por Ciudad
- Escribe una función que, dada una ciudad, retorne la cantidad de estudiantes que no tienen beca en esa ciudad.

### Parte 6: Promedio de Edad de Estudiantes con Beca
- Diseña una función que calcule el promedio de edad de los estudiantes que tienen beca.

### Parte 7: Mejores Estudiantes en Total
- Crea una función que devuelva un array con los 2 estudiantes que tengan el mayor promedio general entre todas las asignaturas.

### Parte 8: Estudiantes con Todas las Materias Aprobadas
- Diseña una función que retorne un array con los nombres de los estudiantes que hayan aprobado todas las materias (considera aprobado con una calificación mayor o igual a 5).

### Funciones a Implementar

- `function estudiantesDestacadosPorAsignatura(estudiantes, asignatura) {}`: Devuelve un array con los 3 estudiantes con las mejores notas en la asignatura dada.
- `function asignaturaMenorRendimiento(estudiantes) {}`: Identifica la asignatura con el promedio de calificación más bajo.
- `function mejoraNotasBeca(estudiantes) {}`: Aumenta todas las notas de los estudiantes con beca en un 10% (máximo 10).
- `function filtrarPorCiudadYAsignatura(estudiantes, ciudad, asignatura) {}`: Devuelve la lista de estudiantes de una ciudad ordenados descendentemente por la nota de la asignatura dada.
- `function estudiantesSinBecaPorCiudad(estudiantes, ciudad) {}`: Devuelve la cantidad de estudiantes sin beca en la ciudad dada.
- `function promedioEdadEstudiantesConBeca(estudiantes) {}`: Devuelve el promedio de edad de los estudiantes con beca.
- `function mejoresEstudiantes(estudiantes) {}`: Devuelve un array con los 2 estudiantes con el mejor promedio general.
- `function estudiantesAprobados(estudiantes) {}`: Devuelve un array con los nombres de los estudiantes que hayan aprobado todas las materias.

#### Especificaciones

- Poned que las funciones se aplican cuando se pulsan botones diferentes, para que así podáis realizar una única prueba para probar cada una de las funciones en cada paso, es decir, paso 1, hacer click en el botón de la función “estudiantesDestacadosPorAsignatura()”, resultado esperado, lo que devuelve ese método y así sucesivamente con el resto de funciones.

## Solucion del Problema 

### Ejercicio 1 
```javascript
function filtrarPropiedades(obj,propiedades){
    return propiedades.reduce((resultado , propiedad) => {

        if (obj.hasOwnProperty(propiedad)){
            
            
            resultado[propiedad]= obj[propiedad];
        }

        return resultado;
    },{});


}

var entrada = {a:1, b:2 , c:3, d:4};
var props = ["a","c"];
var salida = filtrarPropiedades(entrada,props);

console.log(salida);
```
#### Documento HTML
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<body>
    <script src="Ejercicio1.js"></script>
</body>
</html>
~~~
### Ejercicio 2

```javascript 

function transponerMatriz(matriz){

        const filas = matriz.length;
        const columnas = matriz[0].length;
      
        const matrizTranspuesta = [];
      

        for (let i = 0; i < columnas; i++) {

          matrizTranspuesta[i] = [];
      

          for (let j = 0; j < filas; j++) {

            matrizTranspuesta[i][j] = matriz[j][i];
          }
        }
      
        return matrizTranspuesta;
      }
      
      // Ejemplo de uso
      var matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      
      var matrizTranspuesta = transponerMatriz(matriz);
      console.log(matrizTranspuesta);

```
#### Documento HTML
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
    <script src="Ejercicio2.js"></script>
</body>
</html>
~~~

### Ejercicio 3

```javascript
function fusionarObjetos(obj1,obj2){

    const resultado = {...obj1};

    for (const propiedad in obj2){

        resultado[propiedad] = obj2[propiedad];

    }

    return resultado;
}

var PEPE = { a: 1, b: 2, c: 3, d: 4 };
var MANUEL = { b: 2, z: 3 };

var PEPEMANUEL = fusionarObjetos(PEPE, MANUEL);
console.log(PEPEMANUEL);
```
#### Documento HTML
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>
<body>
    <script src="Ejercicio3.js"></script>
</body>
</html>
~~~

### Ejercicio 4
```javascript
function cadenaMasLarga(arr) {
    if (arr.length === 0) {
      return "El array está vacío.";
    }
  
    let cadenaMasLarga = arr[0];
    let longitudMasLarga = arr[0].length;
  
    for (let i = 1; i < arr.length; i++) {
      const longitudActual = arr[i].length;
  
      if (longitudActual > longitudMasLarga) {
        cadenaMasLarga = arr[i];
        longitudMasLarga = longitudActual;
      }
    }
  
    return { cadena: cadenaMasLarga, longitud: longitudMasLarga };
  }
  
  // Ejemplo de uso
  var arrayDeCadenas = ["manzana", "banana", "kiwi", "fresa"];
  var resultado = cadenaMasLarga(arrayDeCadenas);
  console.log(resultado);
```
#### Documento HTML
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>
<body>
    <script src="Ejercicio4.js"></script>
</body>
</html>
~~~
### Ejercicio 5 
```javascript
// Función para ordenar una tabla de personas en HTML
function ordenarTabla(personas, columna) {
    let ordenAscendente = true;
  
    if (personas.length === 0) {
      console.log("La tabla está vacía.");
      return;
    }
  
    if (columna === ordenarTabla.columnaActual) {
      ordenAscendente = !ordenarTabla.ordenAscendente;
    } else {
      ordenarTabla.columnaActual = columna;
      ordenarTabla.ordenAscendente = true;
    }
  
    personas.sort((a, b) => {
      const valorA = obtenerValorParaOrdenar(a[columna]);
      const valorB = obtenerValorParaOrdenar(b[columna]);
  
      if (ordenAscendente) {
        return valorA > valorB ? 1 : -1;
      } else {
        return valorA < valorB ? 1 : -1;
      }
    });
  
    actualizarTablaHTML(personas);
  }
  
  // Función para obtener el valor adecuado para ordenar
  function obtenerValorParaOrdenar(valor) {
    if (isNaN(Date.parse(valor))) {
      // Si no es una fecha, devolver el valor tal cual
      return valor;
    } else {
      // Si es una fecha, convertirla a un formato que se pueda comparar
      const partesFecha = valor.split('/');
      return new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
    }
  }
  
  // Función para generar la tabla en HTML a partir de un array de personas
  function generarTablaHTML(personas) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
  
    const encabezado = document.createElement("tr");
    for (const clave in personas[0]) {
      const th = document.createElement("th");
      th.textContent = clave;
      th.addEventListener("click", () => ordenarTabla(personas, clave));
      encabezado.appendChild(th);
    }
    thead.appendChild(encabezado);
  
    for (const persona of personas) {
      const fila = document.createElement("tr");
      for (const clave in persona) {
        const td = document.createElement("td");
        td.textContent = persona[clave];
        fila.appendChild(td);
      }
      tbody.appendChild(fila);
    }
  
    table.appendChild(thead);
    table.appendChild(tbody);
  
    return table;
  }
  
  // Función para actualizar la tabla en HTML después de ordenar
  function actualizarTablaHTML(personas) {
    const table = document.querySelector("table");
    const tbody = document.createElement("tbody");
  
    for (const persona of personas) {
      const fila = document.createElement("tr");
      for (const clave in persona) {
        const td = document.createElement("td");
        td.textContent = persona[clave];
        fila.appendChild(td);
      }
      tbody.appendChild(fila);
    }
  
    // Reemplazar el antiguo tbody con el nuevo
    table.replaceChild(tbody, table.querySelector("tbody"));
  }
  
  // Ejemplo de uso
  var tablaPersonas = [
    {
      Nombre: "Ana",
      Edad: 25,
      DNI: "45678912B",
      "Tiene/No tiene hijos": "Tiene",
      "Fecha de nacimiento": "12/05/1998"
    },
    {
      Nombre: "Carlos",
      Edad: 30,
      DNI: "12345678A",
      "Tiene/No tiene hijos": "No tiene",
      "Fecha de nacimiento": "05/02/1993"
    },
    {
      Nombre: "Berta",
      Edad: 28,
      DNI: "98765432C",
      "Tiene/No tiene hijos": "Tiene",
      "Fecha de nacimiento": "20/03/1995"
    },
    {
      Nombre: "David",
      Edad: 31,
      DNI: "11223344D",
      "Tiene/No tiene hijos": "Tiene",
      "Fecha de nacimiento": "18/08/1992"
    },
      {
    Nombre: "Elena",
    Edad: 22,
    DNI: "34567890E",
    "Tiene/No tiene hijos": "No tiene",
    "Fecha de nacimiento": "15/09/2001"
  },
  {
    Nombre: "Fernando",
    Edad: 35,
    DNI: "56789012F",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "10/12/1988"
  },
  {
    Nombre: "Gloria",
    Edad: 27,
    DNI: "67890123G",
    "Tiene/No tiene hijos": "No tiene",
    "Fecha de nacimiento": "25/03/1996"
  },
  {
    Nombre: "Hugo",
    Edad: 29,
    DNI: "78901234H",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "08/07/1994"
  },
  {
    Nombre: "Irene",
    Edad: 31,
    DNI: "89012345I",
    "Tiene/No tiene hijos": "No tiene",
    "Fecha de nacimiento": "19/02/1992"
  },
  {
    Nombre: "Juan",
    Edad: 26,
    DNI: "90123456J",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "14/11/1997"
  },
  {
    Nombre: "Karla",
    Edad: 33,
    DNI: "01234567K",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "30/06/1989"
  },
  {
    Nombre: "Luisa",
    Edad: 28,
    DNI: "12345678L",
    "Tiene/No tiene hijos": "No tiene",
    "Fecha de nacimiento": "22/04/1995"
  },
  {
    Nombre: "Mario",
    Edad: 24,
    DNI: "23456789M",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "03/01/1999"
  },
  {
    Nombre: "Natalia",
    Edad: 32,
    DNI: "34567890N",
    "Tiene/No tiene hijos": "No tiene",
    "Fecha de nacimiento": "11/08/1990"
  },
  {
    Nombre: "Óscar",
    Edad: 30,
    DNI: "45678901O",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "17/06/1993"
  },
  {
    Nombre: "Patricia",
    Edad: 29,
    DNI: "56789012P",
    "Tiene/No tiene hijos": "No tiene",
    "Fecha de nacimiento": "09/05/1994"
  },
  {
    Nombre: "Quintín",
    Edad: 26,
    DNI: "67890123Q",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "26/12/1997"
  },
  {
    Nombre: "Raquel",
    Edad: 34,
    DNI: "78901234R",
    "Tiene/No tiene hijos": "No tiene",
    "Fecha de nacimiento": "07/03/1989"
  },
  {
    Nombre: "Santiago",
    Edad: 27,
    DNI: "89012345S",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "04/10/1996"
  }
  ];
  
  // Generar la tabla en HTML y agregarla al cuerpo del documento
  document.body.appendChild(generarTablaHTML(tablaPersonas));
  
  // Variables adicionales para mantener el estado de la ordenación
  ordenarTabla.columnaActual = null;
  ordenarTabla.ordenAscendente = true;
  

```
#### Documento HTML
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio5</title>
    <style>
        table {
          border-collapse: collapse;
          width: 100%;
          margin-top: 20px;
        }
    
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
    
        th {
          background-color: #f2f2f2;
        }
    
        th:hover {
          cursor: pointer;
        }
      </style>
</head>
<body>
    <script src="Ejercicio5.js">


    </script>
    
</body>
</html>
~~~

### Ejercicio 6

```javascript
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

```
#### Documento HTML
~~~html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio 6</title>
  <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
        }

        button {
            padding: 10px;
            margin: 5px;
            font-size: 16px;
            cursor: pointer;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #2980b9;
  }
    </style>
</head>
<body>

    <button onclick="mostrarEstudiantesDestacados()">Estudiantes Destacados</button>
    <button onclick="mostrarAsignaturaMenorRendimiento()">Asignatura Menor Rendimiento</button>
    <button onclick="mostrarMejoraNotasBeca()">Mejora Notas Beca</button>
    <button onclick="mostrarFiltrarPorCiudadYAsignatura()">Filtrar por Ciudad y Asignatura</button>
    <button onclick="mostrarEstudiantesSinBecaPorCiudad()">Estudiantes Sin Beca Por Ciudad</button>
    <button onclick="mostrarPromedioEdadEstudiantesConBeca()">Promedio Edad Estudiantes Con Beca</button>
    <button onclick="mostrarMejoresEstudiantes()">Mejores Estudiantes</button>
    <button onclick="mostrarEstudiantesAprobados()">Estudiantes Aprobados</button>
  

  <script src="Ejercicio6.js"></script>
</body>
</html>

~~~


