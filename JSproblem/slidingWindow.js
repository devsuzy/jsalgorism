// Sliding Window / Counting (Medium-Easy, 200-300 pts)
// You are given an array of integers numbers and an integer k. Your task is to calculate the total number of contiguous subarrays of length k that are strictly increasing.
// A subarray [numbers[i], numbers[i+1], ..., numbers[j]] is strictly increasing if numbers[m] < numbers[m+1] for all i <= m < j.

// Example
// Subarrays of length 3 are:
// [1, 2, 4] strictly increasing (Count = 1)
// [2, 4, 3] not increasing
// [4, 3, 5] not increasing
// [3, 5, 6] strictly increasing (Count = 2)

function solution (numbers, k) {
  // k가 1이면 모든 원소 단독으로 증가 구간이 되므로 배열의 길이를 반환
  if (k === 1) return numbers.length;

  let increasingLength = 1; // // 현재 연속으로 증가하고 있는 구간의 길이 (최소 1)
  let result = 0;

  // 1번 인덱스부터 직전 인덱스(i-1)와 비교하며 순회
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i-1]) {
      // 직전보다 증가했다면 길이 증가
      increasingLength++
    } else {
      // 증가하지 않았다면 현재 끊겼으므로 자기 자신(길이 1)부터 다시 시작
      increasingLength = 1
    }

    // 현재까지 쌓인 연속 증가 길이가 k 이상이 되면, 유효한 서브배열을 하나 찾은 것!
    if (increasingLength >= k) {
      result++
    }
  }

  console.log(result)
}

solution([1, 2, 4, 3, 5, 6], 3)