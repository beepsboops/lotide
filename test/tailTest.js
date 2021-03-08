// test/tailTest.js
const assertEqual = require('../assertEqual')
const tail = require('../tail')


//TEST CODE FROM tail.js
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(assertEqual(tail(words), ["Lighthouse", "Labs"])); // Do i want my test case to look like this?