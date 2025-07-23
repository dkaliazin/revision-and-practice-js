// 1
// Что будет отображено в консоли при выполнении следующего кода: 
var theSym = Symbol("abc");
// console.log( theSym );
// console.log(`${theSym}`);
// __
// 2
const a = {};
const b = {};

const c = {
  d: 21,
  e: 34,
};

c[a] = "Hello world!";
//  console.log(c)
c[b] = 21;
//  console.log(c)
// 3
// const numbers = [5, 10, 25, 15];

// const newNumbers = numbers.reduce((acc, number) => {
//   console.log("acc", acc);
//   console.log("number", number);
// });

// console.log(newNumbers);