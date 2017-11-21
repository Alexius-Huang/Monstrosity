const { sigmoid } = require('../activation/sigmoid.js')
const { relu } = require('../activation/relu.js')

const Matrix = require('../mathematics/matrix.js')

module.exports = function forwardPropagation({ X, weights, bias, layers }) {
  let Z = [], A;

  // weights = [
  //   new Matrix([
  //     [0.15, 0.2],
  //     [0.25, 0.3]
  //   ]),
  //   new Matrix([
  //     [0.4, 0.45],
  //     [0.5, 0.55]
  //   ])
  // ]

  // bias = [
  //   new Matrix([
  //     [0.35],
  //     [0.35]
  //   ]),
  //   new Matrix([
  //     [0.6],
  //     [0.6]
  //   ])
  // ]

  /* First layer */
  Z[0] = weights[0].dot(X).plus(bias[0])
  A = sigmoid(Z[0])

  for (let i = 1; i < layers.length; i++) {
    Z[i] = weights[i].dot(A).plus(bias[i])
    A = sigmoid(Z[i])
  }

  return { Z, A }
}
