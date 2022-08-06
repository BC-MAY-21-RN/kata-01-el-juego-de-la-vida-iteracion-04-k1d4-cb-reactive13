const Matrix = require("./models/matrix");

let matriz = new Matrix(6, 6);

matriz.crearMatriz();
matriz.llenarMatriz();
matriz.agregarCelulasAleatorias();
// let celulasVivas = [[1,4],[2,3],[2,4]]
// matriz.fillLiveCells(celulasVivas)
// console.log("________________")
// matriz.siguienteGeneracion();
console.table(matriz.imprimirMatriz());
/**
 * 
 * constructor(x, y) {
this.x = x;
this.y = y;
this.table = this.initializeBoard();
}

initializeBoard() {
let array1 = [];
let array2 = [];

for (let i = 0; i < this.y; i++) {
for (let j = 0; j < this.x; j++) {
let x = Math.floor(Math.random() * 2);
array2.push(x);
}
array1.push(array2);
array2 = [];
}
this.table = array1;
return this.table;
}
 */
