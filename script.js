// ---------------- Language toggle ----------------
let isThai=false;
const historyLabels={ en:"History...", th:"ประวัติ..." };
function toggleLanguage(){
  isThai=!isThai;
  document.getElementById('history-title').textContent = isThai ? historyLabels.th : historyLabels.en;
}

// ---------------- Profile functions ----------------
function setUsername(username){ document.getElementById('profile-name').textContent=username; }

function changeProfile(src){
  const avatar=document.getElementById('profile-avatar');
  const img=document.getElementById('profile-img');
  if(src){ img.src=src; avatar.classList.add('has-image'); }
  else{ img.src=''; avatar.classList.remove('has-image'); }
}

// ---------------- Nav animation ----------------
document.querySelectorAll('.nav-buttons button').forEach(button=>{
  button.addEventListener('click',()=>{
    button.style.transform='scale(0.95)';
    setTimeout(()=>button.style.transform='scale(1)',150);
  });
});

// ---------------- Render history from backend ----------------
function renderHistory(dataArray){
  const list=document.getElementById('history-list');
  const template=document.querySelector('.history-item.template');
  list.querySelectorAll('.history-item:not(.template)').forEach(e=>e.remove());

  dataArray.forEach(file=>{
    const item=template.cloneNode(true);
    item.classList.remove('template');
    item.style.display='flex';
    item.querySelector('.file-name').textContent=file.name;
    item.querySelector('.file-date').textContent=file.date;

    // คลิกรีแอคชั่น
    item.addEventListener('click',()=>{
      item.classList.toggle('selected');
      console.log("คุณคลิกไฟล์: " + file.name);
    });

    list.appendChild(item);
  });
}

// ---------------- Example backend data ----------------
const backendData=[
  {name:"Correct Answer - AI Midterm Exam.PDF", date:"24/04/66"},
  {name:"Correct Answer - Statistic Final Exam.PDF", date:"02/11/65"},
  {name:"Correct Answer - Statistic Midterm Exam.PDF", date:"17/03/65"},
  {name:"Correct Answer - Data Structure Final Exam.PDF", date:"08/12/64"},
];

// render เมื่อมีข้อมูลจาก backend
renderHistory(backendData);