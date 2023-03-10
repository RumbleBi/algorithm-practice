/*
https://school.programmers.co.kr/learn/courses/30/lessons/12953


문제 설명

두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.


제한 사항

arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다.


입출력 예

arr	        result
[2,6,8,14]	168
[1,2,3]	    6
*/

// 해결방법
// 유클리드 호제법을 사용하여 최대공약수를 구하고, 최소공배수 = a * b / 최대공약수 의 공식을 사용하여 해를 구할 수 있다.
// n개의 숫자들의 최소 공배수를 구할때는 앞의 2개의 값의 최소공배수를 구하고 3, 4번째 숫자 차례대로 최소공배수를 구해도 값은 같다. 동시에 값을 계산할 필요가 없다.

function gcd(a, b) {
  // b(현재 나머지)가 0이면, a(직전 나머지 값)를 리턴
  if (b === 0) return a;
  // b(현재 나머지)를 앞으로 보내고 a % b 를 나눈 나머지를 재귀함수로 재호출하여 값이 나올때까지 호출
  return gcd(b, a % b);
}

function solution(arr) {
  // 최소공배수 값 구하는 공식: 최소공배수 = a * b / 최대공약수
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}
