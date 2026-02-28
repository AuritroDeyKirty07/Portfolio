document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[data-skeleton]").forEach(link => {
      link.addEventListener("click", () => {
        const skelId = link.getAttribute("data-skeleton");
        const skel = document.getElementById(skelId);
        if (skel) {
          skel.classList.add("visible");
          setTimeout(() => skel.classList.remove("visible"), 3000);
        }
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