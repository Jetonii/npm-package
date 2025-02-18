/**
 * Extracts price and currency from a given price text.
 * @param {string} priceText - The price string containing numbers and currency symbols.
 * @returns {{ price: number, currency: string | null }} - The extracted price and currency.
 */
function extractPriceAndCurrency(priceText) {
    if (!priceText) return { price: 0, currency: null };

    const match = priceText.match(/([^\d\s.,']*?)\s*([\d.,']+)\s*([^\d\s.,']*)/);
    if (match) {
        const currencyBefore = match[1].trim(); // Currency before the number
        const priceStr = match[2];
        const currencyAfter = match[3].trim(); // Currency after the number

        const currency = currencyAfter || currencyBefore || null;

        return { price: getPriceFromString(priceStr), currency };
    }

    return { price: null, currency: null };
}

/**
 * Converts a price string into a floating-point number.
 * @param {string} priceStr - The price string (e.g., "1,234.56").
 * @returns {number} - The parsed price.
 */
function getPriceFromString(priceStr) {
    const parts = priceStr.split(/[,\.']/);
    if (parts.length > 1) {
        const lastPart = parts[parts.length - 1];
        if (lastPart.length <= 2) { // Likely a decimal separator
            priceStr = parts.slice(0, -1).join("") + "." + lastPart;
        } else {
            priceStr = parts.join("");
        }
    }

    const parsedPrice = parseFloat(priceStr);
    return isNaN(parsedPrice) ? 0 : parsedPrice;
}

module.exports = { extractPriceAndCurrency };
