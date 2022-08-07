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

  siguienteGeneracion() {
    // Generamos copia de la matriz, donde pondremos los nuevos valores de las celulas
    let nextGen = this.matriz.map((arr) => [...arr]);
    // Recorremos matriz original
    for (let i = 0; i < this.matriz; i++) {
      for (let j = 0; j < this.matriz[i]; j++) {
        // Creamos variable para contar vecinos
        let numDeVecinos = 0;
        // Recorremos los vecinos de la celula en cuestion
        for (let x = -1; x < 2; x++) {
          for (let y = -1; y < 2; y++) {
            // Si llegamos a la posicion de la celula, la brincamos pues la celula no puede ser vecina de si misma
            let vecinoX = i + x;
            let vecinoY = j + y;
            if (this.matriz[vecinoX][vecinoY] != undefined) {
              if (this.matriz[vecinoX][vecinoY] === "*") {
                numDeVecinos++;
              }
            }
          }
        }

        // fuera del ciclo para contar vecinos, dentro del ciclo de la matriz
        /* Cuando salimos del ciclo de conteo de vecinos, tenemos el numero de vecinos
        para la celula en posicion [i][j]
        es aqui cuando aplicamos las reglas de la vida
        */
        if (this.matriz[i][j] === "*" && numDeVecinos < 2) {
          nextGen[i][j] = ".";
        } else if (this.matriz[i][j] === "*" && numDeVecinos > 3) {
          nextGen[i][j] = ".";
        } else if (this.matriz[i][j] === "." && numDeVecinos === 3) {
          nextGen[i][j] = "*";
        }
      }
    }
    return nextGen;
  }

  imprimirMatriz() {
    for (let i = 0; i < this.matriz.length; i++) {
      let line = "";
      for (let j = 0; j < this.matriz[i].length; j++) {
        line += this.matriz[i][j] + " ";
      }
      console.log(line);
    }
    // let nextGen = this.crearMatriz(rows, columns);
    return "";
  }
}
module.exports = Matriz;
