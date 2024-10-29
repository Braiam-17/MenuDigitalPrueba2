// Función para navegar a una sección específica
function navigateTo(sectionId) {
    document.querySelectorAll('.menu-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    document.querySelector('.menu').style.display = 'none';
}

// Función para volver al menú principal
function backToMenu() {
    document.querySelectorAll('.menu-section').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelector('.menu').style.display = 'block';
}
