
function calculateTotalPrice(order) { 
    let sum = 0; 
    for (let i = 0; i <= order.length - 1; i += 1){
        sum += order[i];
        
    }
    return sum;
}
// console.log(calculateTotalPrice([1, 2, 3]))

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.Якщо жодного
// парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).Використовуй цикл for.
function getEvenNumbersWhile(start, end) {
    let i = start; 
    const array = [];
    while (i <= end) {
        let checkEven = i % 2; 
        if (checkEven === 0) {
            array.push(i);
        }
        i += 1;
    }
    return array;
}
// console.log(getEvenNumbersWhile(2, 5));
// console.log(getEvenNumbersWhile(5, 12));
// console.log(getEvenNumbersWhile(-10, 12));
// console.log(getEvenNumbersWhile(-10, 12.2));
function getEvenNumbers(start, end) {
    const array = [];
    for (let i = start; i <= end; i += 1){
        let checkEven = i % 2;
        if (checkEven === 0) {
            array.push(i)
        }
    }
    return array;
}
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(-20, -10));
// console.log(getEvenNumbers(12, 12));

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру,
// тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві["apple", "plum", "pear"].

function checkStorage(storage, item) {
    const storageLowerCase = [];
    for (let i = 0; i < storage.length; i +=1){
        storageLowerCase.push(storage[i].toLowerCase());
        
    }
    if (storageLowerCase.includes(item.toLowerCase())) {
            return `${item} is available to order!`
        } else { 
            return `Sorry. Out of stock.`
        }
}
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["APPLE", "plUM", "PeaR"], "Plum"));
// ___________________________________________
// Функція createReversedArray() може приймати довільну кількість аргументів.Доповни код функції так,
// щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.Тобто, при
// виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].
// Використовуй цикл або метод масиву toReversed(),
// який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.
function createReversedArray(...rest) {
    const reversedArray = [];
    for (let i = rest.length-1; i >= 0; i -= 1){
        reversedArray.push(rest[i]);
    }
    return (reversedArray);
}
// console.log(createReversedArray(1, 2, 3, 4, 5));
// ________________________________________________
// Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказаним значенням.
// Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].
function fillArray(arrayLength, fill) {
    const array = [];
    // array.length = arrayLength;
    for (let i = 0; i < arrayLength; i++){
        // array[i] = fill;
        array.push(fill);
    }
    return array;
} 
// console.log(fillArray(3,'a'));
// Написати функцію, котра створить новий масив в якому
// не буде значень, які приводяться до false
function newArrayNoFalse(...rest) {
    const array = rest;
    const arrayNoFalse = [];
    // for (let i = 0; i <= array.length; i++){
    //     if (array[i]) {
    //         arrayNoFalse.push(array[i]);
    //     }
    for (const item of array) {
        if (item) {
            arrayNoFalse.push(item);
        }
    }
    
    return arrayNoFalse;
}
// console.log(newArrayNoFalse(1,23,34,5,6,0,undefined,null,'',' ',NaN,false,-0,0n))
// 1
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
function slugigy(title) {
    if (typeof (title) === 'string') {
        const titleSplit = title.split(' ').map(item => item.toLowerCase());
        return titleSplit.join('-');
    } else {
        return `wrong type`;
    }
}
// console.log(slugigy('Functions of the site'))
// 2
// Напиши функцію під назвою makeArray, яка приймає три параметри:
// firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати
// новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray
// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.
function makeArray(firstArray, secondArray, maxLength) {
    const mergedArrays = firstArray.concat(secondArray);
    if (mergedArrays.length >= maxLength) {
        return mergedArrays.slice(0, maxLength)
    } else if (mergedArrays<=maxLength){
        return mergedArrays;
    } else {
        return 'Error';
    }
}
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// 3
// Напиши функцію filterArray(numbers, value),
//     яка приймає масив чисел(numbers) та значення(value)
//     як параметри.Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.
// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.
function filterArray(numbers, value) {
    const biggerValue = [];
    for (const number of numbers) {
        number> value ? biggerValue.push(number):""
    }
    return biggerValue;
}
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Напиши скрипт, який порівняє два масива і виведе у консоль результат:
// true - якщо всі елементи однакові і false - в іншому випадку
function compareArray(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (const item of firstArray) {
        if (!secondArray.includes(item)) {
            return false;
        } 
    }
    return true;
}
// console.log(compareArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))
// console.log(compareArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

// Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.
function calculateAverage(...rest) {
    let sum = 0;
    let counter = 0;
    for (const item of rest) {
        if (typeof (item) !== 'number') {
            return `One of ur element:"${item}" is not a number`;
        }
        sum += item;     
        counter++;
    }
    return `average is ${sum / counter}`;
}
// console.log(calculateAverage(1, 3, '2',));
// Напишіть функцію findMaxNumber, яка приймає масив чисел і повертає
// максимальне число у цьому масиві. Використовуйте цикл for...of для
// ітерації через елементи масиву.
function findMaxNumber(array) {
    let max = array[0];
    for (const item of array) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}
// console.log(findMaxNumber([1, 2, 3, 4, 5]))
// Напишіть функцію removeWordsStartingWith(str, letter), яка приймає рядок та літеру.
// Функція повинна розбити рядок на слова, видалити всі слова, які починаються
// на задану літеру, та повернути рядок, в якому залишилися слова, розділені пробілами.
function removeWordsStartingWith(str, letter) {
    const array = str.trim().split((/\s+/));
    const filterArray = array.filter(item => item[0] !== letter)
    return filterArray.join(' ');
}
// console.log(removeWordsStartingWith('str asd 123 s s s ', 's'))console.log(removeWordsStartingWith('str asd\n123          asd asd     asd  s s s ', 's'))
// 