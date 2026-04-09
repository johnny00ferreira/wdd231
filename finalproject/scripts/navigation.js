const menu = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    menu.setAttribute("aria-expanded", isOpen);
});