// Problem: The Bakery Problem

// You're working at a bakery and need to write some logic to determine if a customer gets a discount. Here are the rules:

// Customers get a discount if they are over 65 years old OR they buy more than 3 pastries.
// We have variables to store the customer's age (customerAge) and the number of pastries they bought (pastryCount). Both are numbers.
// Your challenge is to write some JavaScript code that checks these conditions and outputs a message saying "Discount applied!" if the customer gets a discount, or "No discount this time" otherwise.

// Bonus:
// Add another condition to give an even bigger discount if the customer is over 65 AND buys more than 3 pastries (use the logical AND operator && for this).
// let discount;
// let age = prompt("Enter Age = ");
// let pastry = prompt("Enter Number of Pastry = ");

let discount;
let age = prompt("Enter Age = ");
let pastry = prompt("Enter Number of Pastry = ");

if (age > 65 && pastry > 3) {
  discount = "Bonus Discount applied!";
} else if (age > 65 || pastry > 3) { 
  discount = "Discount applied!";
} else {
  discount = "No discount this time";
}
console.log("discount =", discount);