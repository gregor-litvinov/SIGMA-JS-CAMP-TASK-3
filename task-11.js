// Задача11
// Дано два рядки. Чи можна перший рядок отримати з другим циклічним
// зрушенням?


const srting1 = "hello"; //"hello"
const srting2 = "lohel"; //"lohle"


function Rotation(firstStr, secStr) {
  if (firstStr.length !== secStr.length) {
    return false;
  }

  const concatstr = secStr + secStr;
  return concatstr.includes(firstStr);
}

console.log(Rotation(srting1, srting2)); // true
console.log(Rotation(srting1, srting2)); // false





//LODASH


// const _ = require("lodash");
// const srting1 = "hello"; //"hello"
// const srting2 = "lohel"; //"lohle"

// function Rotation(firstStr, secStr) {
//   if (firstStr.length !== secStr.length) {
//     return false;
//   }

//   const concatstr = secStr + secStr;
//   return _.includes(concatstr, firstStr);
// }

// console.log(Rotation(srting1, srting2)); // true
// console.log(Rotation(srting1, srting2)); // false

