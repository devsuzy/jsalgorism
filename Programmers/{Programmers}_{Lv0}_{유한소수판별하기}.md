# 최빈값 구하기

* 문제 레벨 : 0
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120878
* 통과 여부 : Y

### 실패 문제 풀이
- 소인수가 2와 5만 존재해야 유한소수인데, 2만 확인하고 있음
```js
function solution(a, b) {
    const getGCD = (x, y) => (x === 0 ? x : getGCD(y, x % y));
    const divisor = getGCD(a, b)
    const [x, y] = [a/divisor, b/divisor]
    
    return y % 2 === 0 ? 1 : 2
}
```

### 통과 문제 풀이
```js
function solution(a, b) {
	// 최대 공약수 구하기
    const getGCD = (x, y) => (y === 0 ? x : getGCD(y, x % y));
    const divisor = getGCD(a, b)
    let denom = b/divisor;
    
    // 분모의 소인수가 2나 5인지 확인
    let factors = [2, 5];
    for (let f of factors) {
        while (denom % f === 0) {
            denom /= f
        }
    }
    
    // 1이면 유한소수(1), 아니면 무한소수(2)
    return denom === 1 ? 1 : 2
}
```