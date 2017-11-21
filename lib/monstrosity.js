const initialization = require('./train/initialization.js')
const forwardPropagation = require('./train/forwardPropagation.js')
const Matrix = require('./mathematics/matrix.js')

class Monstrosity {
  constructor({ inputUnits, learningRate }) {
    this.inputUnits = inputUnits
    this.learningRate = learningRate
    this.layerCount = 0
    this.layers = []
  }

  /* Connect Layers of Neural Network */
  connect({ name = 'layer-unnamed', hiddenUnits = 1, activation = 'relu' }) {
    this.layers.push({ name, hiddenUnits, activation })
    this.layerCount++
  }

  /* Each Layer */
  eachLayer(callback) {
    for (let layer of this.layers) callback(layer)
  }

  /* Train The Neural Network */
  train({ XTrain = [[]], YTrain = [[]], testRatio = 0.2, crossValidationRatio = 0.2 }) {
    XTrain = new Matrix(XTrain).T()
    YTrain = new Matrix(YTrain).T()

    let { weights, bias } = initialization({ inputUnits: this.inputUnits, layers: this.layers })
    let { Z: netSums, A: activation } = forwardPropagation({ X: XTrain, weights, bias, layers: this.layers })
    // console.log(netSums, activation)
  }
}

module.exports = Monstrosity
