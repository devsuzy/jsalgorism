// Valid Parentheses
// Given a string containing only '(' and ')', determine whether it is valid.

// Example 1.
// Input: s = "()()"
// Output: true

// Example 2.
// Input: s = "(()"
// Output: false

// Example 3.
// Input: s = ")("
// Output: false

function solution(s) {
  let count = 0;

  for (let char of s) {
    if (char === "(") {
      count++
    } else if (char === ")"){
      count--
    }
    if (count < 0) return false
  }

  return count === 0
}

console.log(solution("()()"))
console.log(solution("(()"))
console.log(solution(")("))