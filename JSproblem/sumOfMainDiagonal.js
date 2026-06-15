// Sum of Main Diagonal
// Given a square matrix, return the sum of its main diagonal.

// Example 1:
// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: 15


function solution(matrix) {
  let sum = 0;

  for (const row of matrix) {
    for (const element of row) {
      if (row.indexOf(element) === matrix.indexOf(row)) {
        sum += element
      }
    }
  }

  return sum;
}

console.log(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));