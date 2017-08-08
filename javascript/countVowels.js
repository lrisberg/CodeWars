function getCount(str) {
  let count = 0;
  let vowels = ['a', 'i', 'u', 'e', 'o'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count
}

console.log(getCount('abracadabra'));

describe("Case 1", function() {
  it ("should be defined", function() {
    Test.assertEquals(getCount("abracadabra"), 5)
  });
});


// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
