// 문제
// 한 번만 등장하는 문자 중 가장 먼저 나온 문자를 반환하시오.

// input
// "leetcode"

// output
// "l"

function solution (s) {
  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }
}

console.log(solution("leetcode"));