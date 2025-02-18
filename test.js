const { extractPriceAndCurrency } = require("./index");

console.log(extractPriceAndCurrency("$1233.54 CHF"));  // { price: 1233.54, currency: "CHF" }
console.log(extractPriceAndCurrency("€1.234,99"));    // { price: 1234.99, currency: "€" }
console.log(extractPriceAndCurrency("$1,233.54"));    // { price: 1234.99, currency: "$" }
console.log(extractPriceAndCurrency("JPY 1000"));     // { price: 1000, currency: "JPY" }
console.log(extractPriceAndCurrency("1000 GBP"));     // { price: 1000, currency: "GBP" }
console.log(extractPriceAndCurrency("No price here")); // { price: 0, currency: null }
