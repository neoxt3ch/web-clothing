// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Humburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
