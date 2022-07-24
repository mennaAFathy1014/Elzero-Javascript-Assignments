let theNumber = 100020003000;

// Needed Output
// 123
let set = new Set([...theNumber.toString()]);
set.delete("0");
console.log(new Array(...set).join(""));