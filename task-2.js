
// ___________________________________________________________
// Задача2
// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.


const string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
let number;

let funFindLength = function (string, number) {
  const arr = string.split(" ");
  return arr.filter((it) => it.length > number);
};

console.log(funFindLength(string, 4));




//LODASH


// const _ = require("lodash");

// const string =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// const funFindLength = function (string, number) {
//   const arr = _.words(string); // используем функцию words для разбиения строки на массив слов
//   return _.filter(arr, (it) => it.length > number); // используем функцию filter для фильтрации массива по условию длины слова
// };

// console.log(funFindLength(string, 4));
