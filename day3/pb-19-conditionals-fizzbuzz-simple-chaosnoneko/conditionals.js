let myNumber = 100;
if (myNumber % 5 == 0 && myNumber % 3 == 0) {
  console.log("FizzBuzz");
} else if (myNumber % 5 == 0) {
  console.log("Buzz");
} else {
  if (myNumber % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(myNumber);
  }
}