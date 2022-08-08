console.log("Prime factor of given number ");
const prompt = require("prompt-sync")();
let n = prompt("Enter the Number :");
let primeArray = [];
for (let i = 2; i <= n / 2; i++) {
  while (n % i == 0) {
    console.log(i);
    n = n / i;
  }
}
if (n > 1) {
    primeArray.push(n);
} else {
  console.log("Invalid");
}
//primeArray.push(n);
console.log(primeArray);
