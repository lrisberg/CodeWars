function solution(str, ending){
  for (let i = (ending.length - 1); i >= 0; i--) {
    console.log(ending[i]);
  }
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
