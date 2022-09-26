const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it('should return true for Lighthouse Labs === Lighthouse Labs', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
  });

  it('should return false for (1, 5)', () => {
    assert.strictEqual(assertEqual(1, 5));
  });

});


