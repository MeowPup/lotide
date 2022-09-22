const eqArrays = function(arrayOne, arrayTwo) {
  let a = arrayOne.length;
  let b = arrayTwo.length;
  
  if (a !== b) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual function
const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log("✅");
  } else {
    console.log("❌");
  }
};

//findKey function
const findKey = function(str, callback) {
  for (let key in str) {
    if (callback(str[key])) {
      return key;
    }
  }
};

assertArraysEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
assertArraysEqual(findKey({
  "John": { adult: false},
  "Todd": { adult: false},
  "Annie": { adult: true},
  "Sally": { adult: false}
}, x => x.adult === true), "Annie");
