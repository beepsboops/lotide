// FUNCTION IMPLEMENTATION

const tail = function(words) {
  let actual = words.slice(1);
  return actual;
};

const assertEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(assertEqual(tail(words), ["Lighthouse", "Labs"])); // Do i want my test case to look like this?