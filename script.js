const themeToggle = document.querySelector('#themeToggle');
const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.innerHTML = isLight ? '☾ <span>الوضع الداكن</span>' : '☼ <span>المظهر</span>';
  showToast(isLight ? 'تم تفعيل الوضع النهاري' : 'تم تفعيل الوضع الليلي');
});

document.querySelector('#heroTry').addEventListener('click', () => {
  document.querySelector('#demoMessage').textContent = 'أهلًا بك في عالم JavaScript!';
  document.querySelector('#essentials').scrollIntoView({ behavior: 'smooth' });
  showToast('هذا مثال على التفاعل باستخدام JavaScript');
});

let clicks = 0;
const message = document.querySelector('#demoMessage');
const clickCount = document.querySelector('#clickCount');
document.querySelector('#changeText').addEventListener('click', () => {
  clicks += 1;
  message.textContent = clicks % 2 ? 'Hello, JavaScript! ✨' : 'JavaScript makes pages interactive.';
  clickCount.textContent = `عدد النقرات: ${clicks}`;
});

document.querySelector('#cssDemo').addEventListener('click', (event) => {
  const result = event.currentTarget.closest('.css-result');
  result.classList.toggle('applied');
  event.currentTarget.textContent = result.classList.contains('applied') ? 'إزالة التنسيق' : 'طبّق التنسيق';
  showToast(result.classList.contains('applied') ? 'تم تطبيق تنسيق CSS' : 'تمت إعادة المعاينة');
});

document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', async () => {
    const code = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(code);
      showToast('تم نسخ الكود بنجاح');
    } catch {
      showToast('ميزة النسخ تحتاج تشغيل الصفحة عبر localhost أو HTTPS');
    }
  });
});
