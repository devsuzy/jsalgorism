# 바탕화면 정리

* 문제 레벨 : 2
* 문제 종류 : 정렬
* 시간 복잡도 : O(nlogn), O(n)
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42747?itm_content=course14743
* 통과 여부 : Y

### 문제 풀이
1. 문제 재정의 - h번 이상 인용된 논문이 h편 이상인 h 중 최댓값
2. 내림차순 정렬
3. 현재 논문의 인덱스(citations[i])가 지금까지 본 논문 수(i + 1) 보다 크거나 같은 것 중 최댓값 찾기

- 정렬 풀이, 시간복잡도 O(nlogn)
```js
function solution(citations) {
    let result = 0;
    // 1. 내림차순 정렬
    citations.sort((a, b) => b - a)
    // 2. 반복문 + 조건문
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) result = i + 1
        else break
    }
    return result
}
```

- 카운팅 풀이, 시간복잡도 O(n)
```js
function solution(citations) {
    const sorted = [...citations].sort((a, b) => b - a)
    // 깨지는 조건의 인덱스를 반환
    const idx = sorted.findIndex((c, i) => c < i + 1)
    // 조건이 안깨지면 -1 반환, 이 때 논문 수 전체 길이 반환
    return idx === -1 ? sorted.length : idx
}
```