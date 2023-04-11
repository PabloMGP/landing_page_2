window.addEventListener("DOMContentLoaded", () => {

});

const toggleMenu = document.querySelector(".toggle-navbar");
const mainContainer = document.querySelector(".main-container");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    mainContainer.classList.toggle("active");
    if (window.matchMedia("(max-width: 300px)").matches) {
        toggleMenu.classList.remove("active");
        mainContainer.classList.remove("active");
    }
})