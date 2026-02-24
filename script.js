// Dark mode toggle
const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Intro animation within first 7 seconds
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-title");

  setTimeout(() => {
    intro.style.transition = "all 1.2s ease";
    intro.style.opacity = "1";
    intro.style.transform = "translateY(0)";
  }, 600); // starts quickly after load
});