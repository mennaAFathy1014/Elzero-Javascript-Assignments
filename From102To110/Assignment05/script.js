let div = document.querySelector("div");
console.log(div.innerHTML);
let counter = setInterval(countDown,1000);
function countDown(){
    div.innerHTML -=1;
    if(div.innerHTML === "5"){       
        open("https://elzero.org",
        (right=100),
        (top = 20),
        "_blank",
        (width = 20),
        (height = 50),);
    }else if (div.innerHTML === "0"){
        clearInterval(counter);
    }
}