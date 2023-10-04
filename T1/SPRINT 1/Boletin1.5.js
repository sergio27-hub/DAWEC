
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