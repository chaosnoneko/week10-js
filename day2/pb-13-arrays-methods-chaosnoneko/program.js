// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondItem = euroCities[1];
console.log(secondItem);
// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);
// Print the length of the array "euroCities".
console.log(euroCities.length);
// Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);
// Use an array method to add "Budapest" to the euroCities array.
euroCities[4] = "Budapest";
console.log(euroCities);
// Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1,2);
console.log(euroCities);
// Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = ["Tokyo", "Hongkong", "Bangkok", "Manila", "Seoul"];
console.log(asianCities);
// Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let another = asianCities.slice(1, 5);
console.log(another);
//Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);
// Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);
// Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2] = "Toronto";
console.log(worldCities);
// Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
// Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
let joinedWolrdCities = worldCities.join("+");
console.log(joinedWolrdCities);
let program = myString.split(" ");
program.reverse();
console.log(program);
//Bonus
//Write a program to reverse the string: "Hello World".
let myString = "Hello World";
// Extra Practice
// Print the results to the console.
// Make an array of your siblings' names or your favorite movie characters' names.
let sibNames = ["Anji", "Kanna"];
// Make an array of your parents' names.
let parentNames = ["Mother", "Father"];
// Combine these two arrays.
let names = sibNames.concat(parentNames);
console.log(names);
// Add your pets' names.
let petNames = ["Heisuke", "Irma"];
// Reverse the order of the array.
petNames.reverse();
console.log(petNames);
// Access one of your parents' names.
parentNames[1] = "Private";
//Update the name of one of your parents.
console.log(parentNames);
