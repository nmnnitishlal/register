let user=document.getElementById("user")
let userin=document.getElementById("userin")
let error1=document.getElementById("error1")


let email=document.getElementById("email")
let emailin=document.getElementById("emailin")
let error2=document.getElementById("error2")


let password=document.getElementById("password")
let passwordin=document.getElementById("passwordin")
let error3=document.getElementById("error3")


let cpassword=document.getElementById("cpassword")
let cpasswordin=document.getElementById("cpasswordin")
let error4=document.getElementById("error4")



emailin.onkeyup=errormsg
function errormsg(){
if(!emailin.value.match(/^[A-Za-z\ _\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
   error2.innerHTML="*Please Enter an Valid Email Address"
   

}
else if(emailin.value.match(/^@[A-Za-z]+\.[A-Za-z]{2,4}$/)){
    error2.innerHTML="*Please Enter an part of personal"
    
}
else{
    error2.innerHTML=""

    
}
}
userin.onkeyup=error1msg
function error1msg(){
    if(userin.value.trim()===""){
        error1.innerHTML="*Username is Required"
        
    }
    else{
        error1.innerHTML=""
    }
}

passwordin.onkeyup=error3msg
function error3msg(){
    if(passwordin.value.trim()===""){
        error3.innerHTML="*Password is Required"
        
    }
    else if(passwordin.value.trim().length<8){
        error3.innerHTML="*Password must be atleast 8 character"

    }
    else if(passwordin.value.trim().length>=8){
        error3.innerHTML=""
    }

}
cpasswordin.onkeyup=error4msg
function error4msg(){
    if(cpasswordin.value.trim()===""){
        error4.innerHTML="*Password is Required"
        
    }
    else if(cpasswordin.value.trim()!==passwordin.value.trim()){
        error4.innerHTML="*Password is incorrect"

    }
    else if(cpasswordin.value.trim()===passwordin.value.trim()){
        error4.innerHTML=""
    
    }
    
}