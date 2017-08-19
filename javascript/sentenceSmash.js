// Smash Words
function smash(words) {
  let result = '';
  for (word of words) {
    result += word + ' ';
  }
  return result.trim();
};

console.log(smash(["hello", "world"]));

Test.assertEquals(smash(["hello"]), "hello");
Test.assertEquals(smash(["hello", "world"]), "hello world");
