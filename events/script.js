// Створи галерею з можливістю кліку по її
// елементах і перегляду повнорозмірного
//  зображення в модальному вікні. 
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');
const itemList = images.reduce((acc, item) => {
    return acc +
   `<li>
        
            <img
            src ="${item.preview}" 
            alt="${item.description}"
            data-source="${item.original}"/>
            <h2>${item.description}</h2>

        
    </li>
    `
}, '')
gallery.insertAdjacentHTML('beforeend', itemList);
gallery.addEventListener('click', onClickList);
function onClickList(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    // console.log(event.target)
  const largeImg = event.target.dataset.source;
  const alt = event.target.alt;
  // console.log(alt)
    const instance = basicLightbox.create(`
            <img
            src ="${largeImg}"
            alt="${alt}"
            >`);
    instance.show()
}
// 1
//  При натисканні на кнопку "SHOW ME", потрібно в консоль
//      вивести значення, яке будемо вводити в інпут.
const alertButton = document.querySelector('#alertButton')
alertButton.addEventListener('click', buttonHandler);
function buttonHandler (event){
  const alertInput = document.querySelector('#alertInput');
  console.log(alertInput.value);
}
// 2
// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпуті відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати".
// При повторному натисканні знову будемо відображати символи,
// а назва кнопки зміниться на "Приховати".
const pswBtn = document.querySelector('#passwordButton');
const pswInput = document.querySelector('#passwordInput');
pswBtn.addEventListener('click', handleButton);
function handleButton(event) {
  if (pswInput.type === 'text') {
    pswBtn.textContent = 'Hide'
    pswInput.type = 'password';
  } else if (pswInput.type === 'password') {
    pswBtn.textContent = 'Show'
    pswInput.type = 'text';
  }
}
// 3
// При кліку на кнопку "Подвоїти" збільшувати значення 
//      в кожному елементі списку в два рази.
const doubleBtn = document.querySelector('#double');
const listItem = document.querySelectorAll('.listItem')
console.log(listItem)
doubleBtn.addEventListener('click', handleDoubleBtn);
function handleDoubleBtn(event) {
  listItem.forEach((item) => {
    let typeToInt = parseInt(item.textContent)
    typeToInt *= 2;
    item.textContent = typeToInt;
  })
}
// 4
// <!-- Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів. -->
// <!-- Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів. -->
const box = document.querySelector('#box');
box.style.backgroundColor = 'red';
const descreaseBox = document.querySelector('#decrease-box');
const increaseBox = document.querySelector('#increase-box');
const doubleBox = document.querySelector('#double-box');
descreaseBox.addEventListener('click', handleDeacrease);
  let setHeight = 0;
  let setWidth = 0;
function handleDeacrease(event) {
  if (setHeight < 10 && setWidth < 10) { 
    return;
  } else {
    setHeight -= 10;
    setWidth -= 10;
  }
  box.style.width = setWidth + 'px';
  box.style.height = setHeight + 'px';
}
increaseBox.addEventListener('click', handleIncrease);
function handleIncrease(event) {
    setHeight += 10;
  setWidth += 10;
  if (box.offsetHeight === 0 || box.offsetWidth === 0) {
    box.style.width = `10px`;
  box.style.height = `10px`;
  } else {
    box.style.width = `${box.offsetWidth +10}px`;
  box.style.height = `${box.offsetHeight +10}px`;
  }
  
}
doubleBox.addEventListener('click', handleDouble);
function handleDouble(event) {
  setHeight *= 2;
  setWidth *= 2;
  box.style.width = setWidth + 'px';
  box.style.height = setHeight + 'px';
}
// 5
/* При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи. */