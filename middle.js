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
// middle function
const middle = function(array) {
let midEven = Math.floor((array.length + 1) / 2);
let midOdd = Math.ceil((array.length + 1) / 2);
return array.slice(midEven - 1, midOdd)
};

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]