// Selecting all elements
var uname=document.getElementById("name")
var email=document.getElementById("email")
var password=document.getElementById("password")
var submitButton=document.getElementById("submitButton")
var nameempty=document.getElementById("nameempty")
var emailempty=document.getElementById("emailempty")
var passempty=document.getElementById("passempty")

console.log(uname, email,password,submitButton,nameempty,emailempty,passempty)

// Main-logic
uname.addEventListener("input",function(){
    if(uname.value==""){
        nameempty.textContent="Name is required!"
        nameempty.classList.add("nameempty")
    }
    if(uname.value!=""){
        nameempty.textContent=""
    }
})
uname.addEventListener("blur",function(){
    nameempty.classList.add("namedisplay")
})

password.addEventListener("input",function(){
    if(password.value.length<=6){
        passempty.textContent="Password has to be atleast 6 characters!"
        passempty.classList.add("nameempty")
    }
    if(password.value.length>6){
        nameempty.textContent=""
    }
})
password.addEventListener("blur",function(){
    passempty.classList.add("namedisplay")
})

email.addEventListener("input", function() {
    var emailValue = email.value.trim();
    if (emailValue === "") {
        emailempty.textContent = "Email is required!";
        emailempty.classList.add("nameempty")
    } else if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1 || emailValue.indexOf("@") > emailValue.indexOf(".")) {
        emailempty.textContent = "Please enter a valid email address!";
        emailempty.classList.add("nameempty");
    } else {
        emailempty.textContent = "";    
    }
});
