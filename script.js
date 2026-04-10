let isThai = false;

function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if(!username || !password){
    alert(isThai ? 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' : 'Please fill username and password');
    return;
  }
  alert(isThai ? `เข้าสู่ระบบ: ${username}` : `Login: ${username}`);
}

function togglePassword() {
  const input = document.getElementById("password");
  const eye = document.getElementById("eyeIcon");

  if (input.type === "password") {
    input.type = "text";
    eye.innerHTML = `
      <circle cx="12" cy="12" r="3"/>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
    `;
  } else {
    input.type = "password";
    eye.innerHTML = `
      <circle cx="12" cy="12" r="3"/>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    `;
  }
}

function toggleLanguage() {
  isThai = !isThai;
  if(isThai){
    document.getElementById('login-title').textContent = 'เข้าสู่ระบบ';
    document.getElementById('username').placeholder = 'กรอกชื่อผู้ใช้';
    document.getElementById('password').placeholder = 'กรอกรหัสผ่าน';
    document.getElementById('forgot-text').textContent = 'ลืมรหัสผ่าน?';
    document.getElementById('login-btn').textContent = 'เข้าสู่ระบบ';
  } else {
    document.getElementById('login-title').textContent = 'LOG-IN';
    document.getElementById('username').placeholder = 'Enter your name...';
    document.getElementById('password').placeholder = 'Enter your password...';
    document.getElementById('forgot-text').textContent = 'forgot your password';
    document.getElementById('login-btn').textContent = 'LOG-IN';
  }
}

// Nav buttons animation
document.querySelectorAll('.nav-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => button.style.transform = 'scale(1)', 150);
  });
});

// Forgot password click animation
document.getElementById('forgot-text').addEventListener('click', () => {
  const f = document.getElementById('forgot-text');
  f.style.transform = 'scale(0.95)';
  setTimeout(() => f.style.transform = 'scale(1)', 150);
});

// Login button click animation
document.getElementById('login-btn').addEventListener('click', () => {
  const b = document.getElementById('login-btn');
  b.style.transform = 'scale(0.97)';
  setTimeout(() => b.style.transform = 'scale(1)', 150);
});

// Change profile from backend
function changeProfile(src) {
  const avatar = document.getElementById('profile-avatar');
  const img = document.getElementById('profile-img');
  const svg = document.querySelector('#profile-avatar .avatar-placeholder');

  if(src) {
    img.src = src;
    avatar.classList.add('has-image');
  } else {
    img.src = '';
    avatar.classList.remove('has-image');
  }
}