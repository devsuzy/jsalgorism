// Count Even Numbers
// Given an array of integers nums, return the number of even numbers in the array.

// Example 1:
// Input: nums = [1,2,3,4,5,6]
// Output: 3

// Example 2:
// Input: nums = [1,3,5]
// Output: 0

function solution(nums) {
  let result = 0;

  for (const num of nums) {
    if (num % 2 === 0) {
      result += 1;
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([1, 3, 5]));