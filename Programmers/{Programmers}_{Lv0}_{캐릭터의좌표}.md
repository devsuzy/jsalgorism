# 분수의 덧셈

* 문제 레벨 : 0
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120861
* 통과 여부 : Y

### 문제 풀이
- keyinput = [up, down, left, right]
    - up: [0, 1]
    - down: [0, -1]
    - left: [-1, 0]
    - right: [1, 0]
- board = [가로 크기, 세로 크기]
    - 가로, 세로 값은 모두 홀수
    - board 크기를 벗어난 방향키 입력은 무

### 문제 정답
```js
function solution(keyinput, board) {
    // 캐릭터의 초기 위치
    let [x, y] = [0, 0]
    
    // 맵의 크기
    let max_x = ~~(board[0] / 2)
    let max_y = ~~(board[1] / 2)
    
    // 각 방향키로 반복문
    // “up” 키는 y 좌표를 증가, “down” 키는 y 좌표를 감소
    // “left” 키는 x 좌표를 감소, “right” 키는 x 좌표를 증가
    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] == "up" && y < max_y) {
            y += 1
        }
        if (keyinput[i] == "down" && y > -max_y) {
            y -= 1
        }
        if (keyinput[i] == "left" && x > -max_x) {
            x -= 1
        }
        if (keyinput[i] == "right" && x < max_x) {
            x += 1
        }
    }
    
    return [x, y]
}
```