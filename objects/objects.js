// Функція countTotalSalary(salaries) приймає об'єкт зарплат
//     (salaries) в якості параметра.Кожна властивість об'єкта salaries — це ключ, що містить
//      ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.
function countTotalSalary(salaries) {
    const salariesKeys = Object.keys(salaries);
    const salariesValues = Object.values(salaries);
    let sum = 0;
    for (const value of salariesValues) {
        sum += value;
    }
    return sum;
}
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
function getProductPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  for (const key of products){
    if(key.name === productName){
      return key.price;
    } 
    }
    return null;
}
// console.log(getProductPrice("Radar")) //повертає 1300.
// console.log(getProductPrice("Grip")) //повертає 1200.
// console.log(getProductPrice("Scanner")) //повертає 2700.
// console.log(getProductPrice("Droid")) //повертає 400.
// console.log(getProductPrice("Engine")) //повертає null.
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const array = [];
    for (const object of products) {
        if(object[propName]){
      array.push(object[propName])
        } else{
            return [];
        }
  }
  return array;
}
// console.log(getAllPropValues("name"));

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
    for (const object of products) {
        if (object.name === productName) {
            return object.price * object.quantity;
       } 
    }
    return `Product ${productName} not found!`;
}
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// Виклик calculateTotalPrice("Blaster") повертає "Product Blaster not found!"
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100
const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Stone skin", price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
            }
        }
    }
};
// Після першого виклику методу
// atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
//     у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 }]
// Після другого виклику методу atTheOldToad.updatePotionName("Speed potion", "Polymorth"),
//     у властивості potions буде масив[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 }]
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"))
// console.log(atTheOldToad.potions)
// console.log(atTheOldToad.getPotions())
function getExtremeScores(scores) {
  extreme ={ worst:0, best:0};
    extreme.best = Math.max(...scores);
    extreme.worst = Math.min(...scores);
return extreme;
}
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]))
// 1
// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.Тобто порахувати загальну кількість товарів в
// об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.
function isEnoughCapacity(products, containerSize) {
    let sumOfValues = 0;
    const arrayOfValues = (Object.values(products))
    for (const value of arrayOfValues) {
        sumOfValues += value;
    }
    if (sumOfValues <= containerSize) {
        return true;
    } else {
        return false
    }
}
// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false
// 2
// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій,
//     які спортсмен споживав протягом тижня.Функція очікує один параметр: days — масив об’єктів.Кожен
// об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.

function calcAverageCalories(days) {
    let sumOfCals = 0;
    let counter = 0;
    for (const key of days) {
            sumOfCals += key['calories'];
            counter++;
        
    }
    if (sumOfCals === 0) {
        return 0;
    }
    const averageCals = sumOfCals / counter;
    return averageCals;
}
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0
// 3
// Об’єкт profile описує профіль користувача на ігровій платформі.
//  У його властивостях зберігається ім’я профілю username та кількість активних годин playTime, проведених у грі.
const profile = {
    username: "Jacob",
    playTime: 300,
    getInfo() {
        return `${this.username} has ${this.playTime} active hours`
    },
    changeUsername(chancheName) {
        this.username = chancheName
    },
    updatePlayTime(updatedTime) {
        this.playTime +=updatedTime
    }
};
// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

const user = {
  name: 'Igor',
  car: 'Mercedes',
  carColor: 'black'
}
const checkKeyInObject = (obj, key) => { 
    return obj.key === key
}
// console.log('', checkKeyInObject(user, 'babe'))

// Є об'єкт, у якому зберігаються обрані товари у кошик.
// Напишіть код для визначення загальної суми замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

const cart = {
  apple: 50,
  banana: 30,
  orange: 40,
};
const totalSum = (obj) => {
    return Object.values(obj).reduce((sum,value) =>{return sum+value},0)
}
// console.log('totalSum(cart):', totalSum(cart))


// Додати метод getInfo в об'єкт user, який повертатиме інформацію 
// про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`

const user2 = {
name: 'Peter',
surname: 'Parker',
age: 22,
position: 'spider-man',

};
user2.getInfo = function () {
    return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}`;
}
//  console.log(user2.getInfo())
// Створіть об'єкт calculator із трьома методами:
// read(a, b) – приймає два аргументи та зберігає їх як властивості об'єкта
// sum() – повертає суму збережених значень
// mult() – перемножує збережені значення та повертає результат
const calculator = {
  read(a, b) {
    this.keyA = a
    this.keyB = b
  }, 
  sum() {
    return this.keyA + this.keyB
  },
  mult() {
    return this.keyA * this.keyB
  }
}
// calculator.read(1, 2);
// console.log('calculator.read(1,2):',calculator.sum(), calculator)