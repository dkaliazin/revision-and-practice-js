function findNumber(start, end, divisor) {
   for (let i=start; i<=end; i+=1){
     if (i % divisor === 0) {
         return i;
     }
   }
}
// console.log(findNumber(2, 6, 5));
// 1
function makeTransaction(quantity, pricePerDroid, customerCreds) {
  if (quantity * pricePerDroid <= customerCreds) {
      return `You ordered ${quantity} droids worth ${pricePerDroid} credits`
  } else {
    return `Insufficient funds!`
    }
}
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
// 2
function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return `${message.slice(0,maxLength)}...`
  }
}
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// 3
function checkForSpam(message) {
  const messageLowerCase = message.toLowerCase();
  if (messageLowerCase.includes('spam') || messageLowerCase.includes('sale')) {
    return true;
  } else {
    return false;
  }
}
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// 4
function getShippingCost(country) {
  const priceChina = 100;
  const priceChile = 250; 
  const priceAustralia = 170;
  const priceJamaica = 120;
  const countryLowerCase = country.toLowerCase().trim();
  switch (countryLowerCase) {
    case 'australia':{
      return `Shipping to ${country.trim()} will cost ${priceAustralia} credits`;
      break;
    }
    case 'china': {
      return `Shipping to ${country.trim()} will cost ${priceChina} credits`;
      break;
    }
    case 'chile': {
      return `Shipping to ${country.trim()} will cost ${priceChile} credits`;
      break;
    }
      case 'jamaica': {
      return `Shipping to ${country.trim()} will cost ${priceJamaica} credits`;
      break;
    }
    default:{return "Sorry, there is no delivery to your country";} 
  }
}
// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
// ________
// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками (включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - булЬ (вказує чи є покупець студентом);
// isPensioner - булЬ (вказує чи є покупець пенсіонером);
function hasDiscount(age, isStudent, isPensioner) {
    if (age <= 18 && age >= 12) {
        return true;
    } else if (isStudent) {
        return true;
    } else if (isPensioner) {
        return true;
    } else {
        return false;
    }
}
function hasDiscountTernary(age, isStudent, isPensioner) {
  return isPensioner || isStudent || (age >= 12 && age <= 18);
}
// console.log(hasDiscount(12, false, false));
// console.log(hasDiscount(129, true, false));
// console.log(hasDiscount(129, false, true));
// console.log(hasDiscountTernary(12, false, false));
// console.log(hasDiscountTernary(129, true, false));
// console.log(hasDiscountTernary(129, false, true));
// ____
// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилось 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);
function canRegisterOnSite(age, hasAcceptedTerms) {
  if (hasAcceptedTerms === true && age >= 13) {
    return true;
  } else {
    return false;
  }
}
// console.log(canRegisterOnSite(13, false));
// console.log(canRegisterOnSite(12, false));
// console.log(canRegisterOnSite(13, true));
// console.log(canRegisterOnSite(123, true));
//__
// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
function checkString(value) {
  if (typeof (value) === 'string') {
    const checkOnDollars = value.includes('$') ? "it's string and includes $" : "it's string and doesnt include $"
    return checkOnDollars;
  } else {
    return 'incorrect type of data';
  }
}
// console.log(checkString('$'));
// console.log(checkString(''));
// console.log(checkString('ads'));
// console.log(checkString(1));
// console.log(checkString(false));
// ___
// Оголоси функцію isEvenNumber(number), яка перевіряє
// (за допомогою тернарного оператора) чи отримане значення
// є парним числом і виводить відповідне повідомлення
// "Число парне" або "Число непарне"
// Якщо функція отримує не число вивести повідомлення
// "Невалідне значення"
// function isEvenNumber(number) {
//   const checkEven = number % 2;
//   if (typeof (number) === 'number' && checkEven === 0) {
//     return 'Number is even';
//   } else if (typeof (number) === 'number') {
//     return 'Number is not even'
//   } else {
//      return "Incorrect type of data"
//   }
// }
// console.log(isEvenNumber(1));
// console.log(isEvenNumber(2))
// console.log(isEvenNumber(4))
// console.log(isEvenNumber('1'))
// console.log(isEvenNumber('123'))
function isEvenNumber(number) {
  const transToNumber = Number(parseFloat(number));
  const checkEven = transToNumber % 2; 
  if (checkEven === 0) {
    return `Ur number ${transToNumber} is even`
  } else if (typeof(transToNumber) === 'number'&& !isNaN(transToNumber)){
    return `Ur number ${transToNumber} is not even`
  } else {
    return `${transToNumber} is a number?`
  }
}
// console.log(isEvenNumber('123'))
// console.log(isEvenNumber(true))
// console.log(isEvenNumber(false))
// console.log(isEvenNumber(12))
// console.log(isEvenNumber('12.12'))



// Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню

function fromMinToMax(number1, number2) {
  let max = 0;
  let min = 0;
  if (number1 > number2) {
    max = Number(parseInt(number1));
    min = Number(parseInt(number2));
  } else if (number2 > number1) {
    max = number2;
    min = number1;
  } else if (number2 === number1) {
    return console.log(`${number1}, ${number2} are equal.`)
  } else {
    return console.log(`Is ${number1} or ${number2} a number? Maybe you have typeError`)
  }

  for (let i = min; i <= max; i++){
    console.log(i)
  }
}
// fromMinToMax(1, 5);
// fromMinToMax(10, 10);
// fromMinToMax('asd', 3)
// __
// Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`

function sumOfAllNumber(number1, number2) {
  let max = 0;
  let min = 0;
  let sum = 0;
  let sumOfThreeAndFive = 0;
  if (number1 > number2) {
    max = number1;
    min = number2;
  } else if (number2 > number1) {
    max = number2;
    min = number1;
  } else if(number1===number2){
    max = number1;
    min = max;
  }
  for (let i = 0; min <= max; min++){
    sum += min;
    if (min % 3 === 0 || min % 5 === 0) {
      sumOfThreeAndFive +=min
    }
  }
  return `sum of all numbers: ${sum}. sum of numbers that are multiple of 3 or 5: ${sumOfThreeAndFive}`;
}
// sumOfAllNumber(1, 15);

