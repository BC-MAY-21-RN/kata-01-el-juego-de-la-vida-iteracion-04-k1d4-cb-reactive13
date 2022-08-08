const Matriz = require("./models/matrix.js");
/*
Pasos para correr esta cosa
1- Instanciar un objeto de matrix.js
2- Crear la matriz
3- LLenar la matriz
4- Dos opciones aqui
    |----------------------------------------------------------------------------------------|
   | 4A -> Para imprimir solo dos generaciones.                                            |
   | 4B -> Para imprimir x numero de generaciones                                          |
   | --------------------------------------------------------------------------------------|
   | 4A- let primeraGen = matriz.llenarMatriz();                                           |
   |     matriz.imprimirMatriz(primeraGen);                                                |
   |     let segundaGen = matriz.siguienteGeneracion(primeraGen);                          |
   |     matriz.imprimirMatriz(segundaGen);                                                |
   | --------------------------------------------------------------------------------------|
   | 4B-                                                                                   |
   |     let primerGen = matriz.llenarMatriz();                                            |
   |     matriz.imprimirVariasGeneraciones(numDeGeneraciones, primerGen);                  |
   | --------------------------------------------------------------------------------------|
*/
let matriz = new Matriz(8, 8); // Paso 1
matriz.crearMatriz(); // Paso 2
let primerGen = matriz.llenarMatriz(); // Paso 3
matriz.imprimirVariasGeneraciones(8, primerGen);

// const Matrix = require("./models/matrix");

// let matriz = new Matrix(6, 6);

// matriz.crearMatriz();
// matriz.llenarMatriz();
// matriz.agregarCelulasAleatorias();
// // let celulasVivas = [[1,4],[2,3],[2,4]]
// // matriz.fillLiveCells(celulasVivas)
// // console.log("________________")
// // matriz.siguienteGeneracion();
// console.table(matriz.imprimirMatriz());
// /**
//  *
//  * constructor(x, y) {
// this.x = x;
// this.y = y;
// this.table = this.initializeBoard();
// }

// initializeBoard() {
// let array1 = [];
// let array2 = [];

// for (let i = 0; i < this.y; i++) {
// for (let j = 0; j < this.x; j++) {
// let x = Math.floor(Math.random() * 2);
// array2.push(x);
// }
// array1.push(array2);
// array2 = [];
// }
// this.table = array1;
// return this.table;
// }
//  */
