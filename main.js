// Step 1: Ask the user to enter a price tag
let priceInput = prompt("Enter the price tag, for example: $59.99");

// Step 2: Convert the input from string to a number (removing the $ sign)
let price = parseFloat(priceInput.replace("$", ""));

// Step 3: Reduce the price by 10 percent
let discountedPrice = price * 0.9;

// Step 4: Print out the new price
console.log("New price: $" + discountedPrice.toFixed(2));
