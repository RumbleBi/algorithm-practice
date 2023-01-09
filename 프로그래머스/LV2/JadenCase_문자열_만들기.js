/*

https://school.programmers.co.kr/learn/courses/30/lessons/12951

문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.


제한 조건

s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.


입출력 예

s	                       return
"3people unFollowed me"	   "3people Unfollowed Me"
"for the last week"	       "For The Last Week"
*/

// 풀이순서
// split() 을 사용해 공백을 기준으로 배열 생성.
// map() 을 통해 각 배열의 요소들의 첫번째 문자열을 대문자로 변환하고 첫번째 문자열을 제외한 나머지 문자열을 소문자로 변환.
// 변환된 값들을 join() 을 사용하여 배열에서 다시 문자열로 변환 후 리턴.

function solution(s) {
  const jadenCase = s
    .split(" ")
    .map((el) => (el ? el[0].toUpperCase() + el.slice(1, el.length).toLowerCase() : ""));
  // 공백문자가 연속해서 나올 수 있다는 조건에 따라 문자열의 마지막이 공백인 케이스가 있음.
  // 맨 마지막 문자열의 연속된 공백을 포함하는 삼항연산자를 추가.
  const answer = jadenCase.join(" ");
  return answer;
}
