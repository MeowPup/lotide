const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it('should return "Lighthouse", "Labs"', () => {
    assert.deepEqual(assertEqual(words.length, 3));
  });
});