const takeUntil = function(array, callback) { // calling line 17 array = [1, 2, 5, 7, 2, -1, 2, 4, 5], callback = x => x < 0
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(callback(array[i]))
    if (callback(array[i])) { // 1 === x => x < 0 = false
      break;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);