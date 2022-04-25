// Numbers

// Numbers Pitfalls
console.log("2"*"4") // output 8 only when is * will it multiply it . in all other versions it will place them next to each other
// Coercion
// datatype conversion
console.log("2"*"4"); //output 8 implicit coercion
console.log("3"-"1"); //output 2 implicit coercion
console.log("5"/"5"); //output 1 implicit coercion
console.log("8"-"2"); //output 0 implicit coercion
console.log("3"+"3"); //output 33 contenation
console.log(3-"3"); //output 33 contenation
console.log(0.1 + 0.2) ; // output 0.30000000000000004 - it can't take more that 15 decimal place and after that you will get an unexpected answer
console.log(15.2 + 1.3) ; // output 16.5
console.log(0.2 + 0.4) ; // output 0.600000000000001 - it has poblems calculating things that are with 0.something but not with all of the 0.something
console.log(10/3) ; // output 3.33333333333335
console.log(Math) ; // output Object [Math] {}
console.log(0.1 + 0.2) ; // output 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)) ; // output 0.30 - it converts the number in to a string
console.log((0.1 + 0.2).toFixed(2) + 1) ; // output 0.301 - it will come out as a sting and then add the 1 after it 

// Number conversion
// - Number Method
console.log(Number((0.1 + 0.2).toFixed(2))) ; // output 0.3
// - Number Method
let postalCode ="14137 Berlin"
consolr.log(Number(postalCode)) // output NaN it won't get it as a number
// - ParseFloat Mathod
console.log(parseFloat((0.1 + 0.2).toFixed(2))) ; // output 0.3
let postalCode ="14137 Berlin"
consolr.log(Number(postalCode)) // output 14137
const number = 4;
console.log(number.toFixed(3)) // output 4.000
//ParseInt Method
console.log(parseInt(2.9)) ; // output 2 - it will give you a floating number the intergine number the number before the .
let postalCode ="14137 Berlin"
consolr.log(Number(postalCode)) // output 14137