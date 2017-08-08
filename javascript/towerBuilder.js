function towerBuilder(nFloors) {
  let towerArray = [];
  for (let i = 0; i < nFloors; i++) {
    let floorString = '';
    let floorStringLength = (((nFloors - 1) * 2) + 1)
    console.log(floorStringLength);
    for (let j = 0; j < ((i * 2) + 1); j++) {
      floorString += '*';
    }
    while (floorString.length < floorStringLength) {
      floorString = ` ${floorString} `;
    }
    towerArray.push(floorString);
  }

  return towerArray;
}

console.log(towerBuilder(5));


Test.assertEquals(JSON.stringify(towerBuilder(1)), JSON.stringify(["*"]));
Test.assertEquals(JSON.stringify(towerBuilder(2)), JSON.stringify([" * ", "***"]));
Test.assertEquals(JSON.stringify(towerBuilder(3)), JSON.stringify(["  *  ", " *** ", "*****"]));



// Build Tower
//
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
//
// Tower block is represented as *
//
// JavaScript: returns an Array;
// Have fun!
//
// for example, a tower of 3 floors looks like below
//
// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below
//
// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]
