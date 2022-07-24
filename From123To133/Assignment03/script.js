let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
  // Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true
let set = new Map();
set.set("username", myInfo.username);
set.set("role", myInfo.role);
set.set("country", myInfo.country);
console.log(set);
console.log(set.size);
console.log(set.has("role"));