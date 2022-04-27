const promt = require("prompt-sync")({sigint:true});
// generate random number in between 1-10
const randomNumber = Math.ceil(Math.random()*10) //1-10
// get user input though terminal using prompt
const guessNumber = +prompt("please guess any number in between 1-10::");
console.log(guessNumber)
if(randomNumber === guessNumber) {
    console.log("You won ! ")
}else{
    console.log("please try again ! ")
}

// we can do it like this to so it will show the right number
if(randomNumber === guessNumber) {
    console.log("You won ! ")
}else{
    console.log(`please try again ! right number was ${randomNumber}`)
}

// another example
if(guessNumber>10 || guessNumber<1){
    console.log("please enter valid number between 1 - 10 only")
}else if (randomNumber === guessNumber){
    console.log("You won!")
}else{
    console.log(`please try again ! right number was ${randomNumber}`)
}