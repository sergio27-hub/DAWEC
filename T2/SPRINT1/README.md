# T2 SPRINT 1 (REACT) <img src="./primer-proyecto/IMAGES/logoReact.png" alt="Logito" width="60" allign="left" padding="20">

 ## ANÁLISIS DEL PROBLEMA <img src="./primer-proyecto/IMAGES/lapiz.png" alt="Logito" width="60" allign="left">

## Ventajas y Desventajas de Reactjs y Angular

| Aspecto                     | React                                    | Angular                                  |
|-----------------------------|------------------------------------------|------------------------------------------|
| **Curva de aprendizaje**    | - Relativamente baja                    | - Relativamente alta                     |
| **Tamaño de descarga inicial**| - Más pequeño                          | - Más grande                             |
| **Flexibilidad**            | - Más flexible en la elección de herramientas | - Menos flexible, más estructurado       |
| **Arquitectura**            | - Solo una biblioteca                   | - Framework completo                    |
| **JSX**                     | - Uso de JSX (HTML en JavaScript)        | - Uso de templates HTML en TypeScript   |
| **Comunidad**               | - Grande y activa                       | - Grande y activa                       |
| **Rendimiento**             | - Optimizaciones con Virtual DOM        | - Dos-way data binding puede afectar rendimiento |
| **Herramientas integradas** | - Menos herramientas integradas         | - Herramientas integradas para enrutamiento, gestión de estado, etc. |
| **Tipo de lenguaje**        | - JavaScript                              | - TypeScript                             |
| **Uso en grandes proyectos** | - Muy adecuado para proyectos pequeños y medianos | - Más adecuado para proyectos grandes y complejos |


### Ejercicio 1: Hola Mundo en React y Componente con Props

- Crea un componente funcional llamado HolaMundo que simplemente renderice un elemento 
~~~html 
<h1> con el texto "¡Hola, Mundo!".
~~~ 
- Renderiza este componente dentro del componente App.
- Crea un componente funcional llamado Saludo que acepte una prop nombre.
- Este componente debe renderizar un párrafo que diga "Hola, [nombre]".
- Renderiza el componente Saludo varias veces en App con diferentes nombres.

#### Especificaciones   
**Prueba: Hacer que ponga “Hola Mundo!”, ver que se renderiza y que el componente funcione como se pide en las Tareas.**
  
## Ejercicio 2: Lista de Elementos

- Crea un componente ListaDeFrutas que renderice una lista (< ul >) de elementos (< li >).
- El componente debe aceptar un array de frutas como prop y renderizar cada fruta en un elemento de lista. (renderizar su imagen)
- Prueba el componente con diferentes arrays de frutas.


#### Especificaciones
**Hacer que se pida introducir un nombre y una edad, tras esto, tendría que salir un texto que indique “Hola! mi nombre es {{nombre}} y tengo {{edad}} años”**


## Ejercicio 3: Contador de Clicks
- Crea un componente Contador que muestre un número (inicialmente 0) y un botón.
- Cada vez que el botón sea clickeado, el número debe incrementarse en uno.
- Implementa esto utilizando el hook useState.


#### Especificaciones
  **Prueba: Descargar un autoclicker y usarlo para que se registren muchos clicks para una de las pruebas. Otra prueba tiene que ser con tres clicks y otra con 15 clicks.**
  
## Ejercicio 4: Aplicación de Tareas

  **Objetivo**: Crea una aplicación de lista de tareas (ToDoApp) que permita al usuario añadir tareas, marcarlas como completadas y borrarlas
  
- La aplicación debe tener un campo de texto para ingresar nuevas tareas y una lista de tareas mostradas debajo.
- Cada tarea en la lista debe tener un checkbox para marcarla como completada y un botón para eliminarla.
- Gestiona el estado de las tareas (añadir, completar, eliminar) utilizando useState.


#### Especificaciones
  **Prueba: Haz una prueba para añadir un par de tareas, otra prueba para completar una tarea y otra prueba para eliminar la tarea restante.**




## Ejercicio 5: Gestor de Tareas con Estados Complejos y Local Storage

#### Descripción

  **Objetivo**: Desarrollar una aplicación de gestión de tareas (to-do list) avanzada en React que no solo permita añadir, marcar y eliminar tareas, sino también categorizarlas y persistir los datos en el navegador usando Local Storage.

- Diseña una interfaz que permita al usuario introducir tareas con una categoría asociada (por ejemplo, trabajo, personal, estudio).
- Proporciona la opción de seleccionar categorías de una lista predefinida o añadir una nueva.
- Permite al usuario marcar tareas como completadas, editarlas o eliminarlas.
- Añade la funcionalidad para filtrar tareas por categoría o estado (completado, borrado).
  
**Uso de Local Storage para Persistencia de Datos**
<ol><li>Guarda las tareas y categorías en el Local Storage del navegador para que no se pierdan al recargar la página.<li>
Carga las tareas guardadas cuando la aplicación se inicia.</ol>
<h4>Consejos: Manejo Complejo del Estado</h4>

- Utiliza useState para manejar los diferentes estados de la aplicación (lista de tareas, categorías, filtro seleccionado).
- Considera la utilización de useReducer si el manejo del estado se vuelve demasiado complejo con useState.



#### Especificaciones

**Prueba: Genera tareas con diversas categorías. Muestra la vista filtrada de cada categoría donde sólo aparezcan esas tareas. Marca algunas como completadas, elimina una y edita otra.Recarga la página y vuelve a mirar si están las tareas guardadas o no (deberían estar).**


## Solucion del Problema 