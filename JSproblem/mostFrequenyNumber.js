// Most Frequent Number
// Given an array of integers, return the number that appears most frequently. If multiple numbers have the same frequency, return the smallest one.

// Example 1:
// Input: nums = [4, 2, 2, 3, 3, 1]
// Output: 2
// Explanation: The number 2 appears twice, while the numbers 3 and 1 appear only once. Therefore, the most frequent number is 2.

// Example 2:
// Input: nums = [4, 3, 3, 2, 2, 1]
// Output: 2
// Explanation: The numbers 2 and 3 both appear twice. Since we need to return the smallest one, the answer is 2.

function solution(nums) {
  const newMap = new Map();

  for (const num of nums) {
    newMap.set(num, (newMap.get(num) || 0) + 1);
  }

  let frequencyCount = 0;
  let mostFrequenyNum = nums[0];

  for (const [num, count] of newMap) {
   if (count > frequencyCount) {
      mostFrequenyNum = num;
      frequencyCount = count;
   } else if (count === frequencyCount) {
      mostFrequenyNum = Math.min(mostFrequenyNum, num);
    }
  }

  return mostFrequenyNum;
}

console.log(solution([4, 2, 2, 3, 3, 1]));
console.log(solution([4, 3, 3, 2, 2, 1]));