
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
// console.log(createReversedArray('asd',true, 'as', 5));
