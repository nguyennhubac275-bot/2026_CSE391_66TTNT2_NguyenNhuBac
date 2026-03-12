let currentStep = 1;

const progressBar = document.getElementById("progressBar");

function showStep(step){

document.querySelectorAll(".step").forEach(el=>{
el.classList.remove("active");
});

document.getElementById("step"+step).classList.add("active");

progressBar.style.width = (step*33)+"%";

currentStep = step;

}

/* ===== VALIDATION ===== */

function validateStep1(){

const name=document.getElementById("fullname").value.trim();
const gender=document.querySelector('input[name="gender"]:checked');

if(name.length<3){

document.getElementById("nameError").textContent="Tên ≥ 3 ký tự";
document.getElementById("nameError").style.display="block";
return false;

}

document.getElementById("nameError").style.display="none";

if(!gender){

document.getElementById("genderError").textContent="Chọn giới tính";
document.getElementById("genderError").style.display="block";
return false;

}

document.getElementById("genderError").style.display="none";

return true;

}

function validateStep2(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const confirm=document.getElementById("confirm").value;

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){

document.getElementById("emailError").textContent="Email không hợp lệ";
document.getElementById("emailError").style.display="block";
return false;

}

document.getElementById("emailError").style.display="none";

if(password.length<8){

document.getElementById("passError").textContent="≥ 8 ký tự";
document.getElementById("passError").style.display="block";
return false;

}

document.getElementById("passError").style.display="none";

if(confirm!==password){

document.getElementById("confirmError").textContent="Không khớp";
document.getElementById("confirmError").style.display="block";
return false;

}

document.getElementById("confirmError").style.display="none";

return true;

}

/* ===== NEXT BUTTON ===== */

document.getElementById("next1").onclick=function(){

if(validateStep1()){
showStep(2);
}

}

document.getElementById("next2").onclick=function(){

if(validateStep2()){

showSummary();

showStep(3);

}

}

/* ===== BACK BUTTON ===== */

document.getElementById("back1").onclick=function(){

showStep(1);

}

document.getElementById("back2").onclick=function(){

showStep(2);

}

/* ===== SUMMARY ===== */

function showSummary(){

const name=document.getElementById("fullname").value;
const birth=document.getElementById("birth").value;
const gender=document.querySelector('input[name="gender"]:checked').value;
const email=document.getElementById("email").value;

document.getElementById("summary").innerHTML=`

Họ tên: ${name} <br>
Ngày sinh: ${birth} <br>
Giới tính: ${gender} <br>
Email: ${email}

`;

}