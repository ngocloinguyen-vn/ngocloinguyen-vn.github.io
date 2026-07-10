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

// =========================
// GALLERY IMAGE ZOOM
// =========================

document.querySelectorAll(".gallery.multi img").forEach(img => {

    img.addEventListener("click", function(){

        if(this.classList.contains("zoom")){

            this.classList.remove("zoom");

            document.querySelector(".gallery-overlay")?.remove();

            return;

        }

        // đóng ảnh khác nếu đang mở
        document.querySelectorAll(".gallery.multi img.zoom").forEach(i=>{
            i.classList.remove("zoom");
        });

        document.querySelector(".gallery-overlay")?.remove();

        // tạo nền tối
        const overlay=document.createElement("div");
        overlay.className="gallery-overlay";

        document.body.appendChild(overlay);

        this.classList.add("zoom");

        overlay.onclick=()=>{

            this.classList.remove("zoom");
            overlay.remove();

        };

    });

});




