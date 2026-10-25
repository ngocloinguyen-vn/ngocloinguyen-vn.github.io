// Mobile navigation toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

if (menuToggle && navMenu) {
    const setMenuOpen = (isOpen) => {
        navMenu.classList.toggle("show", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    };

    menuToggle.addEventListener("click", () => {
        setMenuOpen(!navMenu.classList.contains("show"));
    });

    navMenu.addEventListener("click", (event) => {
        if (event.target.closest("a")) setMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navMenu.classList.contains("show")) {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });
}

// Gallery image zoom
const galleryImages = document.querySelectorAll(".gallery.multi img");

galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
        const currentOverlay = document.querySelector(".gallery-overlay");

        if (this.classList.contains("zoom")) {
            this.classList.remove("zoom");
            if (currentOverlay) currentOverlay.remove();
            return;
        }

        document.querySelectorAll(".gallery.multi img.zoom").forEach((image) => {
            image.classList.remove("zoom");
        });

        if (currentOverlay) currentOverlay.remove();

        const overlay = document.createElement("div");
        overlay.className = "gallery-overlay";
        document.body.appendChild(overlay);
        this.classList.add("zoom");

        overlay.addEventListener("click", () => {
            this.classList.remove("zoom");
            overlay.remove();
        });
    });
});
