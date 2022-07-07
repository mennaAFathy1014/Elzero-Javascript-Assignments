let myElement = document.querySelector("form").querySelector(".result");
let usd = document.getElementsByName('dollar')[0];
usd.oninput = function(){
    myElement.innerHTML = `${usd.value} USD = ${(usd.value * 15.6).toFixed(2)} Egyptian Pound`;
}
// usd.addEventListener('input',function(){
//     myElement.innerHTML=`${usd.value} USD Dollar = ${(usd.value * 15.6).toFixed(2)} Egyptian Pound`;
// })