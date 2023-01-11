/*
https://school.programmers.co.kr/learn/courses/30/lessons/42747

문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다.

위키백과에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 i편 이상이고 나머지 논문이 h - i 번 이하 인용되었다면 i의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.


제한사항

과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.


입출력 예

citations	        return
[3, 0, 6, 1, 5]	    3


입출력 예 설명

이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다.
그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.

H-Index 참조사이트
https://en.wikipedia.org/wiki/H-index "위키백과"
*/

// 해결방법
// 문제 설명에 오류가 있어 따로 H-index 방식을 검색하는 것이 낫다.
// 문자열을 내림차순으로 정렬하고 index와 인용 숫자를 비교하여
// index보다 인용한 수가 작다면 그 직전의 index가 H-index가 되는 방식이다.

function solution(citations) {
  let count = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      count++;
    } else {
      break;
    }
  }
  return count;
}
