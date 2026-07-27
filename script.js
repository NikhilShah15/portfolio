/* ==========================================
        TYPING EFFECT
========================================== */

const typingText = document.getElementById("typing");

const words = [
    "Data Analyst",
    "Python Developer",
    "SQL Enthusiast",
    "Machine Learning Learner",
    "Power BI Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* ==========================================
        STICKY NAV ACTIVE LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
        MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* ==========================================
        SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

".skill-card,.project-card,.dashboard-card,.cert-card,.contact-card,.about-content,.about-image"

);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==========================================
        SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
        YEAR
========================================== */

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML =

        `© ${new Date().getFullYear()} All Rights Reserved`;

}