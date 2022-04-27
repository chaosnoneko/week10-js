// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
const color = "blue";
switch (color) {
    case "red":
        console.log("red");
        break;
    case "blue":
        console.log("blue");
        break;
    case "green":
        console.log("green");
        break;
    default:
        console.log("yellow");
}
// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.
function grading(grade) {
    switch (grade.toLowerCase()) {
      case "a":
        return `Excellent job`;
      case "b":
        return `Great job`;
      case "c":
        return `You passed`;
      case "d":
        return `You failed`;
      case "e":
        return "Need a lot of work";
      default:
        return `Not a grade between a - e`;
    }
  }
  console.log(grading("b"));
// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
let fruit = "Strawberry"
switch(fruit){
    case "Banana": 
    console.log("Monkeys love bananas");
    break;
    case "Orange":
    console.log("Oranges have Vitamin C");
    break;
    case "Strawberry":
    console.log("Strawberries are the best fruit");
    break;
    case "Apples":
    console.log("Apples wake you up");
    break;
}
// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
// * If percentageComplete is between 51 and 80, print "You can do it!". 
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!". 
const Percentage= 31;
switch (true) {
    case (Percentage <= 30):
        console.log("Still a long way to go");
        break;
    case (Percentage <= 51):
        console.log("Slowly getting there");
        break;
    case (Percentage <= 81):
        console.log("You can do it!");
        break;
    case (Percentage <= 99):
        console.log("This is the last push!");
        break;
    default:
        console.log("You're there. Well done!");
}
// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.
// The if-else statement checks for equality as well as for logical expression. On the other hand, switch checks only for equality. The if statement evaluates integer, character, pointer or floating-point type or boolean type. On the other hand, switch statement evaluates only character or an integer datatype.
