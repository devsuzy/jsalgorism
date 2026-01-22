# 문제 7번

* 문제 레벨 : 1
* 문제 종류 : 투포인터, 슬라이딩 윈도우
* 문제 링크 : https://jsalgo.co.kr/?page=7
* 통과 여부 : Y

### 문제 정답

```javascript
function solution(data){
    let result = [];

    data[0].forEach((v, i) => {
        for (let j = i + 1; j < data[0].length; j++) {
            if (v + data[0][j] === data[1]){
                result.push(i, j)
            }
        }
    })
    
    return result
}
```

### 문제 풀이
1. 슬라이딩 윈도우 알고리즘
    - 고정 사이즈의 윈도우가 이동하면서 윈도우 내 데이터를 연산하여 문제 해결
    - [1, 5, 4, 6, 4, 6, 7, 6, 4, 3, 1, 2] 에서 연속된 2개의 합이 10인 모든 수
2. 투 포인터 알고리즘
    - 두 개의 점의 위치(index)를 이용하여 순차적 해결
    - 1, 5, 4, 6, 4, 6, 7, 6, 4, 3, 1, 2] 에서 연속된 배열의 합이 10인 배열의 인덱스
3. `data[0].forEach((v, i) => {}`
    - data[0]번째 배열의 값과 인덱스 모두 추출
4. `for (let j = i + 1; j < data[0].length; j++) {}`
    - data[0]번째의 첫 번째 값을 기준으로 순차적으로 순회
5. `if (v + data[0][j] === data[1]){}`
    - data[0][0] + data[0][j]를 순차적으로 연산하며 data[1]과 같은 값인지 확인
6.  `result.push(i, j)`
    - true 이면 해당 포인터를 배열에 삽입