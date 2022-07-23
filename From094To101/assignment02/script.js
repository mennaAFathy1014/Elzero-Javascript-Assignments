let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let classesList = document.querySelector(".container");
let click = document.querySelector(".current");

click.onclick = function() {
    let arr = add.value.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== ""){
            let element = document.createElement("span");
            element.innerHTML =arr[i];
            classesList.appendChild(element);
        }
    }
    let arr2 = remove.value.split(" ");
    let arrElements = document.querySelectorAll("span");
    for (let i = 0; i < arrElements.length; i++) {
        if(arr2[i] !== ""){
            for (let j = 0; j < arr2.length; j++) {
                if(arr2[j] === arrElements[i].innerHTML){
                   classesList.removeChild(arrElements[i]);
                   console.log(arrElements[i]);
                }
            }
        }
    }
    add.value = "";
    remove.value = "";
}
