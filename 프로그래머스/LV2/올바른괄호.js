// https://school.programmers.co.kr/learn/courses/30/lessons/12909#

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
