const form=document.getElementById("orderForm");

const product=document.getElementById("product");
const quantity=document.getElementById("quantity");
const deliveryDate=document.getElementById("deliveryDate");
const address=document.getElementById("address");
const note=document.getElementById("note");

const charCount=document.getElementById("charCount");
const totalPrice=document.getElementById("totalPrice");

const confirmBox=document.getElementById("confirmBox");
const orderSummary=document.getElementById("orderSummary");

const successMessage=document.getElementById("successMessage");

const prices={
ao:150000,
quan:200000,
giay:500000
};

function showError(id,msg){

const el=document.getElementById(id+"Error");

el.textContent=msg;
el.style.display="block";

document.getElementById(id).classList.add("invalid");

}


function clearError(id){

const el=document.getElementById(id+"Error");

el.style.display="none";

document.getElementById(id).classList.remove("invalid");
document.getElementById(id).classList.add("success");

}


function validateProduct(){

if(product.value===""){
showError("product","Hãy chọn sản phẩm");
return false;
}

clearError("product");
return true;

}


function validateQuantity(){

const value=parseInt(quantity.value);

if(isNaN(value)||value<1||value>99){

showError("quantity","Số lượng 1-99");
return false;

}

clearError("quantity");
return true;

}

function validateDate(){

const today=new Date();

const selected=new Date(deliveryDate.value);

const max=new Date();

max.setDate(today.getDate()+30);

if(!deliveryDate.value){

showError("date","Chọn ngày giao");
return false;

}

if(selected<today){

showError("date","Không được là ngày quá khứ");
return false;

}

if(selected>max){

showError("date","Không quá 30 ngày");
return false;

}

clearError("date");
return true;

}

function validateAddress(){

if(address.value.trim().length<10){

showError("address","Địa chỉ ≥10 ký tự");
return false;

}

clearError("address");
return true;

}


function validateNote(){

if(note.value.length>200){

showError("note","Tối đa 200 ký tự");
return false;

}

clearError("note");
return true;

}


function validatePayment(){

const pay=document.querySelector('input[name="payment"]:checked');

if(!pay){

document.getElementById("paymentError").textContent="Chọn phương thức";
document.getElementById("paymentError").style.display="block";

return false;

}

document.getElementById("paymentError").style.display="none";

return true;

}


note.addEventListener("input",()=>{

const len=note.value.length;

charCount.textContent=len+" / 200";

if(len>200){

charCount.style.color="red";

}else{

charCount.style.color="black";

}

});


function updateTotal(){

const p=prices[product.value]||0;

const q=Number(quantity.value)||0;

const total=p*q;

totalPrice.textContent="Tổng tiền: "+total.toLocaleString("vi-VN")+" đ";

}

product.addEventListener("change",updateTotal);
quantity.addEventListener("input",updateTotal);


product.addEventListener("blur",validateProduct);
quantity.addEventListener("blur",validateQuantity);
deliveryDate.addEventListener("blur",validateDate);
address.addEventListener("blur",validateAddress);


form.addEventListener("submit",function(e){

e.preventDefault();

const valid=
validateProduct() &
validateQuantity() &
validateDate() &
validateAddress() &
validateNote() &
validatePayment();

if(valid){

confirmBox.style.display="block";

const p=product.options[product.selectedIndex].text;
const q=quantity.value;
const d=deliveryDate.value;

const total=(prices[product.value]*q).toLocaleString("vi-VN");

orderSummary.innerHTML=`
Sản phẩm: ${p} <br>
Số lượng: ${q} <br>
Ngày giao: ${d} <br>
Tổng tiền: ${total} đ
`;

}

});


document.getElementById("confirmBtn").onclick=function(){

confirmBox.style.display="none";

form.style.display="none";

successMessage.innerHTML="Đặt hàng thành công 🎉";

};

document.getElementById("cancelBtn").onclick=function(){

confirmBox.style.display="none";

};