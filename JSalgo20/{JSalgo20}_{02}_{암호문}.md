# 문제 2번

* 문제 레벨 : 1
* 문제 종류 : 정규표현식
* 문제 링크 : https://jsalgo.co.kr/?page=2
* 통과 여부 : N

```javascript
const searchR = "r";
const searchE = "e";
const searchV = "v";

const array = [];
let result = [];

function solution(data){
    let indexR = data.indexOf(searchR);
	let indexE = data.indexOf(searchE);
	let indexV = data.indexOf(searchV);

    while (indexR !== -1) {
      array.push(indexR);
      indexR = data.indexOf(searchR, indexR + 1);
    }

    while (indexE !== -1) {
      array.push(indexE);
      indexE = data.indexOf(searchE, indexE + 1);
    }

    while (indexV !== -1) {
      array.push(indexV);
      indexV = data.indexOf(searchV, indexV + 1);
    }
    
    for (let i of array) {
        result += data.slice(i, i + 2)
    }
    
    const numberOnly = result.match(/../g).map(str => str.replace(/[^0-9]/g, ''))

    const numberArray = numberOnly.map(Number);

    const sum = numberArray.reduce((accumulator, currentValue) => {
  		return accumulator + currentValue;
	}, 0);

    return String(sum).slice(0, 1) + "월 " + String(sum).slice(1, 2) + "일"
}
```

### 문제 정답
```js
  function solution(data) {
    let result = 0
    data = data.match(/([rev])(10|[0-9])/g)
    for (let i of data) {
      result += parseInt(i.slice(1))
    }
    result = result.toString()
    return `${result[0]}월 ${result[1]}일`
  }
```

### 문제 해설
1. 주어진 문자열 중에 r, e, v 뒤에 나오는 값을 추출한다. 뒤에 나오는 숫자는 1부터 10까지다.
    - `'a10b9r1ce33uab8wc918v2cv11v9'` -> `['r1', 'e3', 'v2', 'v1', 'v9']`
    - 1 ≤ r, e, v 뒤의 숫자 ≤ 10
2. r, e, v 뒤에 나오는 값을 모두 더한다.
    - `['r1', 'e3', 'v2', 'v1', 'v9']` -> 16
3. 최종 숫자에서 앞자리를 월로 뒷자리를 일로 판단한다.
    - 16 -> 1월 6일

### 문제 풀이
1. `문자열.match(정규식)`
    - 문자열과 정규식이 매치되는 부분을 검색
    - `rev` 문자 뒤에 10을 먼저 검색하고, 0~9까지 검색
    ```js
    str.match(/([rev])(10|[0-9])/g)
    ```
2. `parseInt(문자열.slice(1))`
    - 문자열의 1번째 값을 추출하여 숫자로 변환 
    - for..of 문으로 순환하여 값을 모두 더함
    ```js
    for (let i of data) {
      result += parseInt(i.slice(1))
    }
    ```
3. `숫자.toString()`
    - 합계를 문자열로 변환하여 원하는 형태로 반환
    ```js
        result = result.toString()
        return `${result[0]}월 ${result[1]}일`
    ```