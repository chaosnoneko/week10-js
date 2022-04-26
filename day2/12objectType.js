// Datatypes

// Primitive ( string , number , boolean , undefined , null , symbol )

// Object ( Array , object , function )

const studentOne = "Joseph";
const studentTwo = "Robert";
const studentThree = "Max";
const studentFourth = "Thomas";
const studentFifth = "Smith";

// Array
// Array allows you to store multiple values in a single variable 
// these value can be of primitive and object type

const studentNames = [ "Joseph " , " Roberth " , " Max " , " Thomas " , " Smith "]
const data = [ " Berlin " , 23 , true , [1,2,3,4,5] ]
console.log (typeData) ; // result - object
// square bracket / index notation
console.log(data[0]) // we will get Berlin out of it 
console.log(data[1]) // we will get number out of it
// how many elements you have in this array
console.log(data.length) // output is 4 for this array
// resign value to any items inside ur array
data[0] = "Frankfurt";
console.log(data) // result will be the whole text from the example but we will get Frankfurt instead of Berlin
data = [] // it will get an error message . you can;t change the data directly 
data[1] = "Chaos"
console.log(data) // now we changed the data from number to a name
console.log(data[3]) // print out the array that is in position 3
console.log(data[3][length]) // print out the array that is in position 3 and how much items does it have inside
console.log(data[3][1]) // print out the array that is in position 3 the item in 1 position

data [3][1] = 24
console.log(data[3][1])


const studentNames = [ "Joseph " , " Roberth " , " Max " , " Thomas " , " Smith " , " James ", " Kanna " , " Anji " , " Mari "]
console.log(studentNames[6]) // to print out the students Name
console.table(studentNames) // it will print the names in a table form
studentNames[4] = "Jonny" // how to change the array 
console.table(studentNames) // it will print out the new result

// if we have a name with a smaller letters we can change it like that 
studentNames[7] = "jonny" // original one
studentNames[7] = studentNames[7][0].toUpperCase() + studentNames[7].slice(1) ; // it will overwrite the original and it will print out the full name and the first letter wil be capitalized 
console.table(studentNames)