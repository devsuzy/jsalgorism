# 의상

* 문제 레벨 : 2
* 문제 종류 : 해시
* 시간 복잡도 : O(N)
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42578
* 통과 여부 : Y

### 문제 풀이
1. clothes를 의상의 종류: key, 의상의 이름: value로 객체 형태로 나타낸다.
2. 의상의 이름은 갯수만 필요하다.    
3. 종류마다 할 수 있는 선택지는 갯수 + 안 입기이다. (n+1)
4. 최소 한 개는 입어야 해서 마지막에 1을 빼준다.

```js
function solution(clothes) {
    // 1. 종류별로 의상 개수를 센다.
    const obj = {};
    for (const [, type] of clothes) {
        obj[type] = (obj[type] || 0) + 1
    }
    
    // 2. 각 종류마다 (개수 + 1)을 전부 곱한다.
    // 3. 마지막에 1을 뺀다
    return Object.values(obj).reduce((a, n) => a * (n+1), 1) - 1;
}
```