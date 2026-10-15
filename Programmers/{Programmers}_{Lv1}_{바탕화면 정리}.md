# 바탕화면 정리

* 문제 레벨 : 1
* 문제 종류 : 완전탐색
* 시간 복잡도 : O(N*M)
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/161990
* 통과 여부 : Y

### 문제 풀이
1. 2차원 배열을 탐색한다.
2. S(lux, luy) = 가로 좌표 기준으로 가장 작은 값
3. E(rdx, rdy) = 세로 좌표 기준으로 가장 큰 값 + 1

```js
function solution(wallpaper) {
    // 각 좌표값 초기화
    let lux = Infinity
    let luy = Infinity
    let rdx = -Infinity
    let rdy = -Infinity

    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            // 파일이 있으면 좌표값 바꿔주기
            if (wallpaper[i][j] === '#') {
                lux = Math.min(lux, i)
                luy = Math.min(luy, j)
                rdx = Math.max(rdx, i)
                rdy = Math.max(rdy, i)
            }
        }
    }

    return [lux, luy, rdx + 1, rdy + 1]
}
```