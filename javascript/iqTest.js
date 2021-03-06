function iqTest(numbers) {
  let numbersArray = numbers.split(' ');
  let evensSoFar = [];
  let oddsSoFar = [];
  let evenness = undefined;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      evensSoFar.push(numbersArray[i]);
    }
    else {
      oddsSoFar.push(numbersArray[i]);
    }
    if (evensSoFar.length === 1 && oddsSoFar.length >= 2) {
      evenness = 'even';
      break;
    }
    else if (oddsSoFar.length === 1 && evensSoFar.length >= 2) {
      evenness = 'odd';
      break;
    }
  }
  for (let j = 0; j < numbersArray.length; j++) {
    if (evenness === 'even') {
      if (numbersArray[j] % 2 === 0) {
        return j + 1;
      }
    }
    else if (evenness === 'odd') {
      if (numbersArray[j] % 2 !== 0) {
        return j + 1;
      }
    }
  }
}

console.log(iqTest("2 4 7 8 10"));


Test.assertEquals(iqTest("2 4 7 8 10"),3);
Test.assertEquals(iqTest("1 2 2"), 1);




// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
//
// Examples :
//
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
//
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
