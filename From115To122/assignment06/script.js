let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
function info(myFriends){
  if(!(chosen <= myFriends.length && chosen > 0)) 
  return;
  let {
    title,
    age,
    available,
    skills:[, s2]
  } = myFriends[chosen - 1];
  console.log(title);
  console.log(age)  
  console.log(available? "available": "not available");
  console.log(s2);
}
info(myFriends);
// Write Your Code Here

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"