# 08-5 합격자가 되는 모의 테스트

* 문제 24 신고 결과 받기
* 문제 유형: 해시
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/92334
* 시간 복잡도: O(N)

```js
function solution(id_list, report, k) {
  const reportedUser = {}; // {신고 당한 유저: {신고 한 유저}}
  const count = {}; // {신고 한 유저: 처리 결과 메일을 받을 횟수}

  // 1. 신고 기록 순회
  for (const r of report) {
    const [userId, reportedUser] = r.split(' ');
    if (reportedUser[reportedUser] === undefined) {
      reportedUser[reportedUser] = new Set();
    }
    reportedUser[reportedUser].add(userId)
  }

  // 2. reportedUser에 신고한 유저가 k명 이상이면 count의 신고자에 + 1
  for (const reportedId of Object.keys(reportedUser)) {
    if(reportedUser[reportedId].size >= k) {
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0 ) + 1
      }
    }
  }

  let answer = [];
  // 3. 각 아이디별 메일을 받은 횟수를 순서대로 정리
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0)
  }

  return answer
}
```