
function solution(n) {
  let largestFound = 1;
  let multiplier = 1;
  while (multiplier <= n) {
    if (n % multiplier === 0) {
      largestFound = multiplier;
    }
    multiplier *= 2;
  }
  return largestFound;
}

console.log(solution(192));
console.log(solution(123));

2, 4, 8, 16, 32, 64

describe("Solution", function(){
  it("should pass some example tests", function(){
    Test.assertEquals(solution(123), 1);
    Test.assertEquals(solution(192), 64);
    Test.assertEquals(solution(132232), 8);
    Test.assertEquals(solution(64), 64);
  });
});

// Write a function that takes a number and returns highest power of 2 that evenly divides the number.
//
// For example:
//
//   solution( 123 ) should return 1
//   solution( 192 ) => 64
//   solution( 132232 ) => 8
//   solution( 123 ) should return 1
//   solution( 192 ) => 64
//   solution( 132232 ) => 8
// Assume that: number is an integer within the range [1..10^18].
