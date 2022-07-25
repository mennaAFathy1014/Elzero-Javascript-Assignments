let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle))
{
    console.log("Found");
}
for(let i = 0; i < haystack.length; i++){
    if(haystack[i] === needle){
        console.log("Found");
    }
}
