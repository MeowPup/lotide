const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// creating a funtion to determine if 2 arrays are equal
const eqArrays = function(arrayOne, arrayTwo) {
let a = arrayOne.length
let b = arrayTwo.length
// if length is not equal it will return false
if (a !== b) {
  return false;
}
// if an element in the array is not equal return false
for (let i = 0; i < arrayOne.length; i++) {
  if (arrayOne[i] !== arrayTwo[i]){
    return false;
   } 
  }
  // else return true 
  return true;
 }

// test code
assertEqual(eqArrays([], [1, 2, 3]), true);
assertEqual(eqArrays([1], [1, 2, 3]), true);