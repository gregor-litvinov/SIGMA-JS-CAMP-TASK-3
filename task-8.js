// Задача8
// Івана Іванова обікрали. Але його речі було застраховано на певну суму.
// Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.


const obj = { skate: 10, painting: 20 };

function calculate(items, limit) {

  const totalValue = Object.values(items).reduce((acc, val) => acc + val, 0);

  if (totalValue <= limit) {
    return 0;
  }

  return totalValue - limit;
}

console.log(calculate(obj, 19));