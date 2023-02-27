/*
Напишіть функцію, яка повертає true, якщо перший переданий
аргумент (рядок) закінчується другим аргументом (також рядком).
Приклад:
solution('abc', 'bc') => true
solution('abc', 'd') => false
*/

let str = 'deabcde';
let str2 = "de";

let fun = function(str, str2) {
  const lens = str2.length; // 2
  const strArr = str.split(""); // [d e a b c d e]
  const str2Arr = str2.split("").reverse(); // [e d]
  let result = true

  for (let i = 0; i < lens; i++) {
    if (str2Arr[i] !== strArr[strArr.length - 1 - i]) {
      result = false
    }
  }

  return result
}

console.log(fun(str, str2))




//LODASH


// const _ = require("lodash");

// const fun = (str, str2) => {
//   const strArr = _.toArray(str);
//   const str2Arr = _.reverse(_.toArray(str2));
//   return _.isEqual(_.takeRight(strArr, str2Arr.length), str2Arr);
// };

