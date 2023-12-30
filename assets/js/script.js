

// animacion logo
// Obtiene la referencia a la imagen por su ID

const logoImage = document.getElementById('logoImage');

// Función para iniciar la animación
function iniciarAnimacion() {
    logoImage.classList.add('animacion');
}

// Agrega un controlador de eventos al cargar la página
window.addEventListener('load', iniciarAnimacion);

// Agrega un controlador de eventos al hacer clic en la imagen
logoImage.addEventListener('click', () => {
    // Reinicia la animación al hacer clic
    logoImage.classList.remove('animacion');
    void logoImage.offsetWidth; // Esto fuerza un reinicio de la animación
    logoImage.classList.add('animacion');
});





