// Задача15
// Запросіть користувача ввести якусь фразу. Відобразіть кожне слово у
// вигляді списку ul li. Також відобразіть перше слово UPPERCASE, а останні 2
// з маленької. Знайдіть усі літери "а" їх кількість виведіть у alert вікно. Після
// закриття alert - реалізувати скрипт, який через 5 хвилин бездіяльності
// користувача (нічого не натискається, нічого не виділяється, не рухається
// прогрес-бар) висвітлює повідомлення "Ви ще тут?" Якщо так, користувач
// залишається на сторінці, якщо ні сторінка закривається.




		const input = document.createElement("input");
    const ul = document.createElement("ul");
    document.body.appendChild(input);
    document.body.appendChild(ul);
    let timeoutId;

    function showConfirmation() {
      const result = confirm("Ви ще тут?");
      if (result) {
      } else {
        window.close();
      }
    }

    let alertTimeoutId;
    function showAlert() {

      setTimeout(() => {
        const aList = ul.querySelectorAll("li");
        let aCount = 0;
        aList.forEach((li) => {
          const words = li.textContent.split(" ");
          words.forEach((word) => {
            aCount += word.split("a").length - 1;
          });
        });
        alert(`Количество букв 'a' в списке: ${aCount}`);
        alertTimeoutId = setTimeout(showConfirmation, 15000);
      }, 2000);
    }

    input.addEventListener("input", () => {
      clearTimeout(timeoutId);
      clearTimeout(alertTimeoutId);
      timeoutId = setTimeout(() => {

        const words = input.value.split(" ");
        const len = words.length;
        words.forEach((word, index) => {

          const li = document.createElement("li");
          if (index === 0) {
            li.textContent = word.toUpperCase();
          } else if (index === len - 1 || index === len - 2) {

            li.textContent = word.toLowerCase();
          } else {
            li.textContent = word;
          }
          ul.appendChild(li);
        });
        input.value = ""; 

        showAlert();
      }, 1000);
    });

    alertTimeoutId = setTimeout(showConfirmation, 15000);