const Matriz = require('.././models/matrix.js');
// Inicializamos la matriz de 5x5, la llenamos de celulas aletorias.
let matriz = new Matriz(5,5);
let matrizCreada = matriz.crearMatriz();
let matrizLlenada = matriz.llenarMatriz();


test('Debe de retornar una matriz de dos dimensiones', () =>{
    expect(matrizCreada).toBeDefined();
});

test('La matriz debe de tener valores adentro', () =>{
   for(let i = 0; i < matrizLlenada.length;i++){
       for(let j = 0; j < matrizLlenada[i].length;j++){
        expect(matrizLlenada[i][j]).toBeDefined(); 
       }
   }
});
