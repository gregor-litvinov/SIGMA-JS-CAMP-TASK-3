// Задача9
// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
// (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
// шириною (w) та висотою (h). Виміри вводить користувач через форму.


let a = 1;
let b = 1;
let c = 1;
let w = 1;
let h = 1;

function brick(a, b, c, w, h) {
  if ((a <= w && b <= h) || (a <= h && b <= w)) {
    return true;
  } else if ((a <= w && c <= h) || (a <= h && c <= w)) {
    return true;
  } else if ((b <= w && c <= h) || (b <= h && c <= w)) {
    return true;
  } else {
    return false;
  }
}

console.log(brick(a, b, c, w, h));
