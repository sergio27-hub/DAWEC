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

