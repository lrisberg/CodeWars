function min(array) {
  let smallestSoFar = null;
  for (let i = 0; i < array.length; i ++) {
    if (smallestSoFar === null || smallestSoFar > array[i]) {
      smallestSoFar = array[i];
    }
  }
  return smallestSoFar;
}

console.log(min([3, 4, 6, 2, 5, 5]));
