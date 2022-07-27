let name = document.querySelector('[name="name"]');
let email = document.querySelector('[name="email"]');
let phone = document.querySelector('[name="phone"]');
let skill = document.querySelector('[name="skills"]');

if(window.localStorage.getItem("name", "email", "phone")){
    name.value = window.localStorage.getItem("name");
    email.value = window.localStorage.getItem("email");
    phone.value = window.localStorage.getItem("phone");
    skill.value = window.localStorage.getItem("skill");
}

window.addEventListener("change",()=>{
    window.localStorage.setItem("name",name.value);
    window.localStorage.setItem("email",email.value);
    window.localStorage.setItem("phone",phone.value);
    window.localStorage.setItem("skill",skill.value);
});