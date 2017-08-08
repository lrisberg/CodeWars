function squareDigits(num){
  //may the code be with you
  let number = num.toString();
  let result = '';
  for (var i = 0; i < number.length; i++) {
    let digit = number[i];
    result += (digit * digit)
  }

  return parseInt(result);
}


console.log(squareDigits(9119));

// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out.
//
// Note: The function accepts an integer and returns an integer
