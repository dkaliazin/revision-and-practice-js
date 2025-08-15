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
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
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
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="