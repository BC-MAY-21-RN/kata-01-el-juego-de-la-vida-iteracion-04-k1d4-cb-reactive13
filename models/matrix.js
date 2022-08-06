class Matriz {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.matriz = [];
  }

  // Creamos matriz de x, y
  crearMatriz() {
    for (let i = 0; i < this.rows; i++) {
      this.matriz[i] = new Array(this.columns);
    }
    return this.matriz;
  }

  // Llenamos matriz de puntitos
  
  llenarMatriz() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.matriz[i][j] = ".";
      }
    }
    return this.matriz;
  }

  llenarMatrizDeCerosYUnos() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.matriz[i][j] = Math.floor(Math.random() * 2);
      }
    }
    return this.matriz;
  }

  agregarCelulasAleatorias() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.matriz[i][j] === 1
          ? (this.matriz[i][j] = "*")
          : (this.matriz[i][j] = ".");
      }
    }
    return this.matriz;
  }

  imprimirMatriz() {
    for (let i = 0; i < this.matriz.length; i++) {
      let line = "";
      for (let j = 0; j < this.matriz[i].length; j++) {
        line += this.matriz[i][j] + " ";
      }
      console.log(line);
    }
    return "";
  }

/*
                                    * . . . * 
                                    * * * . . 
                                    * . . . . 
                                    . . * * * 
                                    . * . * . 

*/

// Check neighbours.
  contarVecinos(){
    // recorrer cada elemento y checar sus vecinos. 
    // cuando una celula no este en los bordes, tiene 8 vecinos
    /*
       Para las celulas que esten en el centro, no en los bordes.
         Lado ->  Posicion
         Arriba -> [x-1, y]
         ArribaIzq -> [x-1, y-1]
         Izquierda -> [x, y-1]
         AbajoIzq -> [x+1, y-1]
         Abajo -> [x+1, y]
         AbajoDer -> [x+1, y+1]
         Derecha -> [x, y+1]
         ArribaDer -> [x-1, y+1]

        Todos los valores de x
          x = -1   
          x = 0;
          x = 1
        Todos los valores de y
          y = -1   
          y = 0;
          y = 1

        Todo esto en un for ->
        let conteoDeVecinos = 0;
        recibe matriz, x , y
        for(let x = -1; x < 2; x++){
          for(let y = -1; y < 2; y++){
             if (this.matriz[i][j] === '*'){
              conteoDeVecinos++
            }
          }
        }

        this.matriz.forEach(posicion, indice, matriz)
              Por que asi?
                Porque con este for, pasamos por todas las posiciones de x
                y de y

      */

        

    // Si una celula esta en la esquina, tiene solo 3 vecinos
      // Si celula esta en 
      /* x,y.length = La ultima posicion de x o de y
        Si [x=0, y=0]
        entonces contar: Derecha, AbajoDer y Abajo.
        
        Si [x.length, y=0]
        entonces contar: Arriba, ArribaDer y Der.
        
        Si [x=0, y.length]
        entonces contar: Abajo, AbajoIzq y Izquierda.
        
        Si [x.lenght, y.lenght]
        entonces contar: Arriba, ArribaIzq y Izquierda.
        */

    // Si una celula esta en las aristas, tiene 5 vecinos
    /*
      Aristas
        Ariste De arriba
        [x = 0, y++]
        Ariste De derecha
        [x++, y.lenght]
        Ariste De abajo
        [x.lenght, y++]
        Ariste De izquierda
        [x++, y=0] 
    */
    return ''
  }
// Once we have the count of neighbours, apply the conditions.
  reglasDeVida(){
    return ''
  }
// After applying the contitions, print next generation.
  generacionSiguiente(){
    return ''
  }
















  // coordenadas = [ [x,y] , [x,y] , [x,y]  ]
  fillLiveCells(cells) {
    cells.forEach((coordenada) => {
      this.matriz[coordenada[0]][coordenada[1]] = "*";
    });

    this.imprimirMatriz();
    return this.matriz;
  }

  siguienteGeneracion() {
    for (let y = 1; y < this.columns - 1; y++) {
      for (let x = 1; x < this.rows - 1; x++) {
        let num = this.countNeighbours(x, y);
        if (this.matriz[x][y] == ".") {
          if (num == 3) this.matriz[x][y] = "*";
        } else {
          if (num == 3 || num == 2) {
            this.matriz[x][y] = "*";
          } else {
            this.matriz[x][y] = ".";
          }
        }
      }
    }

    this.imprimirMatriz();
    return "";
  }

  /*countNeighbours(x, y) {
    var neighbours = 0;

    for (var i = -1; i < 1; i++) {
      for (var j = -1; j < 1; j++) {
        if (this.matriz[x + i][y + j] == "*" && (x != 0 && y != 0)) 
            neighbours++;
      }
    }

    return neighbours;
  }
  */

  countNeighbours(x, y) {
    let neighbours = 0;
    neighbours += this.contarLados(x - 1, y - 1);
    neighbours += this.contarMedios(x, y);
    neighbours += this.contarLados(x - 1, y + 1);

    return neighbours;
  }

  contarLados(x, y) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (this.matriz[x][y] == "*") {
        count++;
      }
      x++;
    }
    return count;
  }

  contarMedios(x, y) {
    let count = 0;
    if (this.matriz[x - 1][y] == "*") {
      count++;
    }

    if (this.matriz[x + 1][y] == "*") {
      count++;
    }
    return count;
  }
}

module.exports = Matriz;
