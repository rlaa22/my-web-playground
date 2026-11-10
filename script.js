const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  document.body.classList.toggle("light");
  mode.textContent = document.body.classList.contains("light") ? "☾" : "◐";
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
