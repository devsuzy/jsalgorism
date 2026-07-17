# 크레인 인형 뽑기 게임

* 문제 레벨 : 1
* 문제 종류 : 스택
* 시간 복잡도 : O(N^2)
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/64061
* 통과 여부 : Y

### 문제 풀이
1. board의 구성과 같은 스택 형태를 만든다. (N x N)
2. 스택에 board에 가장 밑에 있는 인형부터 푸시한다.
3. moves의 순서대로 인형을 바구니에 넣는다.
4. moves로 뽑은 인형과 가장 최근에 바구니에 들어온 인형이 같다면 인형이 사라진다.
5. 사라진 인형을 센다.

```js
function solution (board, moves) {
    // 1. board의 각 열에 대해 스택을 생성 -> board의 열: board[0].length
    const stack = [...Array(board[0].length)].map(() => []) // [[],[],[],[],[]]
    
    // 2. board를 역순으로 탐색하며 각 열의 인형을 stack에 추가
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j]) {
                stack[j].push(board[i][j])
            }
        }
    }

    const basket = []; // 3. 인형을 담을 바구니
    let answer = 0; // 4. 사라진 인형 갯수를 저장할 변수

    // 5. moves를 순회하며 각 열에서 인형을 뽑아 basket에 추가
    for (const m of moves) {
        // 6. 해당 열에 인형이 있는 경우
        if (stack[m-1].length > 0) {
            // 7. 해당 열의 가장 위에 있는 인형
            const doll = stack[m-1].pop()
            if (basket.length > 0 && basket[basket.length - 1] === doll) {
                // 8. 바구니가 비어있지 않고, 바구니의 top과 인형이 같으면
                basket.pop()
                answer += 2;
            } else {
                // 9. 바구니가 비어있고,바구니의 top과 인형이 같지 않으면
                basket.push(doll)
            }
        }
    }

    return answer
}
```