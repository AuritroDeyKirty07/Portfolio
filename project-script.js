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

document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.transition = "transform 0.1s ease";

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", x + "px");
      card.style.setProperty("--y", y + "px");

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 18;
      const rotateY = (centerX - x) / 18;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.4s ease";
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
});
  });


  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach((el) => {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});