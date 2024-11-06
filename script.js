document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar el menú principal
    function showMenu() {
        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector('.menu').style.display = 'block';

        // Actualiza el historial solo cuando se va al menú principal
        history.pushState({ section: 'menu' }, "", "");
    }

    // Función para mostrar una sección específica
    function showSection(sectionId) {
        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
        document.querySelector('.menu').style.display = 'none';

        // Agrega la sección al historial
        history.pushState({ section: sectionId }, "", `#${sectionId}`);
    }

    // Configura los botones del menú principal
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });

    // Configura los botones de "Volver" en cada sección
    document.querySelectorAll(".btn-secondary").forEach(button => {
        button.addEventListener("click", function() {
            showMenu();
        });
    });

    // Detecta el evento de retroceso en el navegador
    window.onpopstate = function(event) {
        if (event.state && event.state.section) {
            if (event.state.section === 'menu') {
                showMenu();
            } else {
                showSection(event.state.section);
            }
        } else {
            // Si no hay un estado previo, regresa al menú principal
            showMenu();
        }
    };

    // Carga inicial: muestra la sección según el hash o el menú principal
    if (window.location.hash) {
        const sectionId = window.location.hash.replace('#', '');
        if (document.getElementById(sectionId)) {
            showSection(sectionId);
        } else {
            showMenu();
        }
    } else {
        showMenu();
    }
});