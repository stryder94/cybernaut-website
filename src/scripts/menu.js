document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-links");

    if (!button || !menu) return;

    button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!expanded));
        menu.classList.toggle("open");
    });
});