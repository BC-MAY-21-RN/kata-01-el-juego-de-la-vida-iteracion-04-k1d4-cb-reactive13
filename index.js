const Matriz = require('./models/matrix.js');
let matriz = new Matriz(8,8);
matriz.crearMatriz();
let primerGen = matriz.llenarMatriz();
matriz.imprimirVariasGeneraciones(10, primerGen);