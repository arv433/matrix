const d1matrix = [1, 2, 3]

const d2matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const d3matrix = [
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ],
  [
    [4, 5, 6],
    [4, 5, 6],
    [4, 5, 6]
  ],
  [
    [7, 8, 9],
    [7, 8, 9],
    [7, 8, 9]
  ]
]

function Matrix (array) {
  this.matrix = array

  this.depth = function () {
    if (Array.isArray(this.matrix)) {
      let count = 1
      function deepen (subarray) {
        if (Array.isArray(subarray[0])) {
          count++
          return deepen(subarray[0])
        } else {
          return count
        }
      }
      return deepen(array)
    } else {
      return 0
    }
  }

  this.iterativeDepth = function () {
    let firstCharIndex = 0
    while (JSON.stringify(this.matrix).charAt(firstCharIndex) === '[') {
      firstCharIndex++
    }
    return firstCharIndex
  }
}

const d1 = new Matrix(d1matrix)
const d2 = new Matrix(d2matrix)
const d3 = new Matrix(d3matrix)
const faulty = new Matrix(1)

console.log(d1.iterativeDepth())
