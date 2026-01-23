# 문제 8번

* 문제 레벨 : 0
* 문제 종류 : 수학
* 문제 링크 : https://jsalgo.co.kr/?page=8
* 통과 여부 : Y

### 문제 풀이

```javascript
function solution(data){
    const special = 3300;
    const upgrade = 300;

    if (data < special) return 0

    let item = Math.floor(data / special); // 최대 구매 갯수

    // item을 줄여가며 조건에 만족할 때까지 조정
    while (item > 0) {
        const free = Math.floor(item / 10);
        const cost = special * item + upgrade * free

        if (cost <= data) {
            return item + free
        }
        item--;
    }
    return 0
}
```