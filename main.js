const nav = document.querySelector("#nav");
const menu = document.querySelector(".mobile-menu");
const preloader = document.querySelector("#preloader");
const loaderStatus = document.querySelector("#loaderStatus");

menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

window.addEventListener("load", () => {
  setTimeout(() => {
    if (loaderStatus) loaderStatus.textContent = "SYSTEM READY";
    setTimeout(() => preloader?.classList.add("done"), 220);
  }, 650);
});

document.getElementById("year").textContent = new Date().getFullYear();
