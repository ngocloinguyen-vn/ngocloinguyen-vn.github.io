// =========================
// MOBILE NAVBAR TOGGLE
// Mở / đóng menu hamburger trên điện thoại
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");


if(menuToggle && navMenu){

    const setMenuOpen = (isOpen) => {
        navMenu.classList.toggle("show", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    };

    menuToggle.addEventListener("click", () => {
        setMenuOpen(!navMenu.classList.contains("show"));
    });

    navMenu.addEventListener("click", (event) => {
        if(event.target.closest("a")){
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if(event.key === "Escape" && navMenu.classList.contains("show")){
            setMenuOpen(false);
            menuToggle.focus();
        }
    });
}



// =========================
// GALLERY IMAGE ZOOM
// Click ảnh để phóng to
// Click lại hoặc nền tối để trở về grid
// Chỉ áp dụng cho gallery.multi
// =========================

const galleryImages = document.querySelectorAll(".gallery.multi img");

const closeZoom = () => {
    const zoomedImage = document.querySelector(".gallery.multi img.zoom");
    const overlay = document.querySelector(".gallery-overlay");

    if(zoomedImage){
        zoomedImage.classList.remove("zoom");
        zoomedImage.setAttribute("aria-pressed", "false");
        zoomedImage.focus();
    }

    if(overlay){
        overlay.remove();
    }
};

const toggleZoom = (img) => {
    if(img.classList.contains("zoom")){
        closeZoom();
        return;
    }

    closeZoom();

    const overlay = document.createElement("div");
    overlay.className = "gallery-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.addEventListener("click", closeZoom);

    document.body.appendChild(overlay);
    img.classList.add("zoom");
    img.setAttribute("aria-pressed", "true");
};

galleryImages.forEach((img) => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-pressed", "false");
    img.setAttribute("aria-label", img.alt ? `Enlarge image: ${img.alt}` : "Enlarge image");

    img.addEventListener("click", () => toggleZoom(img));

    img.addEventListener("keydown", (event) => {
        if(event.key === "Enter" || event.key === " "){
            event.preventDefault();
            toggleZoom(img);
        }
    });
});

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape" && document.querySelector(".gallery-overlay")){
        event.preventDefault();
        closeZoom();
    }
});



