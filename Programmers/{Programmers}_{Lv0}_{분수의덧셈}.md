# 분수의 덧셈

* 문제 레벨 : 0
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120808
* 통과 여부 : Y

### 문제 풀이
- a/b + c/d일 때
    - 분자 = ad + bc
    - 분모 = bd
```js
const numer = (numer1 * denom2) + (denom1 * numer2)
const denom = denom1 * denom2
```
- 최대 공약수 구하기(유클리드 호제법)
    - 큰 수를 작은 수로 나눈 나머지를 구하고 작은수와 나머지를 연산하는 과정
    - 나머지가 0이 될때까지 반복
- 약분해서 리턴하기
    - GCD가 0 -> 약분 불가, 그대로 반환
    - GCD가 0 이상 -> 약분
```js
const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
const divisor = getGCD(numer, denom)

return [numer / divisor, denom / divisor]
```

### 문제 정답
```js
function solution(numer1, denom1, numer2, denom2) {
    const numer = (numer1 * denom2) + (denom1 * numer2)
    const denom = denom1 * denom2

    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
    
    const divisor = getGCD(numer, denom)
    
    return [numer / divisor, denom / divisor]
}
```