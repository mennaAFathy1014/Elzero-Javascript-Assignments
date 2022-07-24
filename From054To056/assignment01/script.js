let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let newFriends=[];
for(index;index<friends.length;index++){
    if(typeof friends[index]==="string" && friends[index].charAt(0) !== "A"){
        newFriends.push(friends[index]);
        counter++;
        console.log(`${counter} => ${friends[index]}`);
    }
    else{
        continue;
    }
}

// Output
"1 => Sayed"
"2 => Mahmoud"
