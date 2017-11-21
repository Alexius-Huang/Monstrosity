const Matrix = require('./matrix.js')

function generateGaussianNumber() {
  let u = 0, v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)  
}

/*
 *  [rows Number, cols Number] gaussianRandom(result [][][Number])
 *
 *  Generate 2-dimensional array of values with Gaussian Distribution
 *
 */

module.exports = function gaussianRandom(rows, cols) {
  let result = []
  for (let row = 0; row < rows; row++) {
    result.push([])
    for (let col = 0; col < cols; col++) {
      result[row].push(generateGaussianNumber())
    }
  }

  return new Matrix(result)
}
