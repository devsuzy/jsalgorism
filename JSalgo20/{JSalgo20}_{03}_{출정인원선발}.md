# 문제 3번

* 문제 레벨 : 1
* 문제 종류 : 정렬
* 문제 링크 : https://jsalgo.co.kr/?page=3
* 통과 여부 : N

### 문제 정답

```javascript
function solution (data) {
    const dataLength = data.length;
    const topRankerNum = parseInt(dataLength * 0.3) // 상위 30%만 선발

    if (topRankerNum === 0) {
        return [] // 지원자가 상위 30% 미만일 경우 아무도 출전하지 않음
    }

    let topRankerPeopleNum = 0; // 선발된 인원 수
    let processedScore = {}; // 점수를 내기 위해 데이터를 가공하기 위한 변수
    let topRankerPeopleArr = []; // 선발된 인원 이름

    for (let i of data) {
        // 1. 지원자의 점수 총 합계 구하기
        let sum = i.slice(1).reduce((x,y) => x+y, 0);
        // 2. 점수 모음에 객체 형태로 넣기 -> { 총점: ["이름"], ... }
        if (sum in processedScore) {
            // 동점자가 있을 경우
            processedScore[sum].push(i[0])
        } else {
            processedScore[sum] = [i[0]]
        }
    }

    processedScore = Object.entries(processedScore) // [ [총점, ["이름"]], ... ]
    processedScore.sort((a,b) => b[0] - a[0]) // 내림차순으로 정렬

    for (let i of processedScore) {
        if (topRankerPeopleNum < topRankerNum && i[1].length <= topRankerNum) {
            // 선발된 인원 수가 선발해야되는 인원 수보다 적고, 동점자가 선발해야하는 인원 수보다 적거나 같을 때
            topRankerPeopleArr.push(...i[1]); // 전개 방식으로 넣기
            topRankerPeopleNum += i[1].length; // 선발된 인원 수 증가
        } else if (i[1].length > topRankerNum) {
            // 동점자 선발 인원이 선발해야할 인원 수보다 클 때
            return topRankerPeopleArr
        }
        topRankerNum - topRankerPeopleNum
    }

    topRankerPeopleArr.sort().reverse() // 알파벳 역순으로 출력
    return topRankerPeopleArr
}
```

### 문제 풀이
1. `parseInt(dataLength * 0.3)`
    - 상위 30%만 선발
    - 지원자가 상위 30% 미만일 경우 아무도 출전하지 않음
    ```js
        if (topRankerNum === 0) {
        return [];
    }
    ```
2. `i.slice(1).reduce((x,y) => x+y, 0);`
    - 지원자의 점수 총 합계 구하기
    - 동점자가 있을 경우 같은 배열에 놓기
    ```js
        if (sum in processedScore) {
            processedScore[sum].push(i[0])
        } else {
            processedScore[sum] = [i[0]]
        }
    ```
3. `processedScore.sort((a,b) => b[0] - a[0])`
    - 점수가 높은 순으로 정렬(내림차순)
4. 동점자가 있는 경우
    - 총인원에 30%가 넘지 않도록 선발
    - 상위 동일 점수가 30%가 넘어가는 경우에도 아무도 선발하지 못함
    ```js
    if (topRankerPeopleNum < topRankerNum && i[1].length <= topRankerNum) {
        topRankerPeopleArr.push(...i[1]); 
        topRankerPeopleNum += i[1].length; 
    } else if (i[1].length > topRankerNum) {
        return topRankerPeopleArr
    }
    ```
5. `topRankerPeopleArr.sort().reverse()`
    - 알파벳 역순으로 출력