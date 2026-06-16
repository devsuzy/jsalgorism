// First Non-Repeating Character
// Given a string s, return the first character that appears exactly once. If no such character exists, return _.

// Example 1:
// Input: s = "abacabad"
// Output: "c"
// Explanation: The first non-repeating character is 'c'. Other non-repeating characters are 'd' and 'b' but 'c' comes first.

// Example 2:
// Input: s = "abacabaabacaba"
// Output: "_"
// Explanation: There is no non-repeating character, so return '_'.

function solution(s) {
    const newMap = new Map();

    // 첫 번째 순회: 빈도수 세기
    for (const char of s) {
      newMap.set(char, (newMap.get(char) || 0) + 1);
    }
    
    // 두 번째 순회 처음 빈도수 1인 문자 찾기 - 반드시 두 번 순회하기 
    for (const char of s) {
      if (newMap.get(char) === 1) {
        return char;
      }
    }
    return "_";
}

console.log(solution("abacabad"));
console.log(solution("abacabaabacaba"));