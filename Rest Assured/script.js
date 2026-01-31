// Initialize Lucide Icons
lucide.createIcons();

// Scroll Reveal Logic using Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

// Target all elements with the .reveal class
document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});