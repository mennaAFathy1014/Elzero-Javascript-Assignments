let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let filter = numsAndStrings.filter(function(item) {
    return typeof item === "number";
})
let map = filter.map(function(item) {
    return item * -1;
})
console.log(filter);
console.log(map);