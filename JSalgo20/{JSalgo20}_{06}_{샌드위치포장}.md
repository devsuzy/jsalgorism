# 문제 6번

* 문제 레벨 : 1
* 문제 종류 : 스택, 큐
* 문제 링크 : https://jsalgo.co.kr/?page=6
* 통과 여부 : Y

### 문제 정답

```javascript
function solution(data){
    let result = 0
    let stack = []

    for (let i of data) {
        stack.push(i)
        if (JSON.stringify(stack.slice(-5)) === JSON.stringify([1, 2, 3, 4, 1])) {
            [...new Array(5)].forEach(v => { stack.pop() })
            result += 1
        }
    }
    return result
}
```

### 문제 풀이
1. 스택(stack) 자료형
    - push: 데이터 추가
    - pop: 데이터 추출
    - 마지막에 넣은 데이터 부터 뺄 수 있다.(LIFO)
2. 배열 비교 방법
    - `[1, 2, 3, 4, 1] === [1, 2, 3, 4, 1]` => `false`
    - `[1, 2, 3, 4, 1].toString() === [1, 2, 3, 4, 1].toString()` => `true`
    - `JSON.stringify([1, 2, 3, 4, 1]) === JSON.stringify([1, 2, 3, 4, 1])` => `true`
3. 코드 실행 시 스택 구조
    ```js
    const data = [1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1]

    [1]
    [1, 1]
    [1, 1, 1]
    [1, 1, 1, 2]
    [1, 1, 1, 2, 3]
    [1, 1, 1, 2, 3, 4]
    [1, 1, 1, 2, 3, 4, 1] => if문 true로, [1, 2, 3, 4, 1] pop() / result += 1
    [1, 1]
    [1, 1, 2]
    [1, 1, 2, 3]
    [1, 1, 2, 3, 4]
    [1, 1, 2, 3, 4, 1] => if문 true로, [1, 2, 3, 4, 1] pop() / result += 1
    [1]
    ```