document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        
        // Verificar si todas las preguntas están contestadas
        if (!validateForm()) {
            alert('InverGest dice: Por favor, responde todas las preguntas para obtener tu perfil de inversor.');
            return;
        }

        // Obtener las respuestas seleccionadas por el usuario
        const answers = {
            question1: document.querySelector('input[name="question1"]:checked').value,
            question2: document.querySelector('input[name="question2"]:checked').value,
            question3: document.querySelector('input[name="question3"]:checked').value,
            question4: document.querySelector('input[name="question4"]:checked').value,
            question5: document.querySelector('input[name="question5"]:checked').value,
            question6: document.querySelector('input[name="question6"]:checked').value
        };

        // Realizar inferencias sobre el perfil de inversor
        let profile = '';

        // Inferir tolerancia al riesgo
        if (answers.question6 === 'option1') {
            profile = 'Conservador';
        } else if (answers.question6 === 'option2') {
            profile = 'Moderado';
        } else {
            profile = 'Agresivo';
        }

        // Inferir horizonte temporal de inversión
        if (answers.question4 === 'option1' || answers.question4 === 'option2') {
            profile += ', a corto plazo';
        } else {
            profile += ', a largo plazo';
        }

        // Mostrar las sugerencias preliminares en la página
        const resultsContainer = document.createElement('div');
        resultsContainer.classList.add('results-container');

        resultsContainer.innerHTML = `
            <h2>Respuestas preliminares:</h2>
            <p>Basado en tus respuestas, tu perfil de inversor preliminar es: <strong>${profile}</strong>.</p>
            <p>Estas son solo respuestas preliminares. En una etapa posterior, te proporcionaremos recomendaciones personalizadas basadas en tu perfil de inversor.</p>
        `;

        // Insertar las respuestas preliminares en la página
        const respuestaTest = document.getElementById('respuestaTest');
        respuestaTest.innerHTML = ''; // Limpiar el contenedor de respuestas previas
        respuestaTest.appendChild(resultsContainer);

        // Limpiar selecciones del usuario
        form.reset();

        // Mover el foco de la página hacia las respuestas
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Función para validar que todas las preguntas estén contestadas
    function validateForm() {
        const questions = document.querySelectorAll('.question');
        for (let i = 0; i < questions.length; i++) {
            const inputs = questions[i].querySelectorAll('input[type="radio"]');
            let answered = false;
            for (let j = 0; j < inputs.length; j++) {
                if (inputs[j].checked) {
                    answered = true;
                    break;
                }
            }
            if (!answered) {
                return false;
            }
        }
        return true;
    }
});
