const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");
const stats = document.getElementById("stats");

let students = [];

function getRank(score){
    if(score >= 8.5) return "Giỏi";
    if(score >= 7) return "Khá";
    if(score >= 5) return "Trung bình";
    return "Yếu";
}

function renderTable(){

    tableBody.innerHTML="";

    students.forEach((sv,index)=>{

        const tr=document.createElement("tr");

        if(sv.score <5){
            tr.classList.add("low");
        }

        tr.innerHTML=`
        <td>${index+1}</td>
        <td>${sv.name}</td>
        <td>${sv.score}</td>
        <td>${getRank(sv.score)}</td>
        <td><button data-index="${index}" class="deleteBtn">Xóa</button></td>
        `;

        tableBody.appendChild(tr);
    });

    updateStats();
}

function updateStats(){

    const total=students.length;

    let avg=0;

    if(total>0){
        const sum=students.reduce((s,sv)=>s+sv.score,0);
        avg=(sum/total).toFixed(2);
    }

    stats.textContent=`Tổng SV: ${total} | Điểm TB: ${avg}`;
}

function addStudent(){

    const name=nameInput.value.trim();
    const score=parseFloat(scoreInput.value);

    if(name==="" || isNaN(score) || score<0 || score>10){
        alert("Nhập dữ liệu hợp lệ!");
        return;
    }

    students.push({
        name:name,
        score:score
    });

    renderTable();

    nameInput.value="";
    scoreInput.value="";

    nameInput.focus();
}

addBtn.addEventListener("click",addStudent);

scoreInput.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        addStudent();
    }
});

tableBody.addEventListener("click",function(e){

    if(e.target.classList.contains("deleteBtn")){

        const index=e.target.getAttribute("data-index");

        students.splice(index,1);

        renderTable();
    }

});