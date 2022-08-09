class Matriz {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.matriz = [];
  }

  crearMatriz() {
    for (let i = 0; i < this.rows; i++) {
      this.matriz[i] = new Array(this.columns);
    }
    return this.matriz;
  }

  llenarMatriz() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.matriz[i][j] = Math.floor(Math.random() * 2);
        this.matriz[i][j] === 1
          ? (this.matriz[i][j] = "*")
          : (this.matriz[i][j] = ".");
      }
    }
    return this.matriz;
  }
  contarVecinos(primeraGen) {
    // Recorrer la matriz original
    let numeroDeVecinos = 0;
    for (let i = 0; i < primeraGen.length; i++) {
      for (let j = 0; j < primeraGen[i].length; j++) {


        
      }
    }
  }
  siguienteGeneracion(primeraGen) {
    // Generamos copia de la matriz, donde pondremos los nuevos valores de las celulas
    let sigGen = [...primeraGen];
    // Recorremos matriz original
    for (let i = 0; i < primeraGen.length; i++) {
      for (let j = 0; j < primeraGen[i].length; j++) {
        // Variable para aplicar los vecinos
        let celula = primeraGen[i][j];
        // Creamos variable para contar vecinos
        let numDeVecinos = 0;
        // Recorremos los vecinos de la celula en cuestion
        for (let row = -1; row < 2; row++) {
          for (let col = -1; col < 2; col++) {
            // Si estamos sobre la celula de la que queremos contar los vecinos, la brincamos.
            if (row == 0 && col == 0) {
              continue;
            }
            // Definimos variables para la posicion del vecino
            let vecinoX = i + row;
            let vecinoY = j + col;
            // Si estamos fuera de la matriz no entramos al if.
            if ( (vecinoX >= 0 && vecinoY >= 0) && (vecinoX < primeraGen.length && vecinoY < primeraGen[i].length)) {
              if (primeraGen[vecinoX][vecinoY] === "*") {
                numDeVecinos++;
              }
            }
          }
        }
        /* Cuando salimos del ciclo de conteo de vecinos, tenemos el numero de vecinos
        para la celula en posicion [i][j]
        es aqui cuando aplicamos las reglas de la vida
        */
        if (celula === "*" && numDeVecinos < 2) {
          sigGen[i][j] = ".";
        } else if (celula === "*" && numDeVecinos > 3) {
          sigGen[i][j] = ".";
        } else if (celula === "." && numDeVecinos === 3) {
          sigGen[i][j] = "*";
        }
      }
    }
    return sigGen;
  }

  imprimirVariasGeneraciones(numeroDeGeneraciones, generacion) {
    for (let i = 0; i <= numeroDeGeneraciones; i++) {
      console.log("Generacion: " + i);
      this.imprimirMatriz(generacion);
      generacion = this.siguienteGeneracion(generacion);
      console.log("--------------------");
    }
  }

  imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      let line = "";
      for (let j = 0; j < matriz[i].length; j++) {
        line += matriz[i][j] + " ";
      }
      console.log(line);
    }
    // let nextGen = this.crearMatriz(rows, columns);
    return "";
  }
}
module.exports = Matriz;

// class Matriz {
//   constructor(columns, rows) {
//     this.columns = columns;
//     this.rows = rows;
//     this.matriz = [];
//   }

//   // Creamos matriz de x, y
//   crearMatriz() {
//     for (let i = 0; i < this.rows; i++) {
//       this.matriz[i] = new Array(this.columns);
//     }
//     return this.matriz;
//   }

//   // Llenamos matriz de puntitos
//   llenarMatriz() {
//     for (let i = 0; i < this.rows; i++) {
//       for (let j = 0; j < this.columns; j++) {
//         this.matriz[i][j] = ".";
//       }
//     }
//     return this.matriz;
//   }

//   llenarMatrizDeCerosYUnos() {
//     for (let i = 0; i < this.rows; i++) {
//       for (let j = 0; j < this.columns; j++) {
//         this.matriz[i][j] = Math.floor(Math.random() * 2);
//       }
//     }
//     return this.matriz;
//   }

//   agregarCelulasAleatorias() {
//     for (let i = 0; i < this.rows; i++) {
//       for (let j = 0; j < this.columns; j++) {
//         this.matriz[i][j] === 1
//           ? (this.matriz[i][j] = "*")
//           : (this.matriz[i][j] = ".");
//       }
//     }
//     return this.matriz;
//   }

//   imprimirMatriz() {
//     for (let i = 0; i < this.matriz.length; i++) {
//       let line = "";
//       for (let j = 0; j < this.matriz[i].length; j++) {
//         line += this.matriz[i][j] + " ";
//       }
//       console.log(line);
//     }
//     return "";
//   }

//   // coordenadas = [ [x,y] , [x,y] , [x,y]  ]

//   fillLiveCells(cells) {
//     cells.forEach((coordenada) => {
//       this.matriz[coordenada[0]][coordenada[1]] = "*";
//     });

//     this.imprimirMatriz();
//     return this.matriz;
//   }

//   siguienteGeneracion() {
//     for (let y = 1; y < this.columns - 1; y++) {
//       for (let x = 1; x < this.rows - 1; x++) {
//         let num = this.countNeighbours(x, y);
//         if (this.matriz[x][y] == ".") {
//           if (num == 3) this.matriz[x][y] = "*";
//         } else {
//           if (num == 3 || num == 2) {
//             this.matriz[x][y] = "*";
//           } else {
//             this.matriz[x][y] = ".";
//           }
//         }
//       }
//     }

//     this.imprimirMatriz();
//     return "";
//   }

//   /*countNeighbours(x, y) {
//     var neighbours = 0;

//     for (var i = -1; i < 1; i++) {
//       for (var j = -1; j < 1; j++) {
//         if (this.matriz[x + i][y + j] == "*" && (x != 0 && y != 0))
//             neighbours++;
//       }
//     }

//     return neighbours;
//   }
//   */

//   countNeighbours(x, y) {
//     let neighbours = 0;
//     neighbours += this.contarLados(x - 1, y - 1);
//     neighbours += this.contarMedios(x, y);
//     neighbours += this.contarLados(x - 1, y + 1);

//     return neighbours;
//   }

//   contarLados(x, y) {
//     let count = 0;
//     for (let i = 0; i < 3; i++) {
//       if (this.matriz[x][y] == "*") {
//         count++;
//       }
//       x++;
//     }
//     return count;
//   }

//   contarMedios(x, y) {
//     let count = 0;
//     if (this.matriz[x - 1][y] == "*") {
//       count++;
//     }

//     if (this.matriz[x + 1][y] == "*") {
//       count++;
//     }
//     return count;
//   }
// }

// module.exports = Matriz;
