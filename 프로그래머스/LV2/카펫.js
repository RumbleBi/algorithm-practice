/*
https://school.programmers.co.kr/learn/courses/30/lessons/42842


문제 설명

Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
🟫🟫🟫🟫
🟫🟨🟨🟫
🟫🟫🟫🟫
Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 
카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.


제한사항

갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.


입출력 예

brown	    yellow	    return
10	        2	        [4, 3]
8	        1	        [3, 3]
24	        24	        [8, 6]
*/

// 풀이방법
// 매개변수 두개를 더한 값은 가로 세로값의 곱과 같다. 즉 사각형의 넓이를 의미한다.
// 사각형의 넓이값에서 약수를 추출하여 temp 배열에 넣고, 최소 사각형의 크기는 3 x 3 이기 때문에 filter로 최적화를 해준다.
// 2중 for문으로 각 배열요소끼리 계속 순환하면서 곱하면서 넓이의 값(multiplySqure) 과 같은 값이 나올때 가로 세로 길이를 리턴해주면된다.

function solution(brown, yellow) {
  // 사각형 넓이
  const multiplySqure = brown + yellow;
  // 임시 배열
  const temp = [];
  // 약수 추출
  for (let i = 1; i <= multiplySqure; i++) {
    if (multiplySqure % i === 0) {
      temp.push(i);
    }
  }
  // 최적화된 약수 값들
  const divisorArr = temp.filter((el) => el >= 3);

  for (let i = 0; i < divisorArr.length; i++) {
    for (let j = i; j < divisorArr.length; j++) {
      // 사각형이 만들어지는 경우의 수가 여러개이므로, yellow의 값은 가로 - 2 * 세로 - 2 이기 때문에
      // 조건을 걸어주어서 yellow 타일의 개수와 일치하다면 리턴시킨다.
      if (divisorArr[i] * divisorArr[j] === multiplySqure) {
        if ((divisorArr[j] - 2) * (divisorArr[i] - 2) === yellow) {
          return [divisorArr[j], divisorArr[i]];
        }
      }
    }
  }
}
// 세번째 테스트 케이스의 경우 값이 두개가 나올 수 있다.
// yellow: 24
// 🟫🟫🟫🟫🟫🟫🟫🟫
// 🟫🟨🟨🟨🟨🟨🟨🟫
// 🟫🟨🟨🟨🟨🟨🟨🟫
// 🟫🟨🟨🟨🟨🟨🟨🟫
// 🟫🟨🟨🟨🟨🟨🟨🟫
// 🟫🟫🟫🟫🟫🟫🟫🟫

// yellow: 14
// 🟫🟫🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟨🟫
// 🟫🟫🟫
