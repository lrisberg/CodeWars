function max(array) {
  let largestSoFar = null;
  for (let i = 0; i < array.length; i++) {
    if (largestSoFar === null) {
      largestSoFar = array[i];
    }
    else {
      if (array[i] > largestSoFar) {
        largestSoFar = array[i];
      }
    }
  }
  return largestSoFar;
}

console.log(max([3, 4, 6, 73, 4]));
