// 1
const determiner = 6;
let x = 4
if(determiner < 0) {
    x = "less than 0"
}
else if( determiner >=0)
x = "Greater or equal to 0"
console.log(x);
// 2
if (determiner >= 0) {
    let update = "greater or equal to 0"
    console.log(update);
    let message = "Positive integer"
    console.log(message);
}
if (determiner < 0) {
    let update = "less then 0"
    console.log(update);
}
//**Question**
// if we print message outside it will not show because the brackets are blocking the statement.