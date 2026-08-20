# 08-5 합격자가 되는 모의 테스트

* 문제 25 메뉴 리뉴얼
* 문제 유형: 해시, 재귀
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/72411
* 시간 복잡도: O(N * 2M)

```js
// 메뉴 조합을 위한 재귀 함수
function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환하여 탈출 조건으로도 사용
  if (n === 1) return arr.map((v) => [v])

  const result = [];

  arr.forEach((fixed, idx, arr) => {
    // rest = 현재 index 이후 요소를 추출
    const rest = arr.slice(idx+1);
    // combis = 선택된 요소 이전의 요소들을 제외하고 재귀 호출
    const combis = combinations(rest, n-1)
    // combine = 선택된 요소와 재귀 호출을 통해 구한 조합을 합침
    const combine = combis.map((v) => [fixed, ...v])
    
    result.push(...combine)
  })

  return result
}

function solution(orders, course) {
  const answer = [];

  // 코스를 순회하여 손님이 주문한 메뉴에서 combinations()함수로 메뉴 구성 구하기
  for (const c of course) {
    const menu = [];
    for (const order of orders) {
      const orderArr = order.split('').sort();
      const comb = combinations(orderArr, c);
      menu.push(...comb)
    }

    // counter에 각 메뉴 구성이 몇 번 주문 되었는지 넣기
    const counter = {};
    for (const m of menu) {
      const key = m.join('')
      counter[key] = (counter[key] || 0 ) + 1
    }

    // 2번 이상 주문한 메뉴 조합이 코스 요리의 후보
    const max = Math.max(...Object.values(counter))
    if (max > 1) {
      for (const [key, value] of Object.entris(counter)) {
        // 가장 많이 주문된 구성만 넣기
        if (max === value) {
          answer.push(key)
        }
      }
    }
  }

  return answer.sort()
}
```