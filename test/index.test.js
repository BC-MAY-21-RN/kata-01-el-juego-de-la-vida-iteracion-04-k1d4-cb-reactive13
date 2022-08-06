const Matrix = require("../models/matrix");
let matriz = new Matrix(2, 2);

test("matrix is filled with .", () => {
  var empty = false;
  const m = new Matrix(2, 2);
  m.crearMatriz();
  const matriz = m.llenarMatriz();

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      if (matriz[i][j] != ".") empty = true;
    }
  }
  expect(empty).toBe(false);
});

test(`should be initializated with 4 columns and 3 rows`, () => {
  const m = new Matrix(4, 3);
  expect(m.columns).toBe(4);
  expect(m.rows).toBe(3);
});

test(`should be initializated with 8 columns and 5 rows`, () => {
  const m = new Matrix(8, 5);
  expect(m.columns).toBe(8);
  expect(m.rows).toBe(5);
});

test("should fill the matrix with sexteen dead cells ", () => {
  const m = new Matrix(4, 4);
  m.crearMatriz();
  const matrixFilled = m.llenarMatriz();
  let count = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (matrixFilled[i][j] == ".") {
        count++;
      }
    }
  }
  expect(count).toBe(16);
});

test("should fill the matrix with nine dead cells ", () => {
  const m = new Matrix(3, 3);
  m.crearMatriz();
  const matrixFilled = m.llenarMatriz();
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrixFilled[i][j] == ".") {
        count++;
      }
    }
  }
  expect(count).toBe(9);
});

test("should fill the matrix with 4 dead cells ", () => {
  const m = new Matrix(2, 2);
  m.crearMatriz();
  const matrixFilled = m.llenarMatriz();
  let count = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (matrixFilled[i][j] == ".") {
        count++;
      }
    }
  }
  expect(count).toBe(4);
});

test("should insert 2 alive cells", () => {
  let aliveCells = [
    [1, 1],
    [2, 3],
  ];
  const COLUMNS = 8;
  const ROWS = 4;
  const m = new Matrix(COLUMNS, ROWS);
  m.crearMatriz();
  m.llenarMatriz();
  let count = 0;
  const matrixFilled = m.fillLiveCells(aliveCells);
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (matrixFilled[i][j] == "*") {
        count++;
      }
    }
  }
  expect(count).toBe(2);
});

test("should insert 3 alive cells", () => {
  let aliveCells = [
    [1, 1],
    [2, 3],
    [2, 4],
  ];
  const COLUMNS = 8;
  const ROWS = 4;
  const m = new Matrix(COLUMNS, ROWS);
  m.crearMatriz();
  m.llenarMatriz();
  let count = 0;
  const matrixFilled = m.fillLiveCells(aliveCells);
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (matrixFilled[i][j] == "*") {
        count++;
      }
    }
  }
  expect(count).toBe(3);
});

test("should insert 4 alive cells", () => {
  let aliveCells = [
    [1, 1],
    [2, 3],
    [2, 4],
    [3, 3],
  ];
  const COLUMNS = 8;
  const ROWS = 4;
  const m = new Matrix(COLUMNS, ROWS);
  m.crearMatriz();
  m.llenarMatriz();
  let count = 0;
  const matrixFilled = m.fillLiveCells(aliveCells);
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (matrixFilled[i][j] == "*") {
        count++;
      }
    }
  }
  expect(count).toBe(4);
});

test("should have almost one alive cell", () => {
  const ROWS = 6;
  const COLUMNS = 6;
  let matriz = new Matrix(ROWS, COLUMNS);

  matriz.crearMatriz();
  matriz.llenarMatrizDeCerosYUnos();
  const matrixFilled = matriz.agregarCelulasAleatorias();
  let countAliveCells = 0;
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (matrixFilled[i][j] == "*") {
        countAliveCells++;
      }
    }
  }

  expect(countAliveCells > 0).toBe(true);
});
