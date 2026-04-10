let isThai = false;
const langBtn = document.getElementById('lang-btn');
const correctFileText = document.getElementById('correct-file-text');
const calculateBtn = document.getElementById('calculate-btn');
const landingTitle = document.getElementById('landing-title');

langBtn.addEventListener('click', ()=>{
  isThai = !isThai;

  document.getElementById('desc-title').textContent = isThai ? "คำอธิบาย" : "Description";
  correctFileText.textContent = isThai ? "ใส่ไฟล์คำตอบที่ถูกต้อง..." : "Put the correct answer file here...";
  calculateBtn.textContent = isThai ? "คำนวณคำตอบ" : "Calculate the Answer";
  landingTitle.textContent = isThai ? "หน้าแรก" : "Landing Page";

  document.querySelectorAll('#desc-list li').forEach(li=>{
    const span = li.querySelector('span.accuracy');
    if(span){
      if(span.classList.contains('high')) span.textContent = isThai ? "เขียว" : "Green";
      else if(span.classList.contains('medium')) span.textContent = isThai ? "เหลือง" : "Yellow";
      else if(span.classList.contains('low')) span.textContent = isThai ? "แดง" : "Red";
      li.childNodes.forEach(node => { if(node.nodeType === 3) node.nodeValue = ""; });
      li.lastChild.nodeValue = isThai ?
        li.dataset.th.split(" ")[1] : li.dataset.en.split(" ")[1];
    } else {
      li.childNodes.forEach(node=>{ if(node.nodeType === 3) node.nodeValue = li.dataset[isThai?'th':'en']; });
    }
  });
});

// Template example
const historyList = document.getElementById('history-list');
const templateItem = document.querySelector('.file-item.template');
const uploadedCount = document.getElementById('uploaded-count');

const backendData = [
  {name:"67090500001_Sawaddee Meechai_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500002_Tankwamdee Sresuk_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500003_Arsara Buach_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500004_Somchai_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500005_Jane_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500006_John_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500007_Mike_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500008_Sara_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500009_Alice_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500010_Bob_AI-Midterm-Exam.PDF", date:"2026-04-10"},
  {name:"67090500011_Extra_AI-Midterm-Exam.PDF", date:"2026-04-10"},
];

const maxFiles = 10;
const filesToDisplay = backendData.slice(0, maxFiles);

filesToDisplay.forEach(file=>{
  const item = templateItem.cloneNode(true);
  item.style.display="flex"; item.classList.remove('template');
  item.querySelector('.file-name').textContent = file.name;
  item.querySelector('.file-date').textContent = file.date;
  item.addEventListener('click', ()=>{
    document.querySelectorAll('.file-item').forEach(i=>i.classList.remove('selected'));
    item.classList.add('selected');
  });
  historyList.appendChild(item);
});

uploadedCount.textContent = `${filesToDisplay.length}/${maxFiles} files`;

// Calculate button
document.querySelector('.calculate-btn').addEventListener('click', ()=>{
  alert('Calculating answers...');
});