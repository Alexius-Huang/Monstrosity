const Matrix = require('../mathematics/matrix.js')

const Relu = module.exports = { 
  /*
   *  [Number] relu(z [Number])
   *
   *  Calculate the ReLu function of input and returns the result
   *  (Current implementation is element-wised and linear version)
   *
   */

  relu: function(z) {
    if (z instanceof Matrix) {
      for (let row = 0; row < z.size[0]; row++) {
        for (let col = 0; col < z.size[1]; col++) {
          z.value[row][col] = Relu.relu(z.value[row][col])
        }
      }
      return z
    }
    return z > 0 ? z : 0
  },

  /*
   *  [Number] reluDerivative(z [Number])
   *
   *  Calculate the derivative of ReLu function of input and returns the result
   *  (Current implementation is element-wised and linear version)
   *
   */

  reluDerivative: function(z) {
    if (z instanceof Matrix) {
      for (let row = 0; row < z.size[0]; row++) {
        for (let col = 0; col < z.size[1]; col++) {
          z.value[row][col] = this.reluDerivative(z.value[row][col])
        }
      }
    }
    return z > 0 ? 1 : 0
  }
}
