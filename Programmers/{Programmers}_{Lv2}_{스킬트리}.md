# 크레인 인형 뽑기 게임

* 문제 레벨 : 2
* 문제 종류 : 문자열 처리
* 시간 복잡도 : O(N × L × S)
* 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49993
* 통과 여부 : Y

### 문제 풀이
1. skill에 들어가는 문자만 남기기
2. 통과하지 못하는 조건
    1. skill의 순서와 다르면 통과하지 못함
    2. 선행 스킬이 없으면 통과하지 못함

```js
function solution (skill, skill_trees) {
    let result = 0;

    // 1. skill_trees 원소에서 skill에 들어있는 글자만 남기기
    const filtered = skill_trees.map((user) => [...user].filter((s) => skill.includes(s)).join(''))

    // 2. 통과 여부 판단하기 - 특정 문자열로 시작하는지
    for (let filteredTree of filtered) {
        if (skill.startsWith(filteredTree)) {
            result++;
        }
    }

    return result;
}
```