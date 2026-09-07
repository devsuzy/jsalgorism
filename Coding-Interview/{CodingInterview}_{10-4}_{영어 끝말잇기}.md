# 10-4 합격자가 되는 모의 테스트

* 문제 35 영어 끝말잇기
* 문제 유형: 집합
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12981
* 시간 복잡도: O(N)

```js
function solution (words, n) {
  let usedWord = new Set()
  let prevWord = words[0][0]

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (usedWord.has(word) || word[0] !== prevWord) {
      return [i % n + 1, Math.floor(i / n) + 1]
    }
    
    usedWord.add(word)
    prevWord = word.slice(-1)
  }
  return [0, 0]
}
```