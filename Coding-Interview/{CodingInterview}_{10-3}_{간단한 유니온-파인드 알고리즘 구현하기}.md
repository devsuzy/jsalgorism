# 10-3 몸풀기 문제

* 문제 33 간단한 유니온-파인드 알고리즘 구현하기
* 문제 유형: 집합
* 문제 링크: https://github.com/kciter/coding-interview-js/blob/main/solution/33.js
* 시간 복잡도: O(N)

```js
// 루트 노드를 찾는 함수
function find(parents, x) {
  // 만약 x의 부모가 자신이라면 x가 루트 노드이므로 x를 반환
  if (parents[x] === x) {
    return x;
  }

  // 그렇지 않다면 x의 부모를 재귀적으로 찾아서 루트 노드를 반환하고,
  // 그 부모 노드의 루트 노드를 찾아서 parents[x]에 저장
  // 경로 압축
  parents[x] = find(parents, parents[x]);
  return parents[x];
}

// 두 개의 집합을 합치는 함수
function union(parents, x, y) {
  const root1 = find(parents, x); // x가 속한 집합의 루트 노드를 찾기
  const root2 = find(parents, y); // y가 속한 집합의 루트 노드를 찾기

  parents[root2] = root1; // y가 속한 집합을 x가 속한 집합에 합치기
}

function solution(k, operations) {
    // 처음에는 각 노드가 자기 자신을 부모로 가지도록 초기화
    const parents = Array.from({length: k}, (_,i) => i);
    // 집합의 개수를 저장할 변수, 처음에는 모든 노드가 서로 다른 집합에 있으므로 k
    let n = k;

    // operations 배열을 순회하면서 union과 find 연산을 수행
    for (const op of operations) {
      if (op[0] === 'u') {
        union(parents, op[1], op[2])
      } else if (op[0] === 'f') {
        find(parents, op[1])
      }
    }

    // 모든 노드의 루트 노드를 찾아서 Set에 넣어 중복을 제거하고, 그 크기를 반환
    n = new Set(Array.from({length: k}, (_, i) => find(parents, i))).size;

    return n;
}

console.log(solution(3, [['u', 0, 1], ['u', 1, 2], ['f', 2]]))
console.log(solution(4, [['u', 0, 1], ['u', 2, 3], ['f', 0]]))
```