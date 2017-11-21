module.exports = {
  /*
   *  [Number] tanh(z [Number])
   *
   *  Calculate the tanh function of input and returns the result
   *  (Current implementation is element-wised)
   *
   */

  tanh: (z) => {
    return Math.tanh(z)
  },

  /*
   *  [Number] tanhDerivative(z [Number])
   *
   *  Calculate the derivative of tanh function of input and returns the result
   *  (Current implementation is element-wised)
   *
   */

  tanhDerivative: (z) => {
    return 1 - Math.pow(tanh(z), 2)
  }
}