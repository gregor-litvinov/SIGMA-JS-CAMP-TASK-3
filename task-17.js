// Задача17
// В заданому масиві найменший елемент помістити на перше місце,
// найменший з тих, що залишилися - на останнє місце, наступний -
// передостаннє і так далі - до середини масиву.

const initialArr = [3,1,9,7,5,4,6];

const sortFunc = (arr) => {

  const minIndex = arr.indexOf(Math.min(...arr));
  arr.unshift(arr.splice(minIndex, 1)[0]);

  const subArr = arr.slice(1, Math.floor(arr.length / 2) + 1);
  const remainingSubArr = arr.slice(Math.floor(arr.length / 2) + 1);

  subArr.sort((a, b) => b - a);
  const result = arr.slice(0, 1).concat(remainingSubArr).concat(subArr);

 return result
}
console.log(sortFunc(initialArr))


// lodash:

// const _ = require('lodash');

// const arr = [3,1,9,7,5,4,6];

// const sortedFunc = () => {

//   const min = _.min(arr);
//   const minIndex = arr.indexOf(min);
//   arr.unshift(arr.splice(minIndex, 1)[0]);

//   const subArr = _.slice(arr, 1, Math.floor(arr.length / 2) + 1);
//   const remainingSubArr = _.slice(arr, Math.floor(arr.length / 2) + 1);

//   const sortedSubArr = _.reverse(_.sortBy(subArr, (n) => n));

//   const result = _.concat([min], remainingSubArr, sortedSubArr);
//   console.log(result);
// }

// sortedFunc(arr);