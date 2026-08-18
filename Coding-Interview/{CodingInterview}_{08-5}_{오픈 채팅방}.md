# 08-5 합격자가 되는 모의 테스트

* 문제 22 오픈 채팅방
* 문제 유형: 해시
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42888
* 시간 복잡도: O(N)

```js
function solution(record) {
  let uid = {} // {아이디: 닉네임}
  let answer = [] // 최종 반환할 메세지 배열

  for (line in record) {
    cmd = record[line].split(' ') // ['상태', '아이디' '닉네임']
    if (cmd[0] !== 'Leave') {
      uid[cmd[1]] = cmd[2]
    }
  }

  for (line in record) {
    cmd = record[line].split(' ') // ['상태', '아이디' '닉네임']
    if (cmd[0] == 'Enter') {
      answer.push(uid[cmd[1]] + '님이 들어왔습니다.')
    } else if (cmd[0] == 'Leave') {
      answer.push(uid[cmd[1]] + '님이 나갔습니다.')
    } 
  }

  return answer
}
```