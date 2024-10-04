let input = prompt("Enter the array of numbers separated by commas: ");
let nums = input.split(',').map(Number);
let target = parseInt(prompt("Enter the target number:"));

let result = []; 
for (i=0; i<nums.length; i++){
    for (j=i+1; j<nums.length; j++){
        if (nums[i] + nums[j] === target) {
           result = [i, j]; //store the result in array
      break; 
        }
    }
}

console.log(result); 