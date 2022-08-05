class Board{
    constructor(rows, columns) {
      this.rows = rows;
      this.columns = columns;
      this.matriz = [];
    }


    crearMatriz() {
        for(let i = 0; i < this.columns; i++){
            this.matriz[i] = new Array(this.rows);
        }
        return this.matriz
    }

    
    llenarMatriz() {
        for(let i = 0; i < this.columns; i++){
          for(let j=0; j<this.rows;j++){
            this.matriz[i][j]= Math.floor(Math.random()*2);
          }
        }
        return this.matriz
    }

    generarCelulas(){
        for(let i = 0; i < this.columns; i++){
            for(let j=0; j<this.rows;j++){
             this.matriz[i][j] === 1 ? this.matriz[i][j] = '*' : this.matriz[i][j] = '.'; 
            }
          }
          return this.matriz
        }

    imprimirMatriz() {
      for(let i=0; i<this.matriz.length; i++){
        let line= '';
        for (let j = 0; j < this.matriz[i].length; j++) {
            line += this.matriz[i][j] + ' '; 
        }
        console.log(line);
      }
      return '';
    }

}
module.exports = Board;