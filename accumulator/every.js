function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}


console.log(every([2, 5, 6, 8], function(num) {
  if (num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}));
