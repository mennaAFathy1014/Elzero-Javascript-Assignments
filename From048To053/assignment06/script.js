let start = 0;
let swappedName = "elZerO";
let empty ="";
let swapped = swappedName;
// Output
"ELzERo"
for(i=start;i<swappedName.length;i++){
    if(swapped[i] != swappedName[i].toUpperCase()){
        empty += swappedName[i].toUpperCase()
        
    }
   else{
       empty += swappedName[i].toLowerCase()
   }
}
console.log(empty);