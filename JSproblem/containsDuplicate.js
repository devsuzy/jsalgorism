function solution(nums) {
  const newSet = new Set(nums);
  return newSet.size !== nums.length;
}

console.log(solution([1, 2, 3, 1]));
console.log(solution([1, 2, 3, 4]));