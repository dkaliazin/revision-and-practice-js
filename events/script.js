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
// console.log(listItem)
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
// const inputBox = document.querySelector('#checkbox2')
// console.dir(inputBox)
const checkboxForm = document.querySelector('.checkboxForm')
checkboxForm.addEventListener('click', handleForm);
function handleForm(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  } else {
    event.preventDefault();
    const form = event.currentTarget;
    const allInputs = form.querySelectorAll('input[type="checkbox"]');
    allInputs.forEach((input) => {
      if (input.checked) {
        input.closest('.checkboxWrapper').remove()
      }
    })
  }
}
// 6
// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.
const contactsFilter = document.querySelector('.contactsFilter');
const allContacts = document.querySelectorAll('.contact');
const listContacts = document.querySelector('.contacts')
contactsFilter.addEventListener('input', handleFilter);
function handleFilter(event) {
  const inputValue = event.target.value.toLowerCase();
  const array = [...allContacts].filter((contact) => contact.textContent.toLowerCase().includes(inputValue));
  listContacts.innerHTML = '';
  listContacts.append(...array)
}
// 7
const popularMovies = [
  {
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    country: "USA",
  },
  {
    title: "Joker",
    year: 2019,
    rating: 8.5,
    country: "USA",
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: 8.4,
    country: "USA",
  },
  {
    title: "Parasite",
    year: 2019,
    rating: 8.6,
    country: "South Korea",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    country: "USA",
  },
  {
    title: "La La Land",
    year: 2016,
    rating: 8.0,
    country: "USA",
  },
];
// Є масив об'єктів з популярними фільмами і форма пошуку за назвою фільму.
// 1. Зроби так, щоб при першому завантаженні сторінки користувач
//    бачив весь перелік фільмів (назву, рік виробництва, рейтинг і країну виробник).
//    Для рендеру розмітки використовуємо шаблонні рядки та метод insertAdjacentHTML.
// 2. Реалізуй пошук потрібного фільму за назвою. При кліку на кнопку "Пошук" у
//    списку залишаються тільки ті фільми, котрі мають повне або часткове співпадіння
//    за назвою фільму.
// const htmlMovies = popularMovies.reduce((html, movie) => {
//   html += `
//   <li>
//     <h2>${movie.title}</h2>
//     <p>Year:${movie.year}</p>
//     <p>Rating:${movie.rating}</p>
//     <p>Country:${movie.country}</p>
//   </li>`;
//   return html;
// }, '')
const htmlMoviesArray = popularMovies.map((movie) => {
  return `
  <li>
    <h2>${movie.title}</h2>
    <p>Year:${movie.year}</p>
    <p>Rating:${movie.rating}</p>
    <p>Country:${movie.country}</p>
  </li>`;
});
const searchFilmForm = document.querySelector('#searchForm');
const movieList = document.createElement('ul');
movieList.insertAdjacentHTML('beforeend', htmlMoviesArray.join(''));
document.querySelector('body').append(movieList);
// listener
searchFilmForm.addEventListener('submit', handleSearchSubmit);
// function for listener
function handleSearchSubmit(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.searchInput.value.toLowerCase();
  const filterByValue = popularMovies.filter((movie) => {
    return movie.title.toLocaleLowerCase().includes(inputValue);
  })
  movieList.innerHTML = '';
  const htmlMoviesArray = filterByValue.map((movie) => {
    return `
  <li>
    <h2>${movie.title}</h2>
    <p>Year:${movie.year}</p>
    <p>Rating:${movie.rating}</p>
    <p>Country:${movie.country}</p>
  </li>`;
  });
  movieList.insertAdjacentHTML('beforeend', htmlMoviesArray.join(''));
}