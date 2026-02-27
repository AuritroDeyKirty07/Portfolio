document.addEventListener("DOMContentLoaded", () => {

  /* ================= PAGE TRANSITION ================= */

  const page = document.querySelector(".page-transition");

  if (page) {
    setTimeout(() => {
      page.classList.add("show");
    }, 50);

    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {
      const href = link.getAttribute("href");
      const isExternal = link.target === "_blank";
      const isAnchor = href.startsWith("#");

      if (!isExternal && !isAnchor) {
        link.addEventListener("click", e => {
          e.preventDefault();
          page.classList.add("fade-out");

          setTimeout(() => {
            window.location.href = link.href;
          }, 500);
        });
      }
    });
  }

  /* ================= THEME PERSISTENCE ================= */

  const toggleBtn = document.getElementById("toggle-mode");

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      const theme = document.body.classList.contains("light-mode")
        ? "light"
        : "dark";

      localStorage.setItem("theme", theme);
    });
  }

  /* ================= INTRO ANIMATION ================= */

  const intro = document.getElementById("intro-title");

  if (intro) {
    setTimeout(() => {
      intro.style.transition = "all 1.2s ease";
      intro.style.opacity = "1";
      intro.style.transform = "translateY(0)";
    }, 600);
  }

});
