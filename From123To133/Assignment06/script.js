let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
chars.copyWithin(3);
console.log(chars);



let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

chars2.copyWithin(-6,4).copyWithin(4);
console.log(chars2);


let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

chars3.copyWithin(2,0,5);
console.log(chars3);

let chars4 = ["A", "B", "C", "D", "E", 10, 15, 6];

chars4.sort().copyWithin(0,3,6);
console.log(chars4);


