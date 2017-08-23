function none(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(none([3, 6, 7, 9], function(num) {
  if (num % 2 === 0) {
    return true;
  }
}));
