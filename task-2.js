
// ___________________________________________________________
// Задача2
// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.


let string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
let number;

let funFindLength = function (string, number) {
  const arr = string.split(" ");
  return arr.filter((it) => it.length > number);
};

console.log(funFindLength(string, 4));
