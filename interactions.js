const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".page-wrapper > section, .project-card").forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      return;
    }

    element.classList.add("js-reveal");
    revealObserver.observe(element);
  });
}

if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  const hero = document.querySelector(".hero");
  const photoFrame = document.querySelector(".photo-frame");

  if (hero && photoFrame) {
    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
      const rotateX = vertical * -5;
      const rotateY = horizontal * 5;
      photoFrame.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(3deg) translateZ(24px)`;
    });

    hero.addEventListener("pointerleave", () => {
      photoFrame.style.removeProperty("transform");
    });
  }
}