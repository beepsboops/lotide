// assertArraysEqual Function
const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(String.fromCodePoint(0x1F4A9) + ` Assertion Failed`);
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(String.fromCodePoint(0x1F4A9) + ` Assertion Failed`);
      }
    } console.log(String.fromCodePoint(0x1F44D) + ` Assertion Passed`);;
  }
};

// eqArrays Function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  }
};

/*
PSUEDO CODE

loop through itemsToRemove array
for every element in itemsToRemove array loop through source array
compare element in itemsToRemove array to every element in source array
if element in itemsToRemove array !== item in source array, push that element into a new array
do we want to account for an elemnent that occurs multiple tiems?


In genreal, nested looops to be avoided

loop through source array
use includes method
itemsToRemove.includes(source[i])
if it's not there (we are looking for items to exclude), push into new array (our items to include)
make sure pushed array is outside loop
*/

// without Function
const without = function(source, itemsToRemove) {
  let withoutArr = []
  let withoutNum = ""
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) === false) {
      withoutNum = source[i]
      withoutArr.push(withoutNum);
    }
  }
  return withoutArr;
}


// TEST CASES

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without([1, 2, 3], [])) // => [1, 2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // makes sure orignal array wasn't modified; this should pass