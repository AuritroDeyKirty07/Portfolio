document.addEventListener("DOMContentLoaded", () => {

  const page = document.querySelector(".page-transition");
  if (page) {
    setTimeout(() => page.classList.add("show"), 50);

    document.querySelectorAll("a[href]").forEach(link => {
      const href = link.getAttribute("href");
      const isExternal = link.target === "_blank";
      const isAnchor   = href.startsWith("#");
      const isMailto   = href.startsWith("mailto:");

      if (!isExternal && !isAnchor && !isMailto) {
        link.addEventListener("click", e => {
          e.preventDefault();
          page.classList.add("fade-out");
          setTimeout(() => { window.location.href = link.href; }, 450);
        });
      }
    });
  }

  const toggleBtn = document.getElementById("toggle-mode");
  if (toggleBtn) {

    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-mode");
      toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-mode");
      toggleBtn.textContent = isLight ? "☀️" : "🌙";
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }


  const intro = document.getElementById("intro-title");
  if (intro) {
    setTimeout(() => {
      intro.style.transition = "opacity 1.1s ease, transform 1.1s ease";
      intro.style.opacity = "1";
      intro.style.transform = "translateX(0)";
    }, 400);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

});