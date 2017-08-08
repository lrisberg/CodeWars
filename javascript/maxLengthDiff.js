function mxdiflg(a1, a2) {
  if (a1 === [] || a2 === []) {
    return -1;
  }
  let longest1 = a1.sort(function (a, b) { return b.length - a.length; })[0];
  let longest2 = a2.sort(function (a, b) { return b.length - a.length; })[0];
  let shortest1 = a1.sort(function (a, b) { return a.length - b.length; })[0];
  let shortest2 = a2.sort(function (a, b) { return a.length - b.length; })[0];
  console.log('longest1 =', longest1.length);
  console.log('longest2 =', longest2.length);
  console.log('shortest1 =', shortest1.length);
  console.log('shortest2 =', shortest2.length);

  console.log(longest1.length - shortest2.length)
  console.log(longest2.length - shortest1.length)

  return Math.max((longest1.length - shortest2.length), longest2.length - shortest1.length);
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2))


Test.describe("mxdiflg",function() {
Test.it("Basic tests",function() {
    var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
    var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    Test.assertEquals(mxdiflg(s1, s2), 13);

})})
//
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
// Find max(abs(length(x) − length(y)))
//
// If a1 or a2 are empty return -1 in each language except in Haskell where you will return Nothing.
//
// Example:
//
// s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(s1, s2) --> 13
