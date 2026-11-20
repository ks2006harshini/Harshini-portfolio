
/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";

});


/* CLOSE MENU AFTER CLICKING A LINK */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.setAttribute("aria-label", "Open navigation");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   TYPING ANIMATION
========================= */

const roles = [
    "Full Stack Developer",
    "Python Developer",
    "IT Student",
    "Cloud Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const typingElement = document.getElementById("typing");

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex = (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(typingEffect, deleting ? 50 : 100);

}


/* START ANIMATION */

typingEffect();
