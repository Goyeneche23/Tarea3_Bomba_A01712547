function cortarRojo() {
    document.getElementById("bomba").src = "https://images.freeimages.com/cme/images/istock/previews/2375/23757340-nuclear-explosion.jpg"; 
}

// Función para cortar el cable verde
function cortarVerde() {
    alert("¡Buen trabajo! El cable verde desactivó la bomba.");
    document.body.style.backgroundColor = "green";

}

// Función para resetear el estado
function reset() {
    document.getElementById("bomba").src = "https://c0.klipartz.com/pngpicture/722/170/gratis-png-bomba-de-tiempo-temporizador-detonacion-explosion-bomba.png"; // Imagen original de la bomba
    document.body.style.backgroundColor = "";

}