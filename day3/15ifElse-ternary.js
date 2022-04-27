// Ternary Operator
// javascript ternary operator represented with the ?
// it is called ternary because it uses 3 operand

// const a = b + c
// + operator , b and c operants (binary)

// (condition) ? statement : statement ;
// ternary will be used to assign value to your variable depending on certain condition

const age = 21;
let allowed ;
if(age>=21){
    allowed = true;
}else{
    allowed = false;
}
// instead of that one we can write
const allowed = age >=21 ? true : false
(theme === "Dark") ? console.log("Apply Dark Theme ") : console.log("Apply Light Theme")
// or write it like this
console.log(theme=="Dark"? true:false)
// or like this
console.log(theme=="Dark"? "Apply Dark Theme" : "Apply light Theme")


//another example
month===1 ? console.log("this is month January");
month===2 ? console.log("this is month February");
month===3 ? console.log("this is month March");
month===4 ? console.log("this is month April");
month===12 ? console.log("this is month December");
console.log("else")