function filter(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(filter([1, 3, 4, 6, 8], function(num) {
  if (num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}))
