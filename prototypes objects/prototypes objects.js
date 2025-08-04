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