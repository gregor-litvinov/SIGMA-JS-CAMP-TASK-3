/*

Задача5

1.
Створіть функцію, яка приймає рядок і повертає кількість (кількість)
голосних, які у ній.
Приклад:
countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1

*/


let str = "Celebration";

function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  string = string.toLowerCase();
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels(str));



// 2.
// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
// Приклад:
// removeABC("This might be a bit hard") ➞ "This might e it hrd"
// removeABC("hello world!") ➞ null
// Задача6


let remove = "This might be a bit hard";

function removeABC(str) {
  if (!str.match(/[abc]/)) {
    return null;
  }
  return str.replace(/[abc]/g, "");
}
console.log(removeABC(remove));
