const nameInput=document.getElementById("name");
const scoreInput=document.getElementById("score");
const addBtn=document.getElementById("addBtn");

const searchInput=document.getElementById("search");
const filterSelect=document.getElementById("filter");

const tableBody=document.getElementById("tableBody");
const scoreHeader=document.getElementById("scoreHeader");

const noResult=document.getElementById("noResult");

let students=[];

let sortAsc=true;


function getRank(score){

if(score>=8.5) return "Giỏi";
if(score>=7) return "Khá";
if(score>=5) return "Trung bình";

return "Yếu";

}


function addStudent(){

const name=nameInput.value.trim();
const score=parseFloat(scoreInput.value);

if(name==="" || isNaN(score) || score<0 || score>10){

alert("Dữ liệu không hợp lệ");
return;

}

students.push({name,score});

nameInput.value="";
scoreInput.value="";
nameInput.focus();

applyFilters();

}

addBtn.addEventListener("click",addStudent);

function renderTable(list){

tableBody.innerHTML="";

if(list.length===0){

noResult.style.display="block";
return;

}

noResult.style.display="none";

list.forEach((sv,index)=>{

const tr=document.createElement("tr");

if(sv.score<5){
tr.classList.add("low");
}

tr.innerHTML=`

<td>${index+1}</td>
<td>${sv.name}</td>
<td>${sv.score}</td>
<td>${getRank(sv.score)}</td>
<td><button class="deleteBtn" data-name="${sv.name}">Xóa</button></td>

`;

tableBody.appendChild(tr);

});

}

function applyFilters(){

let filtered=[...students];

const keyword=searchInput.value.toLowerCase();

filtered=filtered.filter(sv =>
sv.name.toLowerCase().includes(keyword)
);

const filter=filterSelect.value;

if(filter!=="all"){

filtered=filtered.filter(sv =>
getRank(sv.score)===filter
);

}

filtered.sort((a,b)=>{

return sortAsc ? a.score-b.score : b.score-a.score;

});

renderTable(filtered);

}

searchInput.addEventListener("input",applyFilters);

filterSelect.addEventListener("change",applyFilters);

scoreHeader.addEventListener("click",()=>{

sortAsc=!sortAsc;

scoreHeader.textContent=
sortAsc ? "Điểm ▲" : "Điểm ▼";

applyFilters();

});


tableBody.addEventListener("click",(e)=>{

if(e.target.classList.contains("deleteBtn")){

const name=e.target.getAttribute("data-name");

students=students.filter(sv=>sv.name!==name);

applyFilters();

}

});