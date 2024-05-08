function validarFormulario1() {
    // Obtiene los valores de los campos
    let email = document.getElementById('mail');
    let nombre = document.getElementById('nombre');
    let mensaje = document.getElementById('mensaje');

    // Verifica que los campos no estén vacíos
    if (email.value === '' || nombre.value === '' || mensaje.value === '') {
        alert('Todos los campos son obligatorios');
        return false; // Detiene el envío del formulario
    }

    // Retorna true solo si la validación pasa con éxito
    return true;
}

function validarFormulario2() {
    let emailSuscripcion = document.getElementById('email-suscripcion');

    // Valida el primer formulario
    if (emailSuscripcion.value === '') {
        alert('Por favor, llena el campo de correo electrónico.');
        return false;
    }

    // Si el primer formulario es válido, llama a la función para enviar el correo
    enviarCorreo();
    
    // Retorna true solo si la validación pasa con éxito
    return true;
}

// Función para detener el envío del formulario al hacer clic en el botón "Suscribirme" en el primer formulario
document.getElementById('boton-suscribirme').addEventListener('click', function(event) {
    // Detiene el comportamiento predeterminado del botón
    event.preventDefault();

    // Realiza la validación del segundo formulario
    if (validarFormulario2()) {
        // Envía el formulario
        document.getElementById('form-suscripcion').submit();
    }
});

// Función para detener el envío del formulario al hacer clic en el botón "Enviar" en el segundo formulario
document.querySelector('.boton-enviar').addEventListener('click', function(event) {
    // Detiene el comportamiento predeterminado del botón
    event.preventDefault();

    // Realiza la validación del primer formulario
    if (validarFormulario1()) {
        // Envía el formulario
        document.getElementById('form-suscripcion').submit();
    }
});

function enviarCorreo() {
    var email = document.getElementById('email-suscripcion').value;
    console.log('Email registrado:', email);
    alert('El correo electrónico ' + email + ' ha sido registrado.');
}
