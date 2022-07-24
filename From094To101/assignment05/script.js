let body = document.querySelector("body");
let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");
let elemnets = [div,span,p,article,section];
elemnets.forEach(function(element){
    element.addEventListener("click",function(){
        console.log(`this is ${element.tagName.toLocaleLowerCase}`);
    }
    );
})