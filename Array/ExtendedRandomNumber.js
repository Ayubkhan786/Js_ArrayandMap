randomInArray();
function randomInArray() {
  //Storing the Random 3 digit Numbers into an Array
  let randomArray = [];
  for (i = 1; i <= 10; i++) {
    let num = Math.floor(Math.random() * 899 + 100);
    randomArray.push(num);
  }
  console.log(randomArray);
  //Sorting the Array
  randomArray.sort();
  console.log(randomArray);
}
