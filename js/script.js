// =========================
// Highlight navbar after scrolling
// Thêm hiệu ứng cho header khi cuộn trang
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(header){

        if(window.scrollY > 50){
            header.classList.add("scrolled");
        } 
        else {
            header.classList.remove("scrolled");
        }

    }

});


// =========================
// MOBILE NAVBAR TOGGLE
// Mở / đóng menu hamburger trên điện thoại
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");


if(menuToggle && navMenu){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}
