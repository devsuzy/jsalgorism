// 문제
// 두 문자열이 아나그램인지 판별하시오.

// input
// "listen", "silent"

// output
// true

function soluction (s, t) {
  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }
  console.log(count);
}

soluction("listen", "silent");