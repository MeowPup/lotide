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

//tests
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //false