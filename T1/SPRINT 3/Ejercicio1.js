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