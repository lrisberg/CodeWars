function isIsogram(str) {
  let lettersSoFar = [];
  for (let i = 0; i < str.length; i++) {
    if (lettersSoFar.includes(str[i].toLowerCase()) || lettersSoFar.includes(str[i].toUpperCase())) {
      return false;
    }
    else {
      lettersSoFar.push(str[i]);
    }
  }
  return true;
}

console.log(isIsogram('dNznye ?'));

Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );



// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case
