const Matrix = require('./matrix');

const matrix = [[1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 1, 0], [3, 1, 1, 2]];

console.log(new Matrix(matrix).determinant());
