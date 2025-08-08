// main.js - Custom JavaScript for Mutahhar's Portfolio

// ========== 1. Theme Toggle ==========
const toggleSwitch = document.querySelector("#theme-toggle");
const body = document.body;

// Check and apply stored theme on load
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
};

// Toggle dark/light theme and save preference
toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  toggleSwitch.innerHTML = theme === "dark" ? "☀️" : "🌙";
});

// ========== 2. AOS Animation ==========
AOS.init({
  duration: 800,
  offset: 200,
  once: true
});

// ========== 3. Typed.js for Home ==========
const typedElement = document.querySelector(".typed-text");

if (typedElement) {
  new Typed(typedElement, {
    strings: ["BS Data Science Student", "PUAN Member", "PowerPoint Expert", "Lifelong Learner"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
  });
}

