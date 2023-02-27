// Задача16
// Створити пароль для користувача. Вимоги: довжина від 6 до 20
// символів повинен бути рівно один символ підкреслення, хоча б дві великі
// літери, не більше 5 цифр, будь-які дві цифри поспіль неприпустимі.

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";

function generateUserPassword(uppercase, lowercase, numbers, symbols) {
  let password = "";
  let characterSet = "";

  const passwordLength = Math.floor(Math.random() * 3) + 6;

  password += "_";

  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));

  let numCount = 0;
  for (let i = 0; i < passwordLength - 4; i++) {
    const randomChar = Math.floor(Math.random() * 3);
    if (
      randomChar === 0 &&
      numCount < 5 &&
      password.charAt(password.length - 1) !==
        numbers.charAt(Math.floor(Math.random() * numbers.length))
    ) {
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      numCount++;
    } else if (randomChar === 1) {
      password += uppercase.charAt(
        Math.floor(Math.random() * uppercase.length)
      );
    } else {
      characterSet = lowercase + uppercase + numbers + symbols;
      password += characterSet.charAt(
        Math.floor(Math.random() * characterSet.length)
      );
      numCount = 0;
    }
  }

  return password;
}

console.log(generateUserPassword(uppercase, lowercase, numbers, symbols));
