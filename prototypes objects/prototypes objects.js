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

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]