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

  siguienteGeneracion(primeraGen) {
    // Generamos copia de la matriz, donde pondremos los nuevos valores de las celulas
    let sigGen = primeraGen.map((arr) => [...arr]);
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
            if (row === 0 && col === 0) {
              continue;
            }
            // Definimos variables para la posicion del vecino
            let vecinoX = i + row;
            let vecinoY = j + col;
            // Si estamos fuera de la matriz no entramos al if. 
            if ( vecinoX >= 0 && vecinoY >= 0 && vecinoX < primeraGen.length && vecinoY < primeraGen[i].length) {
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
