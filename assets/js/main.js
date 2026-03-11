function sendMail() {
    window.location.href = "mailto:firon1285@gmail.com.com?subject=Portfolio Inquiry";
}

/* MENU SHOW */ 
const toggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-items");

toggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});

document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});


/* FOR SCROL EFFECT */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('section[id]', {
    distance: '50px',
    duration: 300,
    easing: 'ease-in-out',
    origin: 'top',
    interval: 200
});