let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().split("").splice(words.indexOf("Facebook")).splice(words.indexOf("Facebook")).join("").toUpperCase()); // ZERO