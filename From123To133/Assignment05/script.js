//i do 4 ways of creating a new array

let theName = "Elzero";

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
console.log(new Set([...theName]));
console.log(new Array(...theName));
console.log(theName.split(""));
console.log([...theName]);