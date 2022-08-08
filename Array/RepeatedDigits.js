console.log("Numbers From Range 0-100");
let i;
for (i = 0; i <= 100; i++) {
  console.log(i);
}
//Stroring the Repeated numbers in Array
let digitArray = [],
  repeat = 0;
findRepeatedNumbers();
function findRepeatedNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 10 == Math.floor(i / 10)) {
      digitArray[repeat] = i;
      repeat++;
    }
  }
}
console.log("The repeated Numbers are : " + digitArray);
