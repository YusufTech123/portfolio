const menuToggle = document.querySelector(".menuToggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});
