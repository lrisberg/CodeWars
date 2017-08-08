function findUniq(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  });
  if (sorted[0] !== sorted[1]) {
    return sorted[0];
  }
  else {
    return sorted[sorted.length - 1];
  }
}

console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));


Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
