let body = document.querySelector("body");
let elements = document.body.children;
console.log(elements);

for(i=0;i<elements.length;i++){
    elements[i].onclick = function(){
        console.log(`This Is ${elements[i].nodeName.toLocaleLowerCase()}`);
    }
}