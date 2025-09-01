script.js

// Select menu toggle button and nav links

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

// Toggle navbar open/close when clicking the hamburger menu

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// Close menu automatically when a link is clicked (mobile view)

const links = navLinks.querySelectorAll("a");

links.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});