function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}


console.log(map([2, 4, 6, 7], function(num) {
  return num * 2;
}))
