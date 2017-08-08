function findNeedle(haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      let index = haystack.indexOf(haystack[i]);
      return `found the needle at position ${index}`
    }
  }
}

function findNeedle(haystack) {
  return haystack.indexOf('needle');
}


let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(findNeedle(haystack_1));

Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5')
Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')



// Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle
//
// So
//
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return
//
// 'found the needle at position 5'
