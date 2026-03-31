document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("timestamp").value = new Date().toISOString();

    document.querySelectorAll("[data-modal]").forEach(button => {
        button.addEventListener("click", () => {
            document.getElementById(button.dataset.modal).showModal();
        });
    });

    document.querySelectorAll("[data-close]").forEach(button => {
        button.addEventListener("click", () => {
            button.closest("dialog").close();
        });
    });

});