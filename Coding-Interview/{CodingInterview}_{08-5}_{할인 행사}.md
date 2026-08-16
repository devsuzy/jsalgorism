# 08-5 합격자가 되는 모의 테스트

* 문제 21 할인 행사
* 문제 유형: 해시
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/131127
* 시간 복잡도: O(N)

```js
function isShallowEqual (object1, object2) {
  // 키 비교
  const objkeys1 = Object.keys(object1)
  const objkeys2 = Object.keys(object2)

  // 두 오브젝트의 키가 다르다면 false
  if (objkeys1.length !== objkeys2.length) return false

  // 값 비교
  for (const key of objkeys1) {
    const value1 = object1[key]
    const value2 = object2[key]

    // 키에 해당하는 값이 다르다면 false
    if (value1 !== value2) return false
  }

  return true
}


function solution (want, number, discount) {
  // 1. 사려는 품목과 품목 갯수 오브젝트로 만들기
  const wantObj = {}
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i]
  }
  
  // 2. 정답 변수 초기화
  let answer = 0;

  // 3. 특정일 i에 회원가입 시 할인받을 수 있는 품목 체크
  // i는 회원가입한 날. i부터 10일로 계산
  for (let i = 0; i < discount.length - 9; i++) {
    // 4. 일차별로 할인받는 품목과 품목 갯수 오브젝트로 만들기
    const discount10d = {};

    // 5. i일에 회원가입 시 할인받는 품목과 품목 개수 오브젝트에 넣기
    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1
      } 
    }

    // 6. 할인하는 상품의 품목 및 갯수가 원하는 품목 및 갯수와 일치하면 정답 변수에 1씩 추가
    if (isShallowEqual(discount10d, wantObj)) {
      answer += 1
    }
  }

  return answer
}
```