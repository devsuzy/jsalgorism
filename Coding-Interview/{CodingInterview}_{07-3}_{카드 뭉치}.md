# 07-3 합격자가 되는 모의 테스트

* 문제 17 카드 뭉치
* 문제 유형: 큐
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/159994
* 시간 복잡도: O(M)

```js
class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    constructor (array) {
        this.items = array;
        this.rear = array.length;
    }
    
    push(item) {
        this.items.push(item)
        this.rear++
    }
    
    pop() {
        this.items[this.front++]
    }
    
    // front에 해당하는 값 반환
    first() {
        return this.items[this.front];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution (cards1, cards2, goal) {
  // 1. cards1, cards2, goal을 Queue로 변환
  cards1 = new Queue(cards1)
  cards2 = new Queue(cards2)
  goal = new Queue(goal)

  // 2. goal의 문자열을 순차적으로 순회
  while(!goal.isEmpty()) {
    // 3. cards1이 비어있지않고, cards1의 front와 goal의 front가 일치하는 경우
    if (!cards1.isEmpty() && cards1.first() === goal.first()) {
      cards1.pop()
      goal.pop()
    } else if (!cards2.isEmpty() && cards2.first() === goal.first()) {
      // 4. cards2이 비어있지않고, cards2의 front와 goal의 front가 일치하는 경우
      cards2.pop()
      goal.pop()
    } else {
      break
    }
  }

  return goal.isEmpty() ? "Yes" : "No"
}
```