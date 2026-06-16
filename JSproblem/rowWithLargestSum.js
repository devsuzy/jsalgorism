// Row With Largest Sum
// Given a matrix, return the index of the row with the largest sum.

// Example 1.
// Input:
// [
//  [1,2,3],
//  [10,1,1],
//  [4,4,4]
// ]
// Output: 1

function solution(matrix) {
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     if (matrix.indexOf(matrix[i])) {
  //       console.log(matrix[i][j])
  //     }
  //   }
  // }
  const rowSum = matrix.map(row => row.reduce((acc, cur) => acc + cur, 0))

  let maxNum = rowSum[0];
  let maxCountIdx = 0;

  rowSum.forEach((v, i) => {
    if (v > maxNum) {
      maxNum = v
      maxCountIdx = i
    }
  })
  
  return maxCountIdx
}

console.log(solution([
 [1,2,3],
 [10,1,1],
 [4,4,4]
]))