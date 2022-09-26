const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it('should return [2]', () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
  });

  it('should return [3]', () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
  });

  it('should return []', () => {
    assert.strictEqual(assertArraysEqual(middle([1]), []));
  });

  it('should return [2, 3]', () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
  });

});


