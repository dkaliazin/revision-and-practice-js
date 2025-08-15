// Зміни код, побудувавши ланцюжок прототипів таким чином,
//     щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// const parent = Object.create(ancestor);
// parent.age = 45;
// parent.name = 'Jack'
// console.log('parent:', parent)
// console.log("ancestor.hasOwnProperty('name'):", ancestor.hasOwnProperty('name'))
// const child = Object.create(parent)
// console.log('child:', child)
class User{
    #email;
    constructor(params) {
        this.name = params.name;
        this.surname = params.surname;
        this.#email = params.email;
    }
    getEmail() {
        return this.#email;
    }
}
const jack = new User({name:'Jack', surname:'Simonenko',email:'jack@gmail.com'})
// console.log('jack:', jack)
// console.log('getEmail(jack):', jack.getEmail());
// Об'єкт з функцією для підрахунку суми чисел.
// Змініть у консоль результат виконання функції, якщо a = 3, b = 5.
const obj = { num: 2 };
function add(a, b) {
  return this.num + a + b;
}
// console.log(add.call(obj, 3, 5));
// // 45:00

// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" – "China", "SAMSUNG" – "South Korea".

const tel = {
  regNumber: "AE8345FEDAS",
  brand: "HUAWEI",
  showInfo(country) {
    // 
    if (country.toLowerCase() === 'china') {
      console.log(this.brand)
    } else if (country.toLowerCase() === 'south korea') {
      console.log('SAMSUNG')
    } else {
      console.log(`${country}.${this.regNumber}.${this.brand}`);
    }
  }
}

const tel_2 = {
  regNumber: "A08518FEGHT",
  brand: "SAMSUNG",
}

// tel.showInfo('China');
// tel.showInfo.call(tel_2, 'South Korea')

// 1
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// 2

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
// Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.
// Оголоси наступні методи класу:
// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для
//  перевірки коректності роботи.У консоль будуть виведені результати їх роботи.Будь ласка, нічого там не змінюй.
class Storage{
  #items;
  constructor(items) {
    this.#items= items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove)
  }
}
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// 3
// Напиши клас StringBuilder, який приймає один параметр initialValue — 
// довільний рядок, який записується у приватну властивість value об'єкта, що створюється.
// Оголоси наступні методи класу:
// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str(рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, 
// який викликає цей метод.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. 
// У консоль будуть виведені результати їх роботи.Будь ласка, нічого там не змінюй.
class StringBuilder{
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value + str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// 4
// 1. Створіть об'єкт car з трьома властивостями
// carBrand: "Audi Q3"
// price: 23000
//метод getData() котрий буде логувати рядок :"Audi Q3 за 23000 $"

// 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра
//callback-функцію getData() і логує повідомлення "Ви замовили ${callback()}"

const car = {
  carBrand: "Audi Q3",
  price: 23000,
  getData() {
    return `${this.carBrand} for ${this.price} $`;
  }
}

function makeMessage(callback) {
  return `You have ordered ${callback()}`;
}
// console.log(makeMessage(car.getData.bind(car)))

// 5
// Напишіть код таким чином, щоб об'єкт apples став прототипом для об'єкта fuji.
// Перевірте чи став об'єкт apples прототипом для об'єкта fuji.
// Додайте об'єкту fuji властивість color: 'pink' і виведіть його у консоль.
// Виведіть у консоль значення властивості type для об'єкту fuji.
// Перевірте і виведіть у консоль чи є властивість vitamins власною властивістю об'єкту apples.
// Перевірте і виведіть у консоль чи є властивість cookingMethod власною властивістю об'єкту fuji.

const apples = {
    type: 'fruit',
    cookingMethod: ['jam', 'juice', 'baked', 'dried', 'fresh'],
    vitamins: ['A', 'B1', 'B2', 'E'],
}
const fuji = Object.create(apples);
// console.log(fuji)
// fuji.color = 'pink'
// console.log(fuji.color, fuji)
// console.log(fuji.type);
// console.log(apples.hasOwnProperty('vitamins'))
// console.log(fuji.hasOwnProperty('cookingMethod'))

// 6

//Напиши клас Rectangle який створює об'єкт
//з властивостями height, height
//і методом calculateArea() для підрахунку площі прямокутника.

class Rectangle {
  height;
  width;
  
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calculateArea() {
    return this.height * this.width;
  }
}
// const rect1 = new Rectangle(12, 12)
// console.log(rect1.calculateArea());

// 7

// Створіть клас Car, який має конструктор для зберігання марки та
// року виробництва автомобіля.
// 1. Додайте метод, який обчислює вік автомобіля на основі поточного року
// та року виробництва і виведе в консоль рядок 'Вік автомобіля: age років'
// 2. Додайте перевірку, якщо вік автомобіля більше ніж 5 років, виводимо
// повідомлення 'Автомобіль потребує технічного обслуговування.'
// в іншому випадку - 'Автомобіль не потребує технічного обслуговування зараз.'
// 3. Додайте перевірку, якщо рік виробництва перевищує поточний рік,
// вивести повідомлення 'Помилка: Рік виробництва не може бути пізнішим за поточний рік.'

class Car {
  mark;
  year;
  constructor(mark,year) {
    this.mark = mark;
    this.year = year;   
  }
  getAutoAge(currentYear) {
    const age = currentYear - this.year
    if (age < 0) {
      console.log(`Error:Year is too big`)
    } else {
      console.log(`Auto's age is ${age}`);
        if (age > 5) {
          console.log(`Auto needs service`)
        } else {
          console.log(`Auto is fine.`)
        }
    }
    
  }

}
// const BMW = new Car('BMW', 2004);
// BMW.getAutoAge(2025);
// const Citroen = new Car('Citroen', 2021);
// Citroen.getAutoAge(2025)

// 8
//Напиши клас Client який створює об'єкт
//з властивостями login, email
//Оголоси приватні властивості #login, #email,
//доступ до яких зроби через геттер та сеттер login і email

class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}
// const man = new Client('man', 'man@gmail.com');
// console.log(man.login);
// console.log(man.login = 'newman')

// 9

// Створи клас Phone який створює об'єкт з властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

class Phone {
  #price;
  MAX_PRICE = 40000;
  constructor(price) {
    this.#price = price;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    if (newPrice <= this.MAX_PRICE) {
      this.#price = newPrice
    }
  }
}
// const samsung = new Phone(12000);
// console.log(samsung.price);
// samsung.price = 33000;
// console.log(samsung.price);

// 10
// Створіть клас BankAccount, який має конструктор для зберігання
// номера рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або `Недостатньо коштів на рахунку.`
// deposit - метод для поповнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: balance грн.`

class BankAccount{
  accountNumber;
  balance;
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  withdraw(cacheSum) {
    if (cacheSum <= this.balance) {
      this.balance -= cacheSum;
      console.log(`Знято ${cacheSum} грн. Залишок на рахунку: ${this.balance} грн.`)
    } else {
      console.log(`Недостатньо коштів на рахунку.`)
    }
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Поповнено ${amount} грн. Залишок на рахунку: ${this.balance} грн.`)
  }
  checkBalance() {
    console.log(`Залишок на рахунку: ${this.balance} грн.`)
  }
}const newBankAcc = new BankAccount("5", 222);
newBankAcc.withdraw(222);
newBankAcc.deposit(222);
newBankAcc.checkBalance();