const Matriz = require("./models/matrix.js");

test('Debe de retornar una matriz de dos dimensiones', () =>{
    expect(matrizCreada).toBeDefined();
});

test('La matriz no debe de estar vacia', () =>{
   for(let i = 0; i < matrizLlenada.length;i++){
       for(let j = 0; j < matrizLlenada[i].length;j++){
        expect(matrizLlenada[i][j]).toBeDefined(); 
       }
   }
});