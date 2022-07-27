// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");


// if(window.localStorage.getItem("color")){
//     exp.style.backgroundColor = window.localStorage.getItem("color");
//     lis.forEach(function(li){
//         li.classList.remove("active");
//     });
//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li)=>{
//     li.addEventListener("click",(e)=>{
//         lis.forEach((li)=>{
//             li.classList.remove("active");
//         });
//         e.currentTarget.classList.add("active");
//         window.localStorage.setItem("color",e.currentTarget.dataset.color);

//         exp.style.backgroundColor = e.currentTarget.dataset.color;
//     })
// })
let exp = document.querySelector(".experiment");

if(window.localStorage.getItem("font","color","size")){
    exp.style.fontFamily = window.localStorage.getItem("font");
    exp.style.color = window.localStorage.getItem("color");
    exp.style.fontSize = window.localStorage.getItem("size");
}

window.addEventListener("change",(e)=>{
    e=document.querySelector(".experiment");
    let fontFamily = document.querySelector("#fonts");
    let fontSize = document.querySelector("#sizes");
    let color = document.querySelector("#colors");
    let font = fontFamily.value;
    let size = fontSize.value;
    let col = color.value;

    console.log(font,size,col);
    e.style.fontFamily = font;
    e.style.fontSize = `${size}px`;
    e.style.color = col;
    window.localStorage.setItem("font",font)
    window.localStorage.setItem("color",col)
    window.localStorage.setItem("size",`${size}px`);
});
