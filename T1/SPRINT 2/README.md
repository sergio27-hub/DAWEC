# Boletín de Ejercicios - Sprint 2

 ## ANÁLISIS DEL PROBLEMA.<img src="Images/lapiz.png" alt="Logito" width="60" align="left">

### Ejercicio 1: Cambio de Color con Botón

- Crear una página web que contenga un botón etiquetado "Cambiar color".
- Al hacer clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.
- Pista: Utiliza `Math.random()` para generar valores RGB aleatorios.

### Ejercicio 2: Calculadora de Área

- Diseña una página web con dos campos de entrada (input) para introducir el ancho y el alto de un rectángulo.
- Agrega un botón etiquetado "Calcular Área".
- Al hacer clic en el botón, calcula el área del rectángulo y muestra el resultado en un elemento `<p>` en la página.
- Pista: Área del rectángulo = ancho x alto.

### Ejercicio 3: Listado Dinámico

- Crea una página con un campo de entrada y un botón etiquetado "Añadir a la lista".
- También debes tener una lista vacía (`<ul>` o `<ol>`).
- Cuando el usuario escribe algo en el campo de entrada y hace clic en el botón, entonces el contenido del campo debe agregarse como un nuevo ítem (`<li>`) a la lista.
- Pista: Utiliza el método `.createElement()` y `.appendChild()` del DOM.

### Ejercicio 4: Hover y Estilo Dinámico

- Diseña una página con varios elementos div, cada uno con un texto diferente.
- Al pasar el ratón sobre un div, cambia su color de fondo a azul y el texto a blanco.
- Al mover el ratón fuera del div, restaura sus estilos originales.
- Pista: Considera usar eventos como "mouseover" y "mouseout".

### Ejercicio 5: Detección de Clics y Generación de XPath

#### Descripción

Desarrolla una página web que, al hacer clic en cualquier elemento, muestre el XPath único de ese elemento en un cuadro de alerta o en una sección dedicada de la página.

#### Especificaciones

1. **Detección de Clics:**
   - Añade un evento de escucha a todo el documento (`document`) para detectar cualquier clic realizado.
   - Al detectar un clic, determina el elemento exacto que fue clickeado usando el objeto `event.target`.

2. **Generación de XPath:**
   - Una vez identificado el elemento, genera su XPath.
   - Muestra el XPath generado en un cuadro de alerta o en una sección específica de la página.

Se adjunta el HTML para el ejercicio 5 llamado ‘Sprint2Ejercicio5.html’. Hay que hacer clic sobre cada uno de los botones y tiene que venir reflejado que se ha hecho clic sobre cada uno con una alerta que indique el XPATH relativo del que se ha realizado el clic.

## Solucion del Problema 
### Ejercicio 1 
```javascript
document.addEventListener("DOMContentLoaded" , function(){

    const color =  document.getElementById("ColorCambio");

    color.addEventListener("click", function(){

        const Randomcolor = CambiarColor();

        color.style.background = Randomcolor;
    });
    
});

function CambiarColor(){

    const letters = "0123456789ABCDEF";
    let Randomcolor = "#";
    for (let i = 0; i < 6; i++) {
        Randomcolor += letters[Math.floor(Math.random() * 16)];
    }
    return Randomcolor;
}
```

~~~html
<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>EJERCICIO 1</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
        <style>
           button {

            background-color: #007BFF;
            color: white;
            text-align: center;
            position:fixed;
            align-items: center;
            padding: 20px;

           } 
        </style>
    </head>
    <body>
        <div class="container">
         <button id="ColorCambio"> CAMBIAR DE COLOR </button>
        </div>
        <script src="Ejercicio1.js"></script>
    </body>
</html>
~~~
### Ejercicio 2