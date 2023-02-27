// Задача13
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
// Якщо кількість символів в отриманому рядку буде більшої ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога.


const input = "The quick jumps over  lazy dog. email@example.com https://example.com";


function transformString(inputString) {
  const words = inputString.split(" ");
  const transformedWords = [];

  words.forEach((word, index) => {
    let transformedWord = word.toLowerCase();

    if (index === 0) {
      transformedWord =
        transformedWord.charAt(0).toUpperCase() + transformedWord.slice(1);
    } else if (word.match(/^https?:\/\/.+/i)) {
      transformedWord = "[посилання заборонено]";
    } else if (word.match(/^\w+@\w+\.\w+$/i)) {
      transformedWord = "[контакти заборонені]";
    } else if (word.length > 3 && word.match(/^\d+$/)) {
      transformedWord = "";
    } else if (word.length <= 3) {
      transformedWord = "";
    }

    transformedWords.push(transformedWord);
  });

  const outputString = transformedWords.filter(Boolean).join(" ");

  if (outputString.length > inputString.length) {
    setInterval(() => {
      const response = confirm("Чи потрібна нам допомога?");
    }, 5000);
  }

  return outputString;
}

const output = transformString(input);
console.log(output);

