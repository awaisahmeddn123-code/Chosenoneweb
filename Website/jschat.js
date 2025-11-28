// NAV MENU
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// DARK MODE
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");

  if (current === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
    themeToggle.textContent = "Dark";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "Light";
  }
});

// LOAD SAVED THEME
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.textContent = "Light";
}

// BACK TO TOP BUTTON
const backTop = document.getElementById("back-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) backTop.style.display = "block";
  else backTop.style.display = "none";
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// CONTACT FORM VALIDATION
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  alert("Message sent successfully (demo).");
  this.reset();
});

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();
