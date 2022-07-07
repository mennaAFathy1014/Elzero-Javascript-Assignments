let create = document.querySelector("[name='create']");
let result = document.getElementsByTagName('div')[0];
let numOfElements = document.querySelector("[name = 'elements']");
let text = document.querySelector("[name = 'texts']");
let option = document.querySelector('[name = "type"]');
create.onclick = function(e){
    e.preventDefault();
    txt = text.value;
    num = numOfElements.value;
    type = option.options[option.selectedIndex].value;
    if(type==='Div'){
        for(i=0;i<num;i++){
            let div= document.createElement('div');
            result.appendChild(div);
            div.textContent=txt;
        }
    }
    if(type==='Section'){
        for(i=0;i<num;i++){
            let secction= document.createElement('section');
            result.appendChild(secction);
            secction.textContent=txt;
        }
    }
    console.log(txt,num,type);
}