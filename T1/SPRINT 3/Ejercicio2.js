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
