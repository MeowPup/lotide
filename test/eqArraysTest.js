const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it('should return true for [1, 2, 3], [1, 2, 3]', () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });
});

