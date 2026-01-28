# 문제 9번

* 문제 레벨 : 1
* 문제 종류 : 투포인터, 슬라이딩 윈도우
* 문제 링크 : https://jsalgo.co.kr/?page=9
* 통과 여부 : N

### 문제 풀이
```javascript
function solution(data){
    if (data.length < 2) return 0
    
    let max = 0;
    let min = 0;
    let loss = 0;
    
    for (let i = 0; i < data.length - 1; i++) {
        if (max === 0 && min === 0) {
            max = data[i]
            min = data[i]
        }
        if (data[i] > max) {
            max = data[i]
            loss = max - min
        } else if (data[i] < min) {
            min = data[i]
            loss = max - min
        }
    }

    return loss
}
```

### 문제 정답
```javascript
function solution(data){
    if (data.length < 2) return 0 // 최소 2일 데이터 필요
    
    let max = 0;
    let maxLoss = 0;
    
    for (let i = 0; i < data.length - 1; i++) {
        // 1. 현재까지의 최고가 갱신
        if (data[i] > max) {
            max = data[i]
        } else {
            // 2. 하락폭 계산 (현재가가 최고가보다 낮을 때)
            let curLoss = max - data[i]
            // 3. 최대 손실액 갱신
            if (curLoss > maxLoss) {
                maxLoss = curLoss
            }
        }
    }

    return maxLoss
}
```
