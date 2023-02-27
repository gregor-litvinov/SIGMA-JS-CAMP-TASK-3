/*
Задача6
Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
Приклад:
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]

*/

let fun = function (arr1, arr2) {
  let result = [...arr1]; // [1, 2, 3]

  for (let i = 0; i < arr2.length; i++) {
    // [100, 2, 1, 10]

    const elem = arr2[i];
    let flag = false;

    for (let j = 0; j < arr1.length; j++) {
      if (elem === arr1[j]) {
        flag = true;
      }
    }

    if (!flag) {
      result.push(elem);
    }
  }

  return result;
};

console.log(fun([1, 2, 3], [100, 2, 1, 10]));



//LODASH

// const _ = require("lodash");

// let fun = function (arr1, arr2) {
//   return _.union(arr1, arr2);
// };

// console.log(fun([1, 2, 3], [100, 2, 1, 10]));
