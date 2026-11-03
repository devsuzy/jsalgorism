# 입국심사

* 문제 레벨 : 3
* 문제 종류 : 이진탐색
* 시간 복잡도 : O(m · log(M · n))
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/43238
* 통과 여부 : N

### 문제 풀이
1. 탐색 범위 정하기
    - 최소값, 최대값(가장 느린 심사관이 모두 맡는 경우)
2. 가운데 값과 처리인원을 비교하며 탐색 범위를 줄이기
    - 가운데값, 처리인원(가운데값 / 처리시간의 합계)

### 주의할 점
- n이 최대 10억이라 큐를 사용하면 시간 안에 끝낼 수 없음. 
- n이 복잡도에 로그로만 들어가기 때문에 n이 커져도 반복 횟수가 거의 늘지 않음
- 따라서, 답을 직접 탐색하는 이진 탐색 사용
- 또한, BigInt()를 사용하여 큰 수를 안전하게 처리
- BigInt()를 사용하면 Math.floor 대신 자동 버림 처리가 됨

```js
function solution(n, times) {
    let left = 0n;
    const maxTime = times.reduce((acc, cur) => acc > cur ? acc : cur);
    let right = BigInt(maxTime) * BigInt(n);

    while (left < right) {
        const mid = (left + right) / 2n;
        let count = 0n;
        for (let t of times) {
            if (count >= n) break; 
            count += mid / BigInt(t)
        }

        if (count >= n) {
            // 왼쪽 탐색
            right = mid
        } else {
            // 오른쪽 탐색
            left = mid + 1n
        }
    }

    return left
}
```