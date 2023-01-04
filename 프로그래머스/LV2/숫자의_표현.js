/*

https://school.programmers.co.kr/learn/courses/30/lessons/12924

문제 설명

Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15

자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.


제한사항

n은 10,000 이하의 자연수 입니다.


입출력 예

n	    result
15	    4
입출력 예 설명
입출력 예#1
문제의 예시와 같습니다.
*/

// 풀이순서
// 재귀함수를 사용하는 문제이다.
// n의 값보다 낮은 sum 의 값이 나온다면, sum + cur과, cur++ 를 통해 값을 하나씩 추가하면서 차례대로 더하기를 계속한다.
// n의 값과 일치하는 sum이 나온다면 answer++ 를 하고 n의 값보다 초과된 sum이 나온다면 false를 반환해 다음 반복문을 실행시킨다.
// 문제에 효율성 검증도 추가되었기 때문에 n / 2 반복으로 불필요한 순회 횟수를 줄임.

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n / 2; i++) {
    if (check(n, i, 0)) answer += 1;
  }
  return answer + 1;
}

function check(n, cur, sum) {
  if (sum === n) return true;
  if (sum > n) return false;

  return check(n, cur + 1, sum + cur);
}
