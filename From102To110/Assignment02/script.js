let close = document.querySelector(".close-btn");
let popup = document.querySelector(".pop-up");
let pop= setTimeout(popupFun, 5000);
function popupFun(){
    popup.style.display = "flex";
}
function closeFun(){
    popup.style.display = "none";
}
close.addEventListener("click", closeFun);