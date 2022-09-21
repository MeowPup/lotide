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
//without function
const without = function(source, itemsToRemove) {
  const newArr = [];
  for (let i = 0; i < source.length; i++) {
    const elementInQuestion = source[i];
    if (itemsToRemove.includes(elementInQuestion)) {
      console.log("This is the item to remove", elementInQuestion);
    } else {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1]), [2, 3, 2, 3]);
assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]);