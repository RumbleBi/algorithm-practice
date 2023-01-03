/*

https://school.programmers.co.kr/learn/courses/30/lessons/12941#

문제 설명
길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면

A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값 : 0 + (1x5) = 5)
A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 5 + (4x4) = 21)
A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + (2x4) = 29)
즉, 이 경우가 최소가 되므로 29를 return 합니다.

배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.


제한사항

배열 A, B의 크기 : 1,000 이하의 자연수
배열 A, B의 원소의 크기 : 1,000 이하의 자연수


입출력 예

A	         B	         answer
[1, 4, 2]	 [5, 4, 4]	 29
[1,2]	     [3,4]	     10

입출력 예 설명

입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
A에서 첫번째 숫자인 1, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 4) 다음, A에서 두번째 숫자인 2, B에서 첫번째 숫자인 3을 뽑아 곱하여 더합니다. (누적된 값 : 4 + 6 = 10)
이 경우가 최소이므로 10을 return 합니다.
*/

// 풀이순서
// 가장 큰 수와 가장 작은 수를 서로 곱하게 하고 그 값들을 더하는 것이 누적된 최솟값이다. 그러므로,
// sort() 를 사용해 A 배열은 가장 작은 숫자 순으로, B 배열은 가장 큰 숫자 순으로 정렬.
// 정렬된 배열 A, B를 같은 index 끼리 곱한 배열을 생성.
// 곱한 배열을 reduce()를 사용하여 합하면 누적된 최솟값이 나온다.

function solution(A, B) {
  const ascendingArr = A.sort(function (a, b) {
    return a - b;
  });
  const descendingArr = B.sort(function (a, b) {
    return b - a;
  });

  const newArr = [];

  for (let i = 0; i < ascendingArr.length; i++) {
    const multiply = ascendingArr[i] * descendingArr[i];
    newArr.push(multiply);
  }
  const answer = newArr.reduce((acc, cur) => acc + cur, 0);
  return answer;
}
