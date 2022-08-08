const Matriz = require('./models/matrix.js');
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
let matriz = new Matriz(8,8); // Paso 1
matriz.crearMatriz(); // Paso 2
let primerGen = matriz.llenarMatriz(); // Paso 3
matriz.imprimirVariasGeneraciones(8, primerGen); // Paso 4B.