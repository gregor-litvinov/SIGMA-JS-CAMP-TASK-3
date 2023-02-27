/*


Задача1
Ви повинні реалізувати функцію, яка повертає різницю між
найбільшим та найменшим значенням у списку , отриманому як аргумент
функції. Масив, який отримує функція як аргумент, може містити позитивні
та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
Спочатку масив буде поданий у невідсортованому вигляді.
arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
arr([16]) => 0
*/

const arr = [-1, 2, 3, -4];

let fun = function (a) {
  let min = a[0];
  let max = a[0];

  if (a.length <= 1) {
    return 0;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }

    if (a[i] > max) {
      max = a[i];
    }
  }

  return max - min;
};

console.log(fun(arr));





// LODASH

// const _ = require("lodash");

// const arr = [-1, 2, 3, -4];

// const fun = function (a) {
//   if (a.length <= 1) {
//     return 0;
//   }

//   const min = _.min(a);
//   const max = _.max(a);

//   return max - min;
// };

// console.log(fun(arr));
