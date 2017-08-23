function reduce(array, callback) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result = callback(result, array[i]);
  }
  return result;
}


console.log(reduce(['hi', 'hello', 'wassup'], function(a1, a2) {
  return a1 + a2;
}));
