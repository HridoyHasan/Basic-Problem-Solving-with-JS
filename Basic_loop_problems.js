Exercise 1: Print Numbers 1 to 10

Ans:

for (let i=0; i<=10; i++) {
console.log(i);
}

Exercise 2: Sum of Numbers

Ans:

let sum = 0;
for (let i=1; i<=100; i++) {
    sum+=i;
}
console.log(sum);

Exercise 3: Factorial (product of all positive integers) of a given number

Ans:
let n = prompt("Input number: ");
let factorial = 1;
for (let i=1; i<=n; i++) {
    factorial*=i;
}
console.log("the factorial of input number is",factorial);

Exercise 4: Print the even numbers

Ans:
let n = prompt("Input number: ");
for (let i=1; i<=n; i++) {
    if (i%2 === 0) {
    console.log("the even numbers are",i); }
}

Exercise 5:  Array Sum

Ans:

let input = prompt("Enter numbers separated by commas:");
let numbers = input.split(',').map(Number);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum of the array:", sum);

explain : 
-let numbers = input.split(',').map(Number); splits the input string by commas and converts each split string to a number, resulting in an array of numbers.

-for (let i = 0; i < numbers.length; i++) { iterates over each element of the numbers array. Note that numbers.length gives the length of the array.

-sum += numbers[i]; adds the current element of the array to sum.


Exercise 6:  Find the max value from Array

Ans: 

let input = prompt("input the numbers: ");
let array = input.split(',').map(Number);
let max = array[0];
for (i=0; i<array.length; i++){
    if (array[i] > max) {
    max = array[i];
  }
}
console.log("the max number from this array:", max)

Exercise 6:  Print Fibonacci Series Based on User Input

Ans:

let n = prompt("Print Fibonacci Series Upto: ");
let a = 0, b = 1;
for (let i = 0; i < n; i++) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}


Exercise 7:  Print a Triangle and Pyramid Pattern

Ans:
Triangle: 
let rows = 5;

for (let i = 1; i <= rows; i++) {
  let str = '';
  for (let j = 0; j < i; j++) {
    str += '*';
  }
  console.log(str);
}


Pyramid:
let rows = 5;

for (let i = 1; i <= rows; i++) {
  let str = '';

  // Add leading spaces
  for (let j = 1; j <= rows - i; j++) {
    str += ' ';
  }

  // Add asterisks
  for (let k = 0; k < 2 * i - 1; k++) {
    str += '*';
  }

  console.log(str);
}


Exercise 7:  Find the longest word

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(' ');
let longestWord = '';

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}

console.log("Longest word:", longestWord);

Exercise 8:  Sum of digits

Ans:

let num = 12345;
let sum = 0;

while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}

console.log("Sum of digits:", sum);

Exercise 9:  Palindrome Check

Ans:

let str = "racecar";
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log("Is palindrome:", isPalindrome);


Exercise 10:  Specific Character Count

Ans:
let str = "banana";
let charToCount = 'a';
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === charToCount) {
    count++;
  }
}

console.log(`Number of '${charToCount}' in the word:`, count);
