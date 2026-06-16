// Sum of Border Elements
// Difficulty: Easy-Medium
// Given a rectangular matrix matrix, return the sum of all elements on the border of the matrix.

// The border includes:

// first row
// last row
// first column
// last column

// Do not count the same cell twice.

// Example 1
// Input: matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// Output: 40

// Example 2
// Input: matrix = [
//   [5, 1],
//   [2, 3]
// ]
// Output: 11


function solution(matrix) {
  let sum = 0;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (r === 0) {
        sum += matrix[0][c]
      }
      if (r === matrix.length - 1){
        sum += matrix[matrix.length-1][c]
      }
      if(c === 0 && r !== 0 && r !== matrix.length - 1){
        sum += matrix[r][0]
      }
      if (c === matrix[0].length - 1 && r !== 0 && r !== matrix.length -1) {
        sum += matrix[r][matrix.length-1]
      }
    }
  }

  // return sum
  console.log(sum)
}

// first row // matrix[0][-]
// last row // marix[matrix.length-1][-]
// first column // matrix[-][0]
// last column // matrix[-][matrix.length-1]

solution([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
solution([
  [5, 1],
  [2, 3]
])