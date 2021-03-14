// // TEST/ASSERTION FUNCTIONS
// const eqArrays = function(...) {
//   //...
// }

// const assertArraysEqual = function(actual, expected) {
//   //...
// }

// ACTUAL FUNCTION

const middle = function(array) {
  let evenArrayMiddleIndex1 = "";
  let evenArrayMiddleIndex2 = "";
  let oddArrayMiddleIndex = [];
  let newArray = [];
  if (array.length % 2 === 0) {
    evenArrayMiddleIndex1 = array.length / 2;
    evenArrayMiddleIndex2 = (array.length / 2) + 1;
    newArray.push(evenArrayMiddleIndex1);
    newArray.push(evenArrayMiddleIndex2);
    // evenArrayMiddleElement2 = (array.length / 2) + 1;
    // console.log(evenArrayMiddleElement2)
    return newArray;
  }
  else {

    oddArrayMiddleIndex = (array.length + 1) / 2;
    // console.log(oddArrayMiddleIndex)
    newArray.push(oddArrayMiddleIndex)
    return newArray;
  }
};

console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4]))
// console.log('test')
// console.log("1")

module.exports = middle

// TEST CODE



/*
NOTES

What do I want to do?

I want to know if an array is odd or even

const evenArrayMiddleIndex1;
const evenArrayMiddleIndex2;
const oddArrayMiddleIndex;

if (array.length % 2 = 0) {
  evenArrayMiddleIndex1 = array.length / 2;
  evenArrayMiddleElement2 =  (array.length / 2) + 1
} 

else {
  oddArrayMiddleIndex = (array.length + 1) / 2
}



const middleOdd = (length of array + 1) / 2 = 4

length of array / 2 = 4
(length of array / 2) + 1 = 5



If array is odd
middle element index = length of array (7) 




eg, odd array [1, 2, 3, 4, 5, 6, 7]
middle elemnt is 4
formula to find middle element
(length of array + 1) / 2 = 4
7 + 1 /2 = 4

eg, even array [1, 2, 3, 4, 5, 6, 7, 8]
middle elemnts are 4, 5
formulat to find middle elements
x = 4
y = 5
length of array / 2 = 4
(length of array / 2) + 1 = 5



return index values of middle ONE or middle TWO elements



*/