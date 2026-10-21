# 바탕화면 정리

* 문제 레벨 : 2
* 문제 종류 : 수학
* 시간 복잡도 : O(√M)
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/92335?itm_content=course14743
* 통과 여부 : Y

### 문제 풀이
1. n을 k진수 문자열로 변환 -> toString()
2. '0' 기준으로 자르기 -> split() (연속된 0 때문에 생기는 빈 문자열은 제외)
3. 각 조각을 숫자로 바꿔 소수 판별, 이때 제곱근 사용 -> sqrt()
4. 소수인 개수 세기, 빈 문자열은 넘어가도록 예외 처리

```js
// 3. 소수 판별 함수
function isPrime(num) {
    if (num < 2) return false
    const root = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= root; i++) {
        if (num % i === 0) return false
    }
    return true
}

function solution(n, k) {
    // 1. n을 k진수 문자열로 변환
    const toNumeral = n.toString(k)
    // 2. '0'을 기준으로 자르기
    const toSplit = toNumeral.split('0')
    // 3. 소수인 개수 세기
    return toSplit.filter((chunk) => chunk !== '' && isPrime(Numer(chunk))).length
}
```