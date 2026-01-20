# 문제 4번

* 문제 레벨 : 1
* 문제 종류 : 정규표현식
* 문제 링크 : https://jsalgo.co.kr/?page=4
* 통과 여부 : Y

### 문제 정답

```javascript
function solution(data){
    let 훈련수치 = new Map()
    let 고민수치 = new Map()
    let 원래미래 = 0
    let 바뀐미래 = 0

    // 훈련수치
    for (const i of data[0].split('.').slice(0, -1)){
        let key = i.match(/[a-zA-Z]/g)[0] // A, B ...
        let value = i.match(/\d+/g)[0] // 10, 20 ...

        if (훈련수치.has(key)) {
            훈련수치.set(key, 훈련수치.get(key) + parseInt(value))
        } else {
            훈련수치.set(key, parseInt(value))
        }
    }

    // 고민수치
    for (const i of data[1].split('.').slice(0, -1)){
        let key = i.match(/[a-zA-Z]/g)[0] // A, B ...
        let value = i.match(/\d+/g)[0] // 10, 20 ...

        if (고민수치.has(key)) {
            고민수치.set(key, 고민수치.get(key) + parseInt(value))
        } else {
            고민수치.set(key, parseInt(value))
        }
    }
    // console.log(훈련수치, 고민수치)

    // 원래미래
    for (let i of 훈련수치.keys()) {
        if (고민수치.has(i)) {
           원래미래 += 훈련수치.get(i) * 고민수치.get(i) 
        }
    }

    // 고민수치와 훈련수치가 없을 경우
    if (원래미래 === 0) {
        return '미래가 보이지 않습니다.'
    }

    // 바뀐미래
    let 훈련수치중가장큰값 = Math.max(...훈련수치.values())
    let 고민수치중가장큰값 = Math.max(...고민수치.values())

    for (let i of 훈련수치) {
        if (i[1] === 훈련수치중가장큰값) {
            // i[0]은 key, i[1]은 value
            훈련수치.set(i[0], i[1] + 100)
        }
    }

    for (let i of 고민수치) {
        if (i[1] === 고민수치중가장큰값) {
            // i[0]은 key, i[1]은 value
            고민수치.set(i[0], i[1] + 100)
        }
    }

    for (let i of 훈련수치.keys()) {
        if (고민수치.has(i)) {
           바뀐미래 += 훈련수치.get(i) * 고민수치.get(i) 
        }
    }
    
    return `최종 꿈의 설계는 원래 미래 ${원래미래}, 바뀐 미래 ${바뀐미래}입니다. 이 수치대로 Vision을 만듭니다.`
}
```

### 문제 풀이
1. 훈련수치, 고민수치 - `Map` 자료형
    - key에 다양한 자료형을 허용하는 객체(일반 객체의 key는 string 형태만 허용)
    - `new Map()`: Map 자료형 생성
    - `map.set(key, value)`: key를 이용하여 value를 저장
    - `map.get(key)`: key에 해당하는 value 값 반환, key가 존재하지 않으면 undefined을 반환
    - `map.has(key)`: key가 존재하면 true, 아니면 false
2. 문자열과 숫자를 찾아서 Map에 set
    ```js
    let key = i.match(/[a-zA-Z]/g)[0] // A, B ...
    let value = i.match(/\d+/g)[0] // 10, 20 ...
    ```
    - 중복된 key 값이 있다면, value 값에 누적
    ```js
    if (훈련수치.has(key)) {
        훈련수치.set(key, 훈련수치.get(key) + parseInt(value))
    } else {
        훈련수치.set(key, parseInt(value))
    }
    ```
3. 원래미래 = 훈련수치 * 고민수치
    ```js
    for (let i of 훈련수치.keys()) {
        if (고민수치.has(i)) {
            원래미래 += 훈련수치.get(i) * 고민수치.get(i) 
        }
    }
    ```
4. 바뀐 미래 = (훈련수치중가장큰값 + 100) * (고민수치중가장큰값 + 100)
    - 가장 큰 값 구하기 
        - `Math.max(...훈련수치.values())`
    - 가장 큰 값에 + 100
        ```js
        for (let i of 훈련수치) {
            if (i[1] === 훈련수치중가장큰값) {
                // i[0]은 key, i[1]은 value
                훈련수치.set(i[0], i[1] + 100)
            }
        }
        ```
    - 값 곱하기