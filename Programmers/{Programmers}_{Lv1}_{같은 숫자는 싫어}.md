# 같은 숫자는 싫어

* 문제 레벨 : 1
* 문제 종류 : 스택
* 시간 복잡도 : O(N)
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12906
* 통과 여부 : Y

### 문제 풀이
- 시그니처: `fn(arr: Array) => Array`
- 종료조건: arr를 순회하고, arr가 비었을 때 종료
- 규칙/과정:
    - arr 순회
    - answer이 비어있으면 push
    - arr의 원소를 하나씩 꺼내서 answer의 top이 현재 arr 원소와 같다면, top을 pop하고 현재 arr 원소 push
    - arr의 원소를 하나씩 꺼내서 answer의 top이 현재 arr 원소와 같지 않다면, 현재 arr 원소 push

```js
function solution(arr) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        const top = answer.length - 1
        
        if (answer.length < 1) {
            answer.push(arr[i])
        } else if (answer[top] === arr[i]) {
            answer.pop()
            answer.push(arr[i])
        } else {
            answer.push(arr[i])
        }
    }
    
    return answer
}
```