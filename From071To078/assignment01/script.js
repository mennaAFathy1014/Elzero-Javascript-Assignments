let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let letters = mix.map((ele)=>{
    if(typeof ele !== 'number'){
        return ele;
    }
}).join("");
console.log(letters)