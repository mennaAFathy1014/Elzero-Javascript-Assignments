let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
let set = new Set(myFriends.sort());

console.log(set);