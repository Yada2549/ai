let isThai = false;
const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', ()=>{
  isThai = !isThai;

  document.getElementById('history-title').textContent = isThai ? "สรุปผล" : "Result Summation...";
  document.getElementById('desc-title').textContent = isThai ? "คำอธิบาย" : "Description";

  document.querySelectorAll('#desc-list li').forEach(li=>{
    const span = li.querySelector('span.accuracy');
    if(span){
      if(span.classList.contains('high')) {
        span.textContent = isThai ? "เขียว" : "Green";
        li.childNodes[0].nodeValue = " ";
        li.lastChild.nodeValue = isThai ? " หมายถึงคะแนน 80% ขึ้นไป." : " indicates accuracy of 80% or higher.";
      }
      else if(span.classList.contains('medium')) {
        span.textContent = isThai ? "เหลือง" : "Yellow";
        li.childNodes[0].nodeValue = " ";
        li.lastChild.nodeValue = isThai ? " หมายถึงคะแนน 50%-79%" : " indicates accuracy between 50%-79%.";
      }
      else if(span.classList.contains('low')) {
        span.textContent = isThai ? "แดง" : "Red";
        li.childNodes[0].nodeValue = " ";
        li.lastChild.nodeValue = isThai ? " หมายถึงคะแนนต่ำกว่า 50%" : " indicates accuracy of 49% or lower.";
      }
    }
    else{
      li.childNodes.forEach(node=>{
        if(node.nodeType === 3) node.nodeValue = li.dataset[isThai?'th':'en'];
      });
    }
  });
});

// ข้อมูลตัวอย่าง รอ backend จริง
const backendData = [
  {name:"67090500001_Sawaddee Meechai_AI-Midterm-Exam.PDF", accuracy:85},
  {name:"67090500002_Tamkwamdee Sresuk_AI-Midterm-Exam.PDF", accuracy:71},
];

const list = document.getElementById('history-list');
backendData.forEach(file=>{
  const item = document.createElement('div');
  item.className = "history-item";

  // คลิกทั้งแถว
  item.addEventListener('click', ()=>{
    item.classList.toggle('selected');
    alert('คุณคลิกไฟล์: ' + file.name);
  });

  const info = document.createElement('div');
  info.className = "file-info";

  const icon = document.createElement('div');
  icon.className = "file-icon";
  icon.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8e44ad" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>`;

  const name = document.createElement('div');
  name.className = "file-name";
  name.textContent = file.name;

  info.appendChild(icon);
  info.appendChild(name);

  const acc = document.createElement('div');
  acc.className = "accuracy";
  if(file.accuracy >= 80) acc.classList.add("high");
  else if(file.accuracy >= 50) acc.classList.add("medium");
  else acc.classList.add("low");
  acc.textContent = file.accuracy + "%";

  item.appendChild(info);
  item.appendChild(acc);
  list.appendChild(item);
});