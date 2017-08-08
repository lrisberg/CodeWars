function partlist(arr) {
  let newArray = [];
  for (let i = 0; i < (arr.length - 1); i++) {
    let wordArray = [];
    let firstWord = '';
    let secondWord = '';
    for (let j = 0; j < arr.length; j++) {
      if (j <= i) {
        if (j !== i) {
          firstWord += arr[j] + ' ';
        }
        else if (j === i) {
          firstWord += arr[j];
        }
      }
      else if (j < arr.length) {
        if (j === (arr.length - 1)) {
          secondWord += arr[j];
        }
        else {
          secondWord += arr[j] + ' ';
        }
      }
    }
    wordArray.push(firstWord);
    wordArray.push(secondWord);
    newArray.push(wordArray);
  }
  return newArray;
}

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

function testing(actual, expected) {
    Test.assertSimilar(actual, expected);
}

Test.describe("partlist",function() {
  Test.it("1st Basic tests", function() {
    testing(partlist(["I", "wish", "I", "hadn't", "come"]),
        [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
    testing(partlist(["cdIw", "tzIy", "xDu", "rThG"]),
        [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
    testing(partlist(["vJQ", "anj", "mQDq", "sOZ"]),
        [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
  })
})

Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Example:

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

or

a = {"az", "toto", "picaro", "zone", "kiwi"} -->

{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

or

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

or

a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

You can see other examples for each language in "Your test cases"
