function indexOf(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}


console.log(indexOf([1, 4, 5, 6], 5));
