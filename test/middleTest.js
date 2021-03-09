// test/middleTest.js
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert

// TEST CODE FROM middle.js
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14]))
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]))

describe("#middle", () => {
  it("returns [2,3] for [1, 2, 3, 4", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2,3]);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
});