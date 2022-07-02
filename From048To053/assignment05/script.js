let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let newFriends = [];
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

// friends.sort();
for(i=friends.length-friends.length;i<friends.length;i++){
    if(letter.toLocaleUpperCase() != friends[i][0]){
        newFriends = newFriends.concat(friends[i])
    }
}
for (i = newFriends.length - newFriends.length ; i<newFriends.length;i++){
    console.log(`${i+1} => ${newFriends[i]}`)
}
