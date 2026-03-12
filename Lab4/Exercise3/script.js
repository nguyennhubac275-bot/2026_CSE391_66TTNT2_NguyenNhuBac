const fullname=document.getElementById("fullname");
const password=document.getElementById("password");
const toggle=document.getElementById("togglePassword");

const nameCount=document.getElementById("nameCount");

const strengthLevel=document.getElementById("strengthLevel");


fullname.addEventListener("input",()=>{

const len=fullname.value.length;

nameCount.textContent=len+" / 50";

if(len===50){
nameCount.style.color="red";
}else{
nameCount.style.color="black";
}

});


toggle.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

}else{

password.type="password";

}

});


password.addEventListener("input",()=>{

const value=password.value;

let strength=0;

if(value.length>=8) strength++;

if(/[A-Z]/.test(value)) strength++;

if(/[0-9]/.test(value)) strength++;

if(/[^A-Za-z0-9]/.test(value)) strength++;

if(strength<=1){

strengthLevel.style.width="33%";
strengthLevel.className="weak";

}

else if(strength<=3){

strengthLevel.style.width="66%";
strengthLevel.className="medium";

}

else{

strengthLevel.style.width="100%";
strengthLevel.className="strong";

}

});