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

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", x + "px");
      card.style.setProperty("--y", y + "px");

      const centerX = rect.width  / 2;
      const centerY = rect.height / 2;

      const rotateX =  (y - centerY) / 20;
      const rotateY = -(x - centerX) / 20;

      card.style.transition = "transform 0.08s ease";
      card.style.transform  = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.45s ease";
      card.style.transform  = "rotateX(0) rotateY(0) scale(1)";
    });
  });

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