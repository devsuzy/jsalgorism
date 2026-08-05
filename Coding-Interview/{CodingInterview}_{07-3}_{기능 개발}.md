# 07-3 합격자가 되는 모의 테스트

* 문제 16 기능 개발
* 문제 유형: 큐
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42586
* 시간 복잡도: O(N)

```js
function solution (progresses, speeds) {
  let answer = [];
  // 1. 각 작업의 배포 가능일
  const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]))
  // 2. 배포될 작업의 수 카운트
  let count = 0;
  // 3. 현재 배포될 작업 중 가장 늦게 배포될 작업의 배포 가능일
  let maxDay = daysLeft[0]

  for (let i = 0; i < progress.length; i++) {
    // 4. 배포 가능일이 가장 늦은 배포일보다 빠르면 함께 배포
    if (daysLeft[i] <= maxDay) {
      count++
    } else {
      // 5. 함께 배포할 기능들은 answer에 추가
      answer.push(count)
      // 6. count 초기화
      count = 1;
      // 7. 배포 가능일이 기준 배포일보다 느리면 따로 배포
      maxDay = daysLeft[i]
    }
  }

  // 8. 마지막으로 카운트된 작업들 배포
  answer.push(count)
  return answer
}
```