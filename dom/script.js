// 1
// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

const items = document.querySelectorAll('#categories .item');
let i = 0;
items.forEach((item) => {
    const header = item.querySelector('h2');
    const numberLi = item.querySelectorAll('li');
    if (header.textContent === 'Animals') {
        console.log(`Numbers of animals:${numberLi.length}`)
    } else if (header.textContent === 'Products') {
        console.log(`Numbers of products:${numberLi.length}`)
    } else if (header.textContent === 'Technologies') {
        console.log(`Numbers of tecnologies:${numberLi.length}`)
    }
    i += 1;
})
console.log(`Number of categories:${i}`);
// 2
// Напиши скрипт для створення галереї
// зображень на основі масиву даних.
// HTML містить список ul.gallery.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];
const gallery = document.querySelector('.gallery');
const arrayItems = [];
for (i = 0; i < images.length; i++){
    let number = 0;
    const item = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('item')
    img.src = images[i].url;
    img.alt = images[i].alt;
    item.appendChild(img);
    arrayItems.push(item);
}
gallery.append(...arrayItems)
// console.log(...arrayItems)
// 3
// Напиши скрипт, який під час набору тексту в 
// інпуті input#name - input(подія input)
//  підставляє його поточне значення в span#name - output як
// ім’я для привітання.Обов’язково очищай значення в інпуті по 
// краях від пробілів.Якщо інпут порожній або містить лише пробіли,
//     то замість імені у спан має підставлятися рядок "Anonymous".
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output')
inputName.addEventListener('keyup', event => {
    outputName.textContent = inputName.value.trim();
    if (inputName.value.trim() === '') {
        outputName.textContent = 'Anonymous'
    }
})
// 4
// Напиши скрипт управління формою логіна.
// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням 
// про те, що 'All form fields must be filled in'.Не додавай на інпути атрибут
// required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів
// в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — 
// відповідні значення цих інпутів, очищені від пробілів по краях.
// Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і 
// очисти значення полів форми методом reset.

const loginForm= document.querySelector('.login-form');
function handleButton(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email.trim() === '' || password.trim() === '') {
        alert('All form fields must be filled in')
    } else {
        console.log(`email:${email} , password:${password}`)
    }

}
loginForm.addEventListener('submit', handleButton)
