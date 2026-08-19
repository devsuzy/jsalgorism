# 08-5 합격자가 되는 모의 테스트

* 문제 23 베스트 앨범
* 문제 유형: 해시
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42579
* 시간 복잡도: O(NlogN)

```js
function solution(genres, plays) {
  let answer = [];
  const playObj = {}; // 각 장르에 속한 노래의 총 재생 횟수, {장르: 총 재생횟수}
  const genresObj = {}; // 장르 내에서 가장 많이 재생된 곡, 고유 번호가 낮은 곡을 기준으로 정렬, {장르: [고유번호, 재생횟수]}

  // 1. playObj와 genresObj 값 넣기
  for(let i = 0; i < genres.length; i++) {
    genre = genres[i]
    play = plays[i]

    if (!(genre in genresObj)) {
      genresObj[genre] = []
      playObj[genre] = 0;
    }

    genresObj[genre].push([i, play])
    playObj[genre] += play
  }

  // 2. sortedGenres -> 총 재생 횟수가 많은 장르순으로 정렬
  sortedGenres = Object.keys(playObj).sort((a, b) => {
    return playObj[b] - playObj[a]
  })

  // 3. 각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡까지 선택
  for (const genre of sortedGenres) {
    sortedSong = genresObj[genre].sort((a, b) => {
      // 장르 내에서 재생 횟수가 같으면 고유번호가 낮은 노래를 먼저 수록(오름차순)
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
    })
    answer.push(...sortedSong.slice(0, 2).map((song) => song[0]))
  }
  
  return answer
}
```