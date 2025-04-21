// load-navbar.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;

      // Highlight the active nav link
      const currentPage = window.location.pathname.split("/").pop();
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
      navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
          link.classList.add("active");
        }
      });
    });
});
