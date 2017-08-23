function leftpad(string, number) {
  let newString = string;
  while (newString.length < (string.length + number)) {
    newString = ' ' + newString;
  }
  return newString;
}

console.log(leftpad('hello', 5));
