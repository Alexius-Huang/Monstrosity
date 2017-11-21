module.exports = class Matrix {
  constructor(value) {
    this.value = value
    this.size = [ value.length, value[0].length ]
  }

  T() {
    let result = []
    for (let i = 0; i < this.size[1]; i++) {
      result.push([])
      for (let j = 0; j < this.size[0]; j++) {
        result[i].push(this.value[j][i])
      }
    }
    return new Matrix(result)
  }

  dot(matrix) {
    let result = []
    for (let i = 0; i < this.size[0]; i++) {
      result.push([])

      for (let j = 0; j < matrix.size[1]; j++) {
        let linearCombination = 0
        for (let k = 0; k < matrix.size[0]; k++) {
          linearCombination += this.value[i][k] * matrix.value[k][j]
        }
        result[i].push(linearCombination)
      }
    }
    return new Matrix(result)
  }

  plus(value) {
    if (value instanceof Matrix) {
      /* Broadcasting */
      if (value.size[0] === 1 && value.size[1] === this.size[1]) {
        for (let row = 0; row < this.size[0]; row++) {
          for (let col = 0; col < this.size[1]; col++) {
            this.value[row][col] += value.value[0][col]
          }
        }
        return this
      } else if (value.size[1] === 1 && value.size[0] === this.size[0]) {
        for (let col = 0; col < this.size[1]; col++) {
          for (let row = 0; row < this.size[0]; row++) {
            this.value[row][col] += value.value[row][0]
          }
        }
        return this
      }
      
      throw 'Size not fit error'
    }

    for (let i = 0; i < this.size[0]; i++) {
      for (let j = 0; j < this.size[1]; j++) {
        this.value[i][j] += value
      }
    }
    return this
  }

  multiply(value) {
    for (let i = 0; i < this.size[0]; i++) {
      for (let j = 0; j < this.size[1]; j++) {
        this.value[i][j] *= value
      }
    }
    return this
  }
}
