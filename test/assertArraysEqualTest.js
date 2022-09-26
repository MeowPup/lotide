const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertEqualArrays", () => {
  it('should return true for [1, 2, 3], [1, 2, 3]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it('should return false for [1, 2, 3], [1, 2, "3"]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, "3"]));
  });
});

