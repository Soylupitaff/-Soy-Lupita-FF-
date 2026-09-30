const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

const toast = document.getElementById("toast");
document.getElementById("helloBtn").addEventListener("click", () => {
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
});
