/*
Напишіть функцію, яка отримує масив цілих чисел і повертає масив
середніх значень кожного цілого числа та його послідовника, якщо він є.
Приклад:
averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]

*/

let fun = function (arr) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push((arr[i] + arr[i + 1]) / 2);
  }

  return result;
};

console.log(fun([1, 3, 5, 1, -10]));



//LODASH

// const _ = require("lodash");

// let fun = function (arr) {
//   return _.map(_.range(arr.length - 1), function (i) {
//     return (arr[i] + arr[i + 1]) / 2;
//   });
// };
// console.log(fun([1, 3, 5, 1, -10]));