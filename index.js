const Matriz = require('./models/matrix.js');
let matriz = new Matriz(5,5);
matriz.crearMatriz();
let first = matriz.llenarMatriz();
let next = matriz.siguienteGeneracion();
console.log('Primera Generacion');
console.table(first);
console.log('Segunda Generacion');
console.table(next);
