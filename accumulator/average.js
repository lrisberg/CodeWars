function average(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

console.log(average([1, 3, 5, 6, 7, 8]));
