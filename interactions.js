const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const networkStatus = document.createElement("div");
networkStatus.className = "network-status";
networkStatus.setAttribute("role", "status");
networkStatus.setAttribute("aria-live", "polite");
document.body.appendChild(networkStatus);

function updateNetworkStatus() {
  const isOffline = !navigator.onLine;
  networkStatus.classList.toggle("is-offline", isOffline);
  networkStatus.textContent = isOffline
    ? "You are offline. The saved portfolio pages are still available."
    : "";
}

window.addEventListener("offline", updateNetworkStatus);
window.addEventListener("online", updateNetworkStatus);
updateNetworkStatus();

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Offline support could not be enabled:", error);
    });
  });
}

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