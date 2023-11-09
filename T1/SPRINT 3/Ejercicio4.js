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
  