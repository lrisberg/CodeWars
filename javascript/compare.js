function compare(s1, s2) {
  console.log(s1);
  console.log(s2);
  let firstSum = 0;
  let secondSum = 0;
  if (!hasLetters(s1)) {
    s1 = '';
  }
  if (!hasLetters(s2)) {
    s2 = '';
  }
  if (s1 === null) {
    firstSum += 0;
  }
  else {
    for (let char of s1) {
      firstSum += char.toUpperCase().charCodeAt(0);
    }
  }
  if (s2 === null) {
    secondSum += 0;
  }
  else {
    for (let char2 of s2) {
      if (s2 === null) {
        secondSum += 0;
      } else {
        secondSum += char2.toUpperCase().charCodeAt(0);
      }
    }
  }
  console.log(firstSum);
  return (firstSum === secondSum);
}

function hasLetters(myString) {
  return /^[a-zA-Z]+$/.test(myString);
}

console.log(hasLetters('AD'));
console.log(hasLetters('DD'));

console.log(compare('AD', 'DD'));


Test.assertEquals(compare("AD", "BC"), true);
Test.assertEquals(compare("AD", "DD"), false);

Compare two strings by comparing the sum of their values (ASCII character code).
For comparing treat all letters as UpperCase.

Null-Strings should be treated as if they are empty strings.
If the string contains other characters than letters, treat the whole string as it would be empty.

Examples:

"AD","BC" -> equal

"AD","DD" -> not equal

"gf","FG" -> equal

"zz1","" -> equal

"ZzZz", "ffPFF" -> equal

"kl", "lz" -> not equal

null, "" -> equal

Your method should return true, if the strings are equal and false if they are not equal.
