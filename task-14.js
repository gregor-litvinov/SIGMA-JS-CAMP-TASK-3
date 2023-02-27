// Задача14
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
// що відкриваються і закриваються, тобто можна встановити взаємно
// однозначну відповідність відкриваючих і закриваючих дужок, причому
// відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
// дотримується вивести цей текст на html – сторінку і заборонити користувачу
// копіювати цей текст та перегляд коду сторінки.

// text = "((abc)def(ghi(jkl)))";// true
// text2 = "((abc)def(ghi(jkl)))(";// false


const input = document.getElementById("input-text");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

checkButton.addEventListener("click", function () {
  const text = input.value;
  if (checkParenthesis(text)) {

    result.innerHTML = `Введенный текст: ${text}`;

    result.setAttribute("onselectstart", "return false");
    result.style.userSelect = "none";
  } else {
    result.textContent = "Ошибка в расстановке скобок";
  }
});

function checkParenthesis(text) {
  const stack = [];
  const opening = "(";
  const closing = ")";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === opening) {
      stack.push(opening);
    } else if (text[i] === closing) {
      if (stack.length === 0 || stack.pop() !== opening) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const text = " ";
console.log(checkParenthesis(text));