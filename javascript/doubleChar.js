function doubleChar(str) {
  return str.split("").map(function(c) {
    return c + c;
  }).join("")
}

console.log(doubleChar('abcd'));

//TOP ANSWER:
const doubleChar = (str) => str.split("").map(c => c + c).join("");

//MY FIRST ANSWER:
function doubleChar(str) {
  let newString = '';
  for (let char of str) {
    newString += char + char;
  }
  return newString;
}


Test.describe("doubleChar", function() {
  Test.it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
});


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// doubleChar("String") ==> "SSttrriinngg"
//
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
//
// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!
