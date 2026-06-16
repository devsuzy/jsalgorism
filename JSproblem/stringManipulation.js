// String Manipulation (Easy, 100-200 pts)
// Given a string s, your task is to reverse only the characters that are at odd indices (0-indexed) in the string, while keeping the characters at even indices in their original positions.

// Example
// For s = "abcdef", the output should be solution(s) = "afcdeb".
// Explanation: The characters at odd indices are 'b' (index 1), 'd' (index 3), and 'f' (index 5). Reversing this sequence ('b', 'd', 'f') gives ('f', 'd', 'b'). Replacing them back into the odd positions of the original string results in "afcdeb".

function solution (s) {
  // 1. 홀수 인덱스 문자만 따로 모으기
  let odd = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 1) {
      odd.push(s[i])
    }
  }
  // 2. 문자 뒤집기
  odd.reverse();

  // 3. 새로운 문자열 조립하기
  let result = '';
  let oddIndexPointer = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      // 짝수는 유지
      result += s[i]
    } else {
      // 홀수는 하나씩 꺼냄
      result += odd[oddIndexPointer]
      oddIndexPointer++;
    }
  }
  return result
}

console.log(solution("abcdef")) // "afcdeb"