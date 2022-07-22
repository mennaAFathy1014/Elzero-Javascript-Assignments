let promptmsg = prompt("Print Number From - To","Example: 5-20").split("-");
let a = promptmsg[0],b = promptmsg[1];
let main = document.querySelector(".default")
if (+a<+b){
    for(i=+a;i<=+b;i++){
        let div = document.createElement("div");
        main.appendChild(div);
        div.textContent = `${i}`;
        console.log(i);
    }
}else{
    for(i=+b;i<=+a;i++){
        let div = document.createElement("div");
        main.appendChild(div);
        div.textContent = `${i}`;
        console.log(i);
    }
}


