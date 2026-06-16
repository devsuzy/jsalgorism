// Remove Adjacent Pairs and Check Empty
// Difficulty: Medium
// Given a string s, repeatedly remove adjacent pairs of the same character.

// Return true if the final string becomes empty.
// Otherwise, return false.

// Example 1
// Input: s = "abba"
// Output: true

// Example 2
// Input: s = "abbaca"
// Output: false

// Example 3
// Input: s = "abbaca"
// Output: true

function solution(s) {
  let stack = [];

  for (const char of s) {
    if (stack.length && stack[stack.length-1] === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}

solution("abba")
solution("abbaca")
solution("aabbcc")