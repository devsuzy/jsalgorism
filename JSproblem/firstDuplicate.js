// First Duplicate
// Given an array of integers, find the first duplicate value whose second occurrence has the smallest index.

// Example 1.
// Input: nums = [2,1,3,5,3,2]
// Output: 3

// 3 appears again at index 4
// 2 appears again at index 5

// 4 < 5

// return 3

function solution(nums) {
  const duplicates = nums.filter((v, i) => nums.indexOf(v) !== i);
  return duplicates[0]

  // const seen = new Set();

  // for(const num of nums) {
  //   if (seen.has(num)) {
  //     return num
  //   }
  //   seen.add(num)
  // }
  // return -1
}

console.log(solution([2,1,3,5,3,2]))