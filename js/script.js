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
// Click ảnh để phóng to
// Click lại hoặc nền tối để trở về grid
// Chỉ áp dụng cho gallery.multi
// =========================

const galleryImages = document.querySelectorAll(".gallery.multi img");


galleryImages.forEach(img => {

    img.addEventListener("click", function(){

        const currentOverlay = document.querySelector(".gallery-overlay");


        // Nếu ảnh đang zoom -> trở lại bình thường
        if(this.classList.contains("zoom")){

            this.classList.remove("zoom");

            if(currentOverlay){
                currentOverlay.remove();
            }

            return;

        }


        // Đóng các ảnh đang zoom khác
        document.querySelectorAll(".gallery.multi img.zoom")
            .forEach(image => {

                image.classList.remove("zoom");

            });


        // Xóa overlay cũ nếu có
        if(currentOverlay){
            currentOverlay.remove();
        }


        // Tạo nền tối
        const overlay = document.createElement("div");

        overlay.className = "gallery-overlay";

        document.body.appendChild(overlay);


        // Zoom ảnh được chọn
        this.classList.add("zoom");


        // Click nền tối để đóng
        overlay.addEventListener("click", () => {

            this.classList.remove("zoom");

            overlay.remove();

        });


    });

});



