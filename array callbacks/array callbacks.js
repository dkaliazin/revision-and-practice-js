// Функція calculateTotalPrice(orderedItems) приймає один 
// параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, 


// яка зберігається у змінній totalPrice і повертається як результат роботи функції.
function calculateTotalPrice(orderedItems){
    let totalPrice = 0;
    orderedItems.forEach(function (item){
        totalPrice += item;
    })
    return totalPrice;
}
// console.log(calculateTotalPrice([12, 85, 37, 4])) //повертає 138
// calculateTotalPrice([12, 85, 37, 4]);
// console.log('calculateTotalPrice([164, 48, 291]):', calculateTotalPrice([164, 48, 291]))
// //повертає 503
// console.log('calculateTotalPrice([412, 371, 94, 63, 176]):', calculateTotalPrice([412, 371, 94, 63, 176]))
// //повертає 1116

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив,
//     в якому будуть тільки ті елементи оригінального масиву,
//     які більші за значення другого параметра числа value.Якщо таких значень не буде знайдено, функція повертає порожній масив.
function filterArray(numbers, value) {
    const filteredArray = []
    numbers.forEach(function (number) {
        if (number > value) {
            filteredArray.push(number)
        }
    })
    return filteredArray;
}
// console.log('filterArray([1, 2, 3, 4, 5], 3):', filterArray([1, 2, 3, 4, 5], 3))
// console.log('filterArray([1, 2, 3, 4, 5], 4):', filterArray([1, 2, 3, 4, 5], 4))
// console.log('filterArray([1, 2, 3, 4, 5], 5):', filterArray([1, 2, 3, 4, 5], 5))
// console.log('filterArray([12, 24, 8, 41, 76], 38):', filterArray([12, 24, 8, 41, 76], 38))
// console.log('filterArray([12, 24, 8, 41, 76], 20):', filterArray([12, 24, 8, 41, 76], 20))

const getUserEmails = (users)=>users.map(user => user.email);
// console.log(getUserEmails([
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//         gender: "male",
//         age: 24,
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         skills: ["adipisicing", "irure", "velit"],
//         gender: "female",
//         age: 21,
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         skills: ["ex", "culpa", "nostrud"],
//         gender: "male",
//         age: 27,
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         skills: ["non", "amet", "ipsum"],
//         gender: "male",
//         age: 38,
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         skills: ["lorem", "veniam", "culpa"],
//         gender: "female",
//         age: 39,
//     },
// ]))
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в
// іграх, одним гравцем.У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його
// ігровий час.У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх
// гравців.Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.
// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes.
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playTimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playTimes.reduce((previousValue, playTime) => previousValue + playTime, 0)
const averagePlayTime = totalPlayTime / playTimes.length;
// console.log('totalPlayTime(playTimes):', totalPlayTime)
// console.log('averagePlayTime:', averagePlayTime)
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному
// порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.Використовуй ланцюжок методів.
const books = [
    { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38, },
    { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51, },
    {title: "The Dream of a Ridiculous Man",author: "Fyodor Dostoevsky",rating: 7.75,},
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {title: "The Dreams in the Witch House",author: "Howard Lovecraft",rating: 8.67,},
];
const MIN_BOOK_RATING = 8;

const names = books
    .filter(book => book.rating > MIN_BOOK_RATING)
    .map(book => book.title)
    .toSorted((a,b)=> a.localeCompare(b))
// console.log('names:', names)
// 1
// Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users —
// масив об’єктів користувачів.Функція має повертати масив імен усіх користувачів(властивість name) із масиву users.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її викликів.
const getUserNames = (users) => {
    return users.map(user => user.name);
}
// console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// 2
// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName.Друзі кожного користувача
// зберігаються у властивості friends.Якщо користувачів, у яких є такий друг немає, то функція має повернути порожній масив.
const getUsersWithFriend = (users, friendName) => {
    return users
        .filter((user) => user.friends.includes(friendName))
        .map(user => user.name)
}
const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// console.log(getUsersWithFriend(allUsers, "Adrian Cross"));
// // Якщо значення параметра friendName — це рядок "Adrian Cross", функція повертає порожній масив
// 3
// Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.

// Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends).

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
const sortByDescendingFriendCount = (users) => 
{
    return users.toSorted((a,b) => b.friends.length - a.friends.length)
}
// console.log(
//   sortByDescendingFriendCount([
//       {
        
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );
// 4
// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс
// користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//  У консоль будуть виведені результати її роботи.
const getTotalBalanceByGender = (users, gender) => {
    return users
        .filter ((user) => user.gender === gender)
        .reduce((total, user) => {     
            return total + user.balance;
    }, 0)
}
const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// Виконайте сортування масиву назв моніторів у Алфавітному та зворотному порядку.
const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ", "ASER"];
// console.log(monitors.toSorted((a, b) => a.localeCompare(b)))
// console.log(monitors.toSorted((a, b) => b.localeCompare(a)))
// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного імені привітання.
// Функція повертає новий масив ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

const names2 = ['Ivan', 'Maria', 'Anna'];
const sayHi = ((array) => {
    return array.map((arrayElem) => `${arrayElem} привіт!`)
})
console.log(sayHi(names2))