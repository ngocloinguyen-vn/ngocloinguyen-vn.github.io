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

// Accessible gallery lightbox. Original files stay available for full-size viewing.
const galleryImages = document.querySelectorAll(".gallery.multi .gallery-zoom img");

if (galleryImages.length && typeof HTMLDialogElement !== "undefined") {
    const dialog = document.createElement("dialog");
    const preview = new Image();
    const closeButton = document.createElement("button");
    let returnFocusTo = null;

    dialog.className = "gallery-dialog";
    dialog.setAttribute("aria-label", "Image preview");
    preview.alt = "";
    closeButton.type = "button";
    closeButton.className = "gallery-dialog-close";
    closeButton.textContent = "Close image";
    dialog.append(closeButton, preview);
    document.body.append(dialog);

    closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
        returnFocusTo?.focus();
        returnFocusTo = null;
        preview.removeAttribute("src");
    });

    galleryImages.forEach((img) => {
        const button = img.closest(".gallery-zoom");
        if (!button) return;

        button.addEventListener("click", () => {
            returnFocusTo = button;
            preview.src = button.dataset.full || img.currentSrc || img.src;
            preview.alt = img.alt;
            dialog.showModal();
            closeButton.focus();
        });
    });
}
