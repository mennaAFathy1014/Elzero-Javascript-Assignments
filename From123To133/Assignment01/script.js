// Needed Output
//Set(3) {10, 20, 2}
//2
let setOfNumbers = new Set().add(10);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);
let iterator = setOfNumbers.values();
iterator.next().value;
iterator.next().value;
console.log(iterator.next().value);