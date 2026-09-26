const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const langToggle = document.getElementById("langToggle");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menu?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

let lang = "en";
langToggle?.addEventListener("click", () => {
  lang = lang === "en" ? "bm" : "en";
  document.documentElement.lang = lang === "en" ? "en" : "ms";
  langToggle.textContent = lang === "en" ? "BM" : "EN";
  document.querySelectorAll("[data-en][data-bm]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
});
