const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F44D, 0x1F44D, 0x1F44D) + ` Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F4A9, 0x1F4A9, 0x1F4A9) + ` Assertion Failed: ${actual} !== ${expected}`);
  } return assertEqual;
};

const countLetters = function(sentenceString) {
  let spacesRemoved = sentenceString.split(" ").join("");
  const results = {};
  for (let i = 0; i < spacesRemoved.length; i++) {
    if (!(spacesRemoved[i] in results) /*&& !(" ") <- could also have used this instead of split & join; ty Alvin*/) {
      results[spacesRemoved[i]] = 1;
    } else {
      results[spacesRemoved[i]] += 1
    }
  }
  return results;
};

// TEST CODE

console.log(countLetters('test'))

// EXPECTED OUTPUT
// t: 2
// e: 1
// s: 1

console.log(countLetters("lighthouse in the house"))

// EXPECTED OUTPUT
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }