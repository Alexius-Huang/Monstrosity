const Matrix = require('../mathematics/matrix.js')

module.exports = Sigmoid = {
  /*
   *  [Number] sigmoid(z [Number])
   *
   *  Calculate the sigmoid function of input and returns the result
   *  (Current implementation is element-wised)
   *
   */

  sigmoid: function (z) {
    if (z instanceof Matrix) {
      for (let row = 0; row < z.size[0]; row++) {
        for (let col = 0; col < z.size[1]; col++) {
          z.value[row][col] = Sigmoid.sigmoid(z.value[row][col])
        }
      }
      return z
    }
    return 1 / (1 + Math.exp(-z))
  },

  /*
   *  [Number] sigmoidDerivative(z [Number])
   *
   *  Calculate the derivative of sigmoid function of input and returns the result
   *  (Current implementation is element-wised)
   *
   */

  sigmoidDerivative: (z) => {
    if (z instanceof Matrix) {
      for (let row = 0; row < z.size[0]; row++) {
        for (let col = 0; col < z.size[1]; col++) {
          z.value[row][col] = Sigmoid.sigmoidDerivative(z.value[row][col])
        }
      }
      return z
    }
    return sigmoid(z) * (1 - sigmoid(z))
  }
}