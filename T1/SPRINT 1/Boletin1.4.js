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