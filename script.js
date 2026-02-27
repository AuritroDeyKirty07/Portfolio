document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page-transition");
  if (!page) return; // safety check

  // Fade in
  setTimeout(() => {
    page.classList.add("show");
  }, 50);

  // Fade out on internal link click
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
});

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
