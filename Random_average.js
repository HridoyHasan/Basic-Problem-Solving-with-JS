// Take some random numeric input and find their sum and average.

let n = prompt("");
let values = n.split("");
let numb = values.map(Number);
let sum = 0
for (let i = 0; i < numb.length; i++) {
  sum += numb[i];
};
let average = sum / numb.length;

console.log("Sum:", sum);
console.log("Average:", average);