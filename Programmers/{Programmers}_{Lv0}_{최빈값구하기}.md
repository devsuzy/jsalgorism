# 최빈값 구하기

* 문제 레벨 : 0
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120812
* 통과 여부 : Y

### 실패 문제 풀이
- filter, indexOf로 중복값을 찾아서 값 리턴
- array에 원소가 하나만 있을 경우 early return으로 처리
- 테스트 케이스에서 실패..
- 실패 요인으로는 array에 중복된 값이 없으면 undefined을 리턴함
```js
function solution(array) {
    if (array.length <= 1) return array[0]
    
    const maximumArr = array.filter((item, index) => array.indexOf(item) !== index);
    const uniqueValues = [...new Set(maximumArr)]
    
    return uniqueValues.length > 1 ? -1 : uniqueValues[0]
}
```

### 통과 문제 풀이
- Map을 생성하여 각 원소 값을 key에, 원소 값 갯수를 value에 저장
- 여러 번 나온 원소값이 있을 경우 value에 +1
- map을 순회하며 maxCount를 가진 key를 mode에 저장
- 현재 숫자의 빈도수가 maxCount와 값다면 최빈값이 여러 개임
```js
function solution(array) {
    if (array.length === 0) return -1
    
    const map = new Map();
    let maxCount = 0;
    let mode = -1;
    let isDuplicate = false;
    
    for (let num of array) {
        map.set(num, (map.get(num) || 0) + 1) // key: 원소값, value: 원소값 갯수
    }
    
    for (let [key, count] of map) {
        if (count > maxCount) {
            maxCount = count;
            mode = key;
            isDuplicate = false;
        } else if (count === maxCount) {
            isDuplicate = true; // 최빈값이 여러 개인 경우
        }
    }
    
    return isDuplicate ? -1 : mode;
}
```