let body = document.querySelector("body");
let p = document.querySelector("p");
p.remove();
let div1= document.createElement("div");
div1.setAttribute("class","start");
div1.setAttribute("title","Start Element");
div1.setAttribute("data-value","Start");
div1.innerHTML = "Start";
body.prepend(div1);
let div2= document.createElement("div");
div2.setAttribute("class","end");
div2.setAttribute("title","End Element");
div2.setAttribute("data-value","End");
div2.innerHTML = "End";
body.append(div2);