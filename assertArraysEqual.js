const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log("✅");
  } else {
    console.log("❌");
  }
};

module.exports = assertArraysEqual;
