const form = document.getElementById("registerForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const successMessage = document.getElementById("successMessage");

const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^0[0-9]{9}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


function showError(field,message){

const error=document.getElementById(field+"Error");

error.textContent=message;
error.style.display="block";

document.getElementById(field).classList.add("invalid");

}


function clearError(field){

const error=document.getElementById(field+"Error");

error.style.display="none";

document.getElementById(field).classList.remove("invalid");
document.getElementById(field).classList.add("success");

}

function validateFullname(){

const value=fullname.value.trim();

if(value===""){
showError("fullname","Không được để trống");
return false;
}

if(value.length<3){
showError("fullname","Phải ≥ 3 ký tự");
return false;
}

if(!nameRegex.test(value)){
showError("fullname","Chỉ chứa chữ cái");
return false;
}

clearError("fullname");
return true;

}

function validateEmail(){

const value=email.value.trim();

if(value===""){
showError("email","Email không được trống");
return false;
}

if(!emailRegex.test(value)){
showError("email","Email không hợp lệ");
return false;
}

clearError("email");
return true;

}


function validatePhone(){

const value=phone.value.trim();

if(value===""){
showError("phone","SĐT không được trống");
return false;
}

if(!phoneRegex.test(value)){
showError("phone","SĐT phải 10 số bắt đầu 0");
return false;
}

clearError("phone");
return true;

}

function validatePassword(){

const value=password.value;

if(value===""){
showError("password","Mật khẩu không được trống");
return false;
}

if(!passwordRegex.test(value)){
showError("password","≥8 ký tự có hoa thường và số");
return false;
}

clearError("password");
return true;

}

function validateConfirmPassword(){

if(confirmPassword.value!==password.value){
showError("confirmPassword","Mật khẩu không khớp");
return false;
}

clearError("confirmPassword");
return true;

}


function validateGender(){

const gender=document.querySelector('input[name="gender"]:checked');

if(!gender){

document.getElementById("genderError").textContent="Chọn giới tính";
document.getElementById("genderError").style.display="block";

return false;
}

document.getElementById("genderError").style.display="none";

return true;

}

function validateTerms(){

if(!terms.checked){

document.getElementById("termsError").textContent="Phải đồng ý điều khoản";
document.getElementById("termsError").style.display="block";

return false;
}

document.getElementById("termsError").style.display="none";

return true;

}


fullname.addEventListener("blur",validateFullname);
email.addEventListener("blur",validateEmail);
phone.addEventListener("blur",validatePhone);
password.addEventListener("blur",validatePassword);
confirmPassword.addEventListener("blur",validateConfirmPassword);


fullname.addEventListener("input",()=>clearError("fullname"));
email.addEventListener("input",()=>clearError("email"));
phone.addEventListener("input",()=>clearError("phone"));
password.addEventListener("input",()=>clearError("password"));
confirmPassword.addEventListener("input",()=>clearError("confirmPassword"));

form.addEventListener("submit",function(e){

e.preventDefault();

const valid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirmPassword() &
validateGender() &
validateTerms();

if(valid){

form.style.display="none";

successMessage.style.display="block";

successMessage.textContent="Đăng ký thành công! 🎉 Xin chào "+fullname.value;

}

});