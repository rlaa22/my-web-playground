const demoBtn = document.querySelector("#demoBtn");
const demoText = document.querySelector("#demoText");
demoBtn.addEventListener("click", function () {
  demoText.textContent = "You did it! لقد نفّذت أول تفاعل JavaScript 🎉";
  demoBtn.textContent = "تم التفاعل ✓";
});

const themeBtn = document.querySelector("#themeBtn");
function toggleTheme() {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☾" : "☼";
  showMessage(document.body.classList.contains("light") ? "تم تفعيل الوضع الفاتح ☀️" : "تم تفعيل الوضع الداكن 🌙");
}
themeBtn.addEventListener("click", toggleTheme);
document.querySelector("#themeCard").addEventListener("click", toggleTheme);

const colors = ["#65a6ff", "#b69aff", "#55d9ed", "#ff9bba"];
let colorIndex = 0;
document.querySelector("#colorCard").addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;
  document.documentElement.style.setProperty("--blue", colors[colorIndex]);
  showMessage("تم تغيير لون التمييز ✨");
});

const messages = [
  "كل مطوّر بدأ بسطر كود واحد. استمري! 🚀",
  "التجربة والخطأ جزء طبيعي من رحلة التعلم.",
  "افهمي الفكرة، جرّبيها، ثم اصنعي شيئًا خاصًا بك.",
  "Small steps lead to big projects. ✨"
];
document.querySelector("#messageCard").addEventListener("click", function () {
  const index = Math.floor(Math.random() * messages.length);
  showMessage(messages[index]);
});

function showMessage(text) {
  document.querySelector("#message").textContent = text;
}
document.querySelector("#topCard").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  showMessage("أهلًا بك من جديد في بداية الرحلة!");
});
