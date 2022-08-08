// randomInArray();
// function randomInArray() {
//   let numbersArray = [];
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   numbersArray.push(Math.floor(Math.random() * 899 + 100));
//   console.log(numbersArray);
// }

randomInArray();
function randomInArray() {
  let randomArray = [];
  for (i = 1; i <= 10; i++) {
    let num = Math.floor(Math.random() * 899 + 100);
    randomArray.push(num);
  }
  console.log(randomArray);
}
