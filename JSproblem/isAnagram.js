// Is Anagram
// 두 문자열이 아나그램인지 판별하시오.
// Given two strings s and t, determine whether they are anagrams.

// input
// "listen", "silent"

// output
// true

function solution (s, t) {
  // 길이 먼저 비교하기
  if (s.length !== t.length) return false;

  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }
  
  for (const char of t) {
    if (!count.has(char)) {
      return false;
    }
    
    count.set(char, count.get(char) - 1);

    if (count.get(char) === 0) {
      count.delete(char);
    }
  }

  return count.size === 0;
}

console.log(solution("listen", "silent"));