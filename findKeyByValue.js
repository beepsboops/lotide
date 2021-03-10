const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F44D) + ` Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F4A9) + ` Assertion Failed: ${actual} !== ${expected}`);
  } return assertEqual;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(bestTVShowsByGenre, specificTVShow) {
  let genreKeys = Object.keys(bestTVShowsByGenre);
  // console.log(Object.keys(bestTVShowsByGenre))
  // let genre = ""
  for (const tvShows in bestTVShowsByGenre) {
    if (specificTVShow === `${bestTVShowsByGenre[tvShows]}`) {
      // const genre = Object.keys(bestTVShowsByGenre).find(element => element = specificTVShow)
      // console.log(genre)
      // console.log(bestTVShowsByGenre[specificTVShow])
      // console.log(Object.keys[specificTVShow])
      // console.log(specificTVShow)
      // console.log(tvShows)
      return tvShows
    }
  }
  // return genre;
}

// console.log(Object.keys(bestTVShowsByGenre))

// TEST CODE

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")) // should return "drama"

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);