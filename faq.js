window.addEventListener("scroll", function() {
    let button = document.querySelector(".back-to-top");
    if (button) {
        if (window.pageYOffset > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
});

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    // Esto previene la recarga de la página
    event.preventDefault();

    // Obtén el texto ingresado por el usuario
    let feedback = document.getElementById('feedback').value;

    // Verifica si el usuario ingresó algún texto
    if (feedback.trim() !== '') {
        // Si el usuario ingresó algún texto, muestra el mensaje de agradecimiento
        document.getElementById('thankyou-message').style.display = 'block';
    } else {
        // Si el usuario no ingresó ningún texto, puedes mostrar un mensaje de error o hacer algo más
        alert('Por favor, ingresa tu opinión antes de enviar.');
    }
});
