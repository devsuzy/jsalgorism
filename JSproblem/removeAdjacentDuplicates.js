// Remove Adjacent Duplicates
// Given a string s, repeatedly remove adjacent duplicate characters. Return the final string.

// Example 1.
// Input: s = "abbaca"
// Output: "ca"

// abbaca
// → aaca
// → ca

function solution(s) {
  let stack = [];

  for (const char of s) {
    // 스택이 비어있지 않고, 스택의 마지막 값이 현재 값과 같으면 pop
    if (stack.length > 0 && stack[stack.length-1] === char){
      stack.pop()
    } else {
      // 아니면 스택에 push
      stack.push(char)
    }
  }

  return stack.join('')
}

console.log(solution("abbaca"))