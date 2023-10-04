# BOLETÍN DE EJERCICIOS - SPRINT 1


## ANÁLISIS DEL PROBLEMA.
##
## Ejercicio 1: Declaración y Tipos de Datos

**Objetivo:** Familiarizarse con la declaración de variables y la identificación de tipos de datos.

- Declara una variable para cada tipo de dato: Number, String, Boolean, Object, Null y Undefined.
- Utiliza `console.log` para mostrar el valor y el tipo de cada variable.

## Solucion del Problema 

En este ejercicio, declararemos varias variables de diferentes tipos de datos y luego utilizaremos `console.log` para mostrar sus valores y tipos en la consola.

```javascript
let nombre = "sergio";
let numero = 123;
let boleann = true;
let objecto = {nombre: 'sergio', edad: 21};
let nulo = null;
const indefinido = undefined;

console.log(`nombre: ${nombre}`, typeof nombre);
console.log(`numero: ${numero}`, typeof numero);
console.log(`booleano: ${boleann}`, typeof boleann);
console.log(`objeto:`, objecto, typeof objecto);
console.log(`nulo: ${nulo}`, typeof nulo);
console.log(`indefinido: ${indefinido}`, typeof indefinido);

```
## Pruebas 

![ejercicio1](image/1.gif)

##
## Ejercicio 2: Operaciones Aritméticas

**Objetivo:** Realizar operaciones aritméticas básicas.

- Declara dos variables numéricas.
- Realiza y muestra en la consola las operaciones de suma, resta, multiplicación, división y módulo entre estas variables.

## Solucion del Problema 

```javascript
//Objetivo: Realizar operaciones aritméticas básicas
var numero1 = 3;
var numero2 = 30;


    let suma  = numero1 + numero2;
    let resta = numero2 - numero1;
    let multiplicacion = numero1 * numero2;
    let division = numero2 / numero1;
    let modulo = numero1 % numero2;
    


console.log(`Suma:${suma}`);
console.log(`resta:${resta}`);
console.log(`multiplicacion:${multiplicacion}`);
console.log(`division:${division}`);
console.log(`Modulo:${modulo}`);

```

## Pruebas 

![ejercicio2](image/2.gif)
##
## Ejercicio 3: Comparaciones

**Objetivo:** Comprender los operadores de comparación y cómo funcionan.

- Declara tres variables con diferentes valores.
- Utiliza operadores de comparación para comparar estas variables entre sí y muestra los resultados en la consola.

## Solucion del Problema 

```javascript
let variable1 = 256;
let variable2 = '256';
let variable3 = 300;

var comparacion1 = variable1 == variable2;
var comparacion2 = variable1 === variable2;
var mayor  = variable3 >= variable1;
var comparacion3 = variable1 !== variable2;
var menor  = variable3 <= variable2;



console.log(`variable1 es igual a variable2: ${comparacion2}`);
console.log(`variable1 es distinto de variable2: ${comparacion3}`);
console.log(`variable3 es mayor que variable1: ${mayor}`);
console.log(`variable3 es menor o igual que variable2: ${menor}`);

```

## Pruebas

![ejercicio3](image/3.gif)

##
## Ejercicio 4: Estructuras Condicionales

**Objetivo:** Implementar estructuras condicionales para controlar el flujo del programa.

- Escribe un programa que tome un número como entrada.
- Si el número es mayor que 10, muestra un mensaje indicando que es mayor.
- Si es menor, muestra otro mensaje.
- Si es exactamente 10, muestra un mensaje indicativo.

## Solucion del Problema 


```javascript
//const readline = require('readline');
//const rl = readline.createInterface({
  //input: process.stdin,
  //output: process.stdout
//});

//function HacerPregunta(){
        //for (let i = 0 ; i<10 ; i++){    
        //rl.question("que numero desea elegir : " , (numerorecogido) => {
            //numerorecogido = parseInt(numerorecogido);
            const numero = prompt("ingresa un numero :");
            const numerorecogido = parseInt(numero);
                if (numerorecogido > 10){
                    console.log("\nel numero introducido es mayor que 10\n");
                
                } else if (numerorecogido < 10){
                    console.log("\n el numero introducido es menor que 10\n")

                } else if (numerorecogido === 10) {
                    console.log(" \n el numero introducido es igual a 10 \n ")
                }
                //HacerPregunta();
            //}
    
    //HacerPregunta();

```
## Pruebas 

![ejercicio4](image/4.gif)

##
## Ejercicio 5: Bucles

**Objetivo:** Implementar bucles para repetir acciones múltiples veces.

- Escribe un bucle que muestre en la consola los números del 1 al 10.
- Modifica el bucle anterior para mostrar solo los números pares entre 1 y 10.

## Solucion del Problema 


```javascript
//Escribir un bucle que muestre en la consola los números del 1 al 10
function Bucle1(){
for (let i= 1 ; i<=10; i++){
    console.log(i);
}
}

//Modificar el bucle anterior para mostrar solo los números pares entre 1 y 10.
function Bucle2 (){
    for (let i= 1 ; i<=10; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}
Bucle1();
console.log("\nModificar el bucle anterior para mostrar solo los números pares entre 1 y 10\n");
Bucle2();

```
## Pruebas 

![ejercicio5](image/5.gif)