/*

https://school.programmers.co.kr/learn/courses/30/lessons/12909#

문제 설명

괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.


제한사항

문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.


입출력 예

s	          answer
"()()"	    true
"(())()"	  true
")()("	    false
"(()("	    false


입출력 예 설명

입출력 예 #1,2,3,4
문제의 예시와 같습니다.
*/

// 퓰이순서
// '('와 ')' 에 숫자를 부여하여 올바른 괄호가 되기 위해서는 우선 문자열의 합이 0 이 되어야 한다.
// 그리고 올바른 괄호는 '(' 이게 먼저 오기 때문에 만약 0 보다 작은 음수가 나오게 된다면 올바르지 않은
// 괄호가 되기 때문에 false를 반환시킨다.
// 만약 문자열의 합이 0 이라면 true를 반환시키고 아니라면 false를 반환시키면 된다.

function solution(s) {
  // 효율성검증을 위한 early return
  if (s[0] === ")" || s[s.length - 1] === "(") return false;

  let acc = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      ++acc;
    } else {
      --acc;
      if (acc < 0) {
        return false;
      }
    }
  }

  return acc === 0 ? true : false;
}
