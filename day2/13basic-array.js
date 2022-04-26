// Basic Array Methods
 const cities = [ " Berlin" , " Hamburg " , " Frankfurt ", " Dresden ", " Bonn "] ;

 // pish and pop method to remove and add item in then end array 
 cities.push("Dusseldorf")
 cities.toLocaleString(cities) // it will add Dusseldorf to the array

 // pop will delete last item from your array
 cities.pop();
 console.log(cities) // you won't see the last name you put in 

 // shift and unshift method will add and remove item from the start of your array 
cities.shift()
console.log(cities) // will delete the first city

// unshift will always add items in the beginning of your array
cities.unshift("Berlin")
console.log(cities) // it will add the value that we added
// includes method
console.log(cities.includes("Berlin")) // it will print out that is true to make sure that the item is there or not 

// reverse method 
cities.reverse()
console.log(cities) // it will print out the reverse order 

delete cities [2];
console.log(cities) // it will delete the item in position 2 and will come out as < 1 empty item >

// splice method will remove/add/replace any item from your array 
cities.splice(2,1,"Leipzig")
console.log(cities) // it will delete 2 item and replace it with Leipzig

// sort method them ascending or descending 
console.log(cities.sort())

// join 
console.log(cities.join(" ")) // join all item using that separator , when the separator is empty it will write $ but we can add other sighs inside

// indexOf
console.log(cities.indexOf("Berlin"))