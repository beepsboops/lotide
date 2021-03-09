// test/tailTest.js
const assertEqual = require('chai').assert; //changed assertEqual -> assert.deepEqual; not sure if this is what instructions meant
const tail = require('../tail');
const assert = require('chai').assert;


//TEST CODE FROM tail.js
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(assertEqual(tail(words), ["Lighthouse", "Labs"])); // Do i want my test case to look like this?; deep equal for arrays or objects; remove this 

describe("#tail", () => {
  it("describes what I'm testing - am I getting the tail", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});