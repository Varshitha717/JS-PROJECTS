let username= document.getElementById('usr')
let pass1= document.getElementById('pswd')
let logbtn =document.getElementById('login')

let password1=document.getElementById('pswd1')
let password2=document.getElementById('pswd2')
let regbtn=document.getElementById('reg')

function mypassword()
{
    //Ternary operator
    pass1.type=pass1.type==="password"? "text":"password"
    //OR USE BELOW CODE
    // if(pass1.type==="password")
    // {
    //     pass1.type="text";
    // }
    // else{
    //     pass1.type="password"
    // }
}

function logincheck()
{
    if(username.value==="admin" && pass1.value==="abc@123")
    {
        alert("Logged in successfully")
    }
    else
    {
        alert("Invalid username and password")
    }
}

function registercheck()
{
    if(password1.value===password2.value && password1.value!=="")
    {
        alert("Registration successfully")
    }
    else
    {
        alert("Registration failed")
    }
}