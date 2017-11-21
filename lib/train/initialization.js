const gaussianRandom = require('../mathematics/gaussianRandom.js')

/*
 *  initialization
 *
 *  Random initialization for weights and bias terms
 *
 */

module.exports = function initialization({ inputUnits, layers, type = 'gaussian' }) {
  const W = [], B = []

  W.push( gaussianRandom(layers[0].hiddenUnits, inputUnits).multiply(0.01) )
  B.push( gaussianRandom(layers[0].hiddenUnits, 1).multiply(0.01) )

  for (let i = 1; i < layers.length; i++) {
    W.push( gaussianRandom(layers[i].hiddenUnits, layers[i - 1].hiddenUnits).multiply(0.01) )
    B.push( gaussianRandom(layers[i].hiddenUnits, 1).multiply(0.01) )
  }

  return { weights: W, bias: B }
}
