// Задача12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.


function splitArray(a) {

  a.sort((x, y) => x - y);

  const n = a.length / 2;
  const b = [];
  const c = [];

  for (let i = 0; i < n; i++) {

    const j = 2 * i;
    const x = a[j];
    const y = a[j + 1];
    const smaller = x < y ? x : y;
    const larger = x < y ? y : x;


    b.push(smaller);
    c.push(larger);
  }

  return { b, c };
}



//LODASH

// const _ = require('lodash');

// function splitArray(a) {
//   const sortedArray = _.sortBy(a);

//   const n = sortedArray.length / 2;
//   const b = [];
//   const c = [];

//   for (let i = 0; i < n; i++) {
//     const j = 2 * i;
//     const x = sortedArray[j];
//     const y = sortedArray[j + 1];
//     const smaller = _.min([x, y]);
//     const larger = _.max([x, y]);

//     b.push(smaller);
//     c.push(larger);
//   }

//   return { b, c };
// }


// const arr = [4, 2, 7, 5, 1, 8, 3, 6];
// const result = splitArray(arr);
// console.log(result.b); // [1, 2, 3, 4]
// console.log(result.c); // [5, 6, 7, 8]

