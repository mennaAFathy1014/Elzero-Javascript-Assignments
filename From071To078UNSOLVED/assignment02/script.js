let myString = "EElllzzzzzzzeroo";

// Elzero
let letter = myString.split("").filter(function(ele,i,arr){
    if (ele != arr[i+1]){
        return ele
    }
}).join("");
console.log(letter)