// First Character With Frequency Two
// Difficulty: Medium
// Given a string s, return the first character whose frequency becomes exactly 2 while scanning the string from left to right.
// If no character appears twice, return "_".

// Example 1
// Input: s = "abca"
// Output: "a"

// Example 2
// Input: s = "abcddba"
// Output: "d"

function solution(s) {
  const newMap = new Map();

  for (const char of s) {
    newMap.set(char, (newMap.get(char) || 0) + 1)

    if (newMap.get(char) === 2) {
      return char;
    }
  }
  
  return "_"
  
  // let maxString = s[0]
  // let maxCount = 0

  // for (const [str, count] of newMap) {
  //   if (count > 1) {
  //     maxString = str
  //     maxCount = count
  //   } else if (maxCount < 2) {
  //     maxString = "_"
  //   }
  // }

  // return maxString
}

console.log(solution("abca"))
console.log(solution("abcddba"))
console.log(solution("abcdef"))