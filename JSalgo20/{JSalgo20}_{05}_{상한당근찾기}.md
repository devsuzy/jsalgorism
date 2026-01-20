# 문제 5번

* 문제 레벨 : 1
* 문제 종류 : 행렬
* 문제 링크 : https://jsalgo.co.kr/?page=5
* 통과 여부 : Y

### 문제 정답

```javascript
function solution(data){
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            if (data[i][j] === '#') {
                // 상
                if (i != 0){
                    if (data[i-1][j] != '#') {
                        data[i-1][j] += 1
                    }
                }
                // 하
                if (i != data.length - 1){
                    if (data[i+1][j] != '#') {
                        data[i+1][j] += 1
                    }
                }
                // 좌
                if (j != 0){
                    if (data[i][j-1] != '#') {
                        data[i][j-1] += 1
                    }
                }
                // 우
                if (j != data[0].length - 1){
                    if (data[i][j+1] != '#') {
                        data[i][j+1] += 1
                    }
                }
                // 대각선 상좌
                if (i != 0 && j != 0){
                    if (data[i-1][j-1] != '#') {
                        data[i-1][j-1] += 1
                    }
                }
                // 대각선 하우
                if (i != data.length - 1 && j != data[0].length - 1){
                    if (data[i+1][j+1] != '#') {
                        data[i+1][j+1] += 1
                    }
                }
                // 대각선 상우
                if (i != 0 && j != data[0].length - 1){
                    if (data[i-1][j+1] != '#') {
                        data[i-1][j+1] += 1
                    }
                }
                // 대각선 하좌
                if (i != data.length - 1 && j != 0){
                    if (data[i+1][j-1] != '#') {
                        data[i+1][j-1] += 1
                    }
                }
            }
        }
    }

    const 맞닿아있는당근갯수 = data.flat().filter(n => n !== '#').reduce((acc, cur) => acc + cur, 0);
    const 상한당근 = data.flat().filter(n => n === '#').length
    
    return new Array(상한당근, 맞닿아있는당근갯수)
}
```

### 문제 풀이
1. 상한 당근 구하기
    - 2차원 배열 -> 1차원 배열 -> '#'을 찾아서 총 개수 구하기
    - `data.flat().filter(n => n === '#').length`
2. 맞닿아있는 당근 구하기
    - 맞닿은 둘레에 위치한 칸은 최대 8개로, 상, 하, 좌, 우, 그리고 4개의 대각선 칸
    - 행 = i, 열 = j
    - 해당 칸이 '#'일 때, 주변 값이 '#'이 아니면 1씩 누적 개수 구하기
    - 상한 당근을 제외한 누적 개수의 총 합계 구하기
3. 각 칸의 조건 구하기
    - 상: 행의 첫번째 칸 제외 
    - 하: 행의 마지막 칸 제외
    - 좌: 열의 첫번째 칸 제외
    - 우: 열의 마지막 칸 제외
    - 대각선 상좌: 행의 첫번째 칸과 열의 첫번째 칸 제외
    - 대각선 하우: 행의 마지막 칸과 열의 마지막 칸 제외
    - 대각선 상우: 행의 첫번째 칸과 열의 마지막 칸 제외
    - 대각선 하좌: 행의 마지막 칸과 열의 첫번째 칸 제외