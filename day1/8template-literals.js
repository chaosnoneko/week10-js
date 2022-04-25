//1. Template Literals
// - allow you to add double and single quotes in your string
console.log("Learn" JavaScript "") // - in this case won't work
console.log('Learn" JavaScript "') // - it will work
console.log(`Learn " JavaScript " , it's Awasome! `) // - it will work like this also
// - allows to print multi line console
console.log (
    "Students: \n 1. Joseph , \n 2. Thomas"
) // you can format it how you like so it will print like you wrote it 
// - allow you to interporate variable values into to your string
const firstName="Saaf";
const age = 23;
console.log("Student name is " + firstName + ", He is " + age + " years old") 
console.log(`Student name is ${firstName}, firstName + ", He is ${age} years old. `) // string interpolation
console.log(`Student name is ${firstName}, firstName + ", He is ${age} years old. He is married :${true}`)// allow you to inject (extract) expressions (from your variuble) into your string 
//2. String Template
//3. Template String
//4. BackTicks Syntax