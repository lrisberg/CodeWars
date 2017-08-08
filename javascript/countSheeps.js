function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// MY FIRST ANSWER:
function countSheeps(arrayOfSheep) {
  let total = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    console.log(arrayOfSheep[i]);
    if (arrayOfSheep[i] === true) {
    total += 1;
    }
  }
  return total;
}

var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];


console.log(countSheeps(array1))

// Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")
