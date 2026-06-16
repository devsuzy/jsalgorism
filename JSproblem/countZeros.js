// Count Zeros
// Given a matrix, count how many cells contain the value 0.

// Example 1.
// Input: [
// [1,0,2],
// [0,0,1],
// [5,3,0]
// ]
// Output: 4

function solution(matrix) {
  const flatArr = matrix.flat();
  let count = 0;

  // flatArr.filter((v) => {
  //   if (v === 0) count++
  // })
  flatArr.forEach((v) => {
    if (v === 0) count++; 
  })

  return count
}

console.log(solution([
 [1,0,2],
 [0,0,1],
 [5,3,0]
]))