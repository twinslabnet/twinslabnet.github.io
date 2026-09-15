const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const modal = document.getElementById("videoModal");
const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const video = document.getElementById("labVideo");

function showVideo() {
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  video.play().catch(() => {});
}

function hideVideo() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  video.pause();
  video.currentTime = 0;
  document.body.style.overflow = "";
}

openVideo.addEventListener("click", showVideo);
closeVideo.addEventListener("click", hideVideo);

modal.addEventListener("click", event => {
  if (event.target === modal) hideVideo();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    hideVideo();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

// Subtle parallax for the orbital graphic.
const orbit = document.querySelector(".hero-orbit");

window.addEventListener("scroll", () => {
  if (!orbit || window.innerWidth < 901) return;
  const y = window.scrollY;
  orbit.style.transform = `translateY(calc(-50% + ${y * 0.08}px))`;
}, { passive: true });
