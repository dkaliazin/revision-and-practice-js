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
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
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