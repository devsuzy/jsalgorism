// Contains Duplicate
// Given an integer array nums, determine whether any value appears at least twice.

// Example 1.
// Input: nums = [1, 2, 3, 1]
// Output: true

// Example 2.
// Input: nums = [1, 2, 3, 4]
// Output: false

function solution(nums) {
  const newSet = new Set(nums);
  return newSet.size !== nums.length;
}

console.log(solution([1, 2, 3, 1]));
console.log(solution([1, 2, 3, 4]));