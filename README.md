# price-parser-js

A simple library to extract prices and currencies from text.

## Installation

Install using npm:

```sh
npm install price-parser-js

```
## Usage 
```
const { extractPriceAndCurrency } = require("price-parser");

const result = extractPriceAndCurrency("$1233.54 CHF");
console.log(result); // { price: 1233.54, currency: "CHF" }
```

## API
```
extractPriceAndCurrency(priceText)
// Parses a string to extract the price and currency.
```

### Parameters
```
priceText (string) - The input text containing a price and currency.
```
Returns
```
{ price: number, currency: string | null }
```
Examples
```
extractPriceAndCurrency("€1.234,99");  // { price: 1234.99, currency: "€" }
extractPriceAndCurrency("1233.54 CHF");  // { price: 1233.54, currency: "CHF" }
extractPriceAndCurrency("$1,233.54");  // { price: 1233.54, currency: "$" }
extractPriceAndCurrency("JPY 1000");   // { price: 1000, currency: "JPY" }
extractPriceAndCurrency("1000 GBP");   // { price: 1000, currency: "GBP" }
extractPriceAndCurrency("No price here"); // { price: null, currency: null }
```

### License: MIT