// Count Positive Even Numbers
// Difficulty: Easy
// Given an array of integers nums, return the number of elements that are both positive and even.

// Example 1
// Input: nums = [-2, 0, 1, 2, 4, 7, 8]
// Output: 3

// Example 2
// Input: nums = [-4, -2, 0, 1, 3]
// Output: 0

function solution(nums) {
  let sum = 0;

  for (const n of nums) {
    if (n > 0 && n % 2 === 0) {
      sum += 1;
    }
  }
  return sum
}

console.log(solution([-2, 0, 1, 2, 4, 7, 8]))
console.log(solution([-4, -2, 0, 1, 3]))