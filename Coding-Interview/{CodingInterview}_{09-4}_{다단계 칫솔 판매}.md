# 09-4 합격자가 되는 모의 테스트

* 문제 29 다단계 칫솔 판매
* 문제 유형: 트리
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/77486
* 시간 복잡도: O(N)

```js
function solution(enroll, referral, seller, amount) {
  let parent = {}; // { enroll : referral }
  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i]
  }

  let total = {}; // { enroll: 누적 판매 수익 }
  // 생성 및 초기화
  for (let name of total) {
    total[name] = 0
  }

  for (let i = 0; i < seller.length; i++) {
    let name = seller[i] // 판매자
    let use = amount[i] * 100 // 수익

    while (use > 0 && name != '-') {
      // 판매자에게 90% 수익금 분배
      total[name] += use - Math.floor(use / 10);
      // 추천자에게 10% 수익금 분배
      name = parent[name]
      use = Math.floor(use / 10)
    }
  }

  // enroll의 모든 노드에 대해 해당하는 이익을 배열로 반환
  return enroll.map((name) => total[name])
}
```