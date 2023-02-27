// Задача7
// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.
// Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}



let obj = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function reverseObject(obj) {
  let reversed = {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      reversed[obj[key]] = key;
    }
  }
  return reversed;
}
console.log(reverseObject(obj));