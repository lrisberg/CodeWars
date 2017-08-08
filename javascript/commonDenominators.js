function convertFrac(array){
  let denominators = [];
  for (let i = 0; i < array.length; i++) {
    let pair = array[i];
    denominators.push(pair[1]);
  }
  let sortedDenominators = denominators.sort(function(a, b) {
    b - a;
  });
  let largestDenominator = sortedDenominators[sortedDenominators.length - 1];
  let currentMult = 1;
  let denomCheck;
  while (true) {
    denomCheck = largestDenominator * currentMult;
    let bool = true;
    for (let i = 0; i < denominators.length; i++) {
      if (denomCheck % denominators[i] !== 0) {
        bool = false;
        break;
      }
      else {
        continue;
      }
    }
    if (bool === true) {
      break;
    }
    else {
      currentMult += 1;
    }
  }
  let newString = '';
  for (let pair of array) {
    let denom = pair[1];
    let numer = pair[0];
    let number = denomCheck / denom;
    let newDenom = denom * number;
    let newNumer = numer * number;
    newString += `(${newNumer},${newDenom})`;
  }
  return newString;
}

console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ]))

var lst = [ [1, 2], [1, 3], [1, 4] ]
Test.assertEquals(convertFrac(lst), "(6,12)(4,12)(3,12)")

// Common denominators
//
// You will have a list of rationals in the form
//
//  { {numer_1, denom_1} , ... {numer_n, denom_n} }
// or
//
//  [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
// or
//
//  [ (numer_1, denom_1) , ... (numer_n, denom_n) ]
// where all numbers are positive ints.
//
// You have to produce a result in the form
//
//  (N_1, D) ... (N_n, D)
// or
//
//  [ [N_1, D] ... [N_n, D] ]
// or
//
//  [ (N_1', D) , ... (N_n, D) ]
// or
//
// {{N_1, D} ... {N_n, D}}
// depending on the language (See Example tests)
//
// in which D is as small as possible and
//
//  N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:
//
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3,
