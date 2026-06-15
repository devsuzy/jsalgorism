// Reverse Words
// Given a string s, reverse the order of words. Words are separated by a single space.

// Example 1:
// Input: s = "hello world javascript"
// Output: "javascript world hello"

function solution(s) {
  return s.split(' ').reverse().join(' ');
}

console.log(solution("hello world javascript"));