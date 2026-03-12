document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btn");
    const views = document.querySelectorAll(".view");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 1. Quitar la clase 'active' de todos los botones
            navButtons.forEach(btn => btn.classList.remove("active"));

            // 2. Ocultar todas las secciones
            views.forEach(view => view.classList.remove("active"));

            // 3. Agregar clase 'active' al botón clickeado
            button.classList.add("active");

            // 4. Mostrar la sección correspondiente
            const targetId = button.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });
});