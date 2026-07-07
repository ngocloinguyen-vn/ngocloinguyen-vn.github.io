// Highlight navbar after scrolling

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// =========================
// MOBILE NAVBAR TOGGLE
// Mở / đóng menu trên mobile
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");


if(menuToggle){

    menuToggle.addEventListener("click", function(){

        navMenu.classList.toggle("show");

    });

}
