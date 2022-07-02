let num = "10";

// Solution One
console.log(++num-num+num-true+num-true); // 20

// Solution Two
console.log((num-1) * (true+true)); // 20

// Solution Three
console.log(num-true + num-true); // 20

// Solution Four
console.log(--num+num); // 20