function sortArray(array) {
  let newArray = [];
  let odds = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }

  odds.sort(function(a, b) {
    return a - b;
  });

  let oddsIndex = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 !== 0) {
      newArray.push(odds[oddsIndex]);
      oddsIndex += 1;
    }
    else {
      newArray.push(array[j]);
    }
  }
  return newArray;
}

sortArray([5, 3, 2, 8, 1, 4]);



Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
Test.assertSimilar(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
Test.assertSimilar(sortArray([]),[])

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
