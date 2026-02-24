# 소인수 분해

* 문제 레벨 : 0
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120852
* 통과 여부 : Y

### 문제 풀이
```js
function solution(n) {
    let factors = [];
    let divisor = 2;

    // 2부터 n이 1이 될 때까지 반복
    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor)
            n = n / divisor // 몫을 다시 n에 할당
        } else {
            divisor++ // 나누어 떨어지지 않으면 + 1
        }
    }

    // 중복 제거, 오름차순
    return [...new Set(factors)]
}
```