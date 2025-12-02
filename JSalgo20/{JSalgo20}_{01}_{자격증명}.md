# 문제 1번

* 문제 레벨 : 0
* 문제 종류 : 요구사항 구현
* 문제 링크 : https://jsalgo.co.kr/?page=1
* 통과 여부 : Y

```javascript
function solution(data) {
    let result = "";
    for (let i of data) {
    	i = parseInt(i.replace(/\+/g, "1").replace(/\-/g, "0").replace(/\s/g, ''), 2)
    	result += String.fromCharCode(i)
    }
    return result
}
```

### 문제 해설

1. 주어진 문자열에서 +는 1로, -는 0으로, 공백은 제거하여 2진수로 변환한다.
    - `' + - - + - + - '` -> `1001010`
2. 2진수를 10진수로 변환한다.
    - `1001010` -> `74`
3. 10진수를 아스키 코드로 변환한다.
    - `74` -> `J`
4. 문자열 리스트를 모두 변환하여 문자로 반환한다.
    - `[' + - - + - + - ', ' + + + - + - + ', ' + + - + + + - ']` -> `'Jun'`

### 문제 풀이

1. `문자열.replace(정규식, 바꿀_문자열)`
    - 정규 표현식을 사용하여 문자열의 일부를 다른 문자열로 치환
    - `\d`: 모든 숫자
    - `\s`: 공백 문자
    - `g`: 전역(global) 플래그, 모든 일치 항목을 변경
    ```js
    str.replace(/\+/g, "1").replace(/\-/g, "0").replace(/\s/g, '');
    ```
2. `parseInt(문자열, 2)`
    - 2진수를 10진수로 변환
    ```js
    parseInt(str, 2)
    ```
3. `String.fromCharCode(문자열)`
    -  UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환
    ```js
    String.fromCharCode(str)
    ```
4. `for...of`
    - 반복 구문