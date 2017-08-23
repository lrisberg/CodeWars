function join(array, separator) {
  let newString = '';
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      newString += array[i];
    }
    else {
      newString += array[i] + separator;
    }
  }
  return newString;
}

console.log(join(['hey', 'what', 'you'], ','));
