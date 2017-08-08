function stray(numbers) {
  let sorted = numbers.sort(function(a, b) {
    return a - b;
  });
  let numOne = sorted[0];
  let numTwo = sorted[sorted.length - 1];
  if (sorted[1] === numOne) {
    return numTwo;
  }
  else {
    return numOne;
  }
}

[ 1, 1, 1, 1, 1, 1, 8 ]

console.log(stray([ 8, 1, 1, 1, 1, 1, 1 ]));

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Implement the method stray which accepts such array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples:

[1, 1, 2] => 2

[17, 17, 3, 17, 17, 17, 17] => 3
