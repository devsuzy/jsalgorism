# 07-2 몸풀기 문제

* 문제 15 요세푸스 문제
* 문제 유형: 큐
* 시간 복잡도: O(N*K)

```js
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item)
    this.rear++
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    this.items[this.front++];
  }
}

function solution(N, K) {
  const queue = new Queue();

  // 1. 1부터 N까지의 번호를 큐에 추가
  for (let i = 1; i <= N; i++) {
    queue.push(i)
  }

  // 2. 큐에 요소가 하나 남을 때까지 반복
  while(queue.size() > 1) {
    // 3. K번째 요소를 찾기 위해 앞에서부터 제거하고 뒤에 추가
    for (let = 0; i < K-1; i++) {
      queue.push(queue.pop())
    }
    queue.pop()
  }
  // 4. 마지막에 남은 요소 반환
  return queue.pop()
}

console.log(solution(5, 2))
```