let outer= document.getElementById('outer');
let username = document.getElementById("username"); 
let email = document.getElementById('email'); 
let password = document.getElementById('password'); 
let cPassword = document.getElementById('cPassword'); 
let usere1= document.getElementById('usere1');
let usere2= document.getElementById('usere2');
let emaile1= document.getElementById('emaile1');
let emaile2= document.getElementById('emaile2');
let passe1= document.getElementById('passe1');
let passe2= document.getElementById('passe2');
let cpasse1= document.getElementById('cpasse1');
let cpasse2= document.getElementById('cpasse2');
let button= document.getElementsByTagName('button');

// console.log(username,password,email,cPassword);

username.addEventListener("input",
usernameValidation);

email.addEventListener('input',
emailValidationFun);

password.addEventListener('input',passValidationFun)

cPassword.addEventListener('input',
confirmpassValidationFun);

button[0].addEventListener("click",function(){
    let errorFlag=false;
    if(username.value===""){
        usere1.style.display="block";
        username.setAttribute("class","usernameError");
        errorFlag=true;
    }
    if(password.value===""){
        passe1.style.display="block";
        passe2.style.display="none";
        password.setAttribute("class","passwordError");
        errorFlag=true;

    }
    if(cPassword.value==="") {
        cpasse1.style.display="block";
        cpasse2.style.display="none";
        cPassword.setAttribute("class","cPasswordError");
        errorFlag=true;

    }
    if(email.value===""){
        emaile1.style.display="block";
        emaile2.style.display="none";
        email.setAttribute("class","emailError");
        errorFlag=true;
    }
    if(true){
        if(errorFlag===false){
            outer.innerText=`Congrats,
       your account is created successfully,woohoo.........
       `;
        }
       
    }
});

function passValidationFun(e){
    if(e.target.value===""){
        passe1.style.display="block";
        passe2.style.display="none";
    }
    else{
        passe1.style.display= "none";
    }
    if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!])[a-zA-Z\d@!#$%^&]{8,}$/.test(e.target.value))){
        password.removeAttribute("success")
    password.setAttribute("class","passwordError")
        passe1.style.display="none";
        passe2.style.display="block";
    }
    else {
        password.removeAttribute("passwordError");
        password.setAttribute("class","success")
        passe2.style.display="none";
    }
};

function confirmpassValidationFun(e){
    if(e.target.value===""){
        cpasse1.style.display="block";
        cpasse2.style.display="none";
    }
    else {
        cpasse1.style.display="block";
    }
    if(e.target.value){
        if(password.value!==cPassword.value){
            cPassword.removeAttribute("success");
            cPassword.setAttribute("class","cPasswordError")
            cpasse1.style.display="none";
            cpasse2.style.display="block";
        }
        else {
            cPassword.removeAttribute("cPasswordError");
            cPassword.setAttribute("class","success")
            cpasse2.style.display="none";
            cpasse1.style.display="none";
        }
    }
    
};
function emailValidationFun(e){
    if(e.target.value===""){
        emaile1.style.display="block";
        emaile2.style.display="none";
    }
    else {
        emaile1.style.display= "none";
    }
    if(e.target.value){
        if(!(/^([a-z\d\.]+)@([a-z\.]+)\.[a-z]{2,}$/gi.test(e.target.value))){
            email.removeAttribute("success")
            email.setAttribute("class","emailError")
        emaile1.style.display="none";
        emaile2.style.display="block";

          }
          else {
            email.removeAttribute("emailError");
                email.setAttribute("class","success");
                emaile1.style.display="none";
        emaile2.style.display="none";
        }
    }
  
};

function usernameValidation(e) {
    if(!e.target.value){
        username.removeAttribute("success")
      username.setAttribute("class","usernameError")
      usere1.removeAttribute("blankError");
      usere1.setAttribute("class","showerror");
    }
    else {
        if(/[^a-z]/gi.test(e.target.value)){
            username.removeAttribute("success");
        username.setAttribute("class","usernameError");
        usere1.style.display="none";
        usere2.style.display="block";
        }
        else{
            console.log(username);
            username.removeAttribute("usernameError");
        username.setAttribute("class","success");
        usere1.style.display="none";
      usere2.style.display="none";
        }
        

    }
};

