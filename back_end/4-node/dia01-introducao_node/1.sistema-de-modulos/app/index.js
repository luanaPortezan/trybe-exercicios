const temp = require('../mymodules/temp');

console.log(temp.celsiusToFahrenheit(100));
console.log(temp.fahrenheitToCelsius(212));
 
// ou

const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../mymodules/temp');

console.log(celsiusToFahrenheit(100));
console.log(fahrenheitToCelsius(212));