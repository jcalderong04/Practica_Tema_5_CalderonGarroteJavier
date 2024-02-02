document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita que el formulario se envíe automáticamente

    var nombre = document.getElementById('nombre');
    var edad = document.getElementById('edad');
    var comentario = document.getElementById('comentario');
    var fecha = document.getElementById('fecha');

    nombre.classList.remove('ValidacionCorrecta', 'ErrorValidacion');
    edad.classList.remove('ValidacionCorrecta', 'ErrorValidacion');
    comentario.classList.remove('ValidacionCorrecta', 'ErrorValidacion');
    fecha.classList.remove('ValidacionCorrecta', 'ErrorValidacion');

    if (nombre.value.length < 3 || nombre.value.length > 50) {
        nombre.classList.add('ErrorValidacion');
    } else {
        nombre.classList.add('ValidacionCorrecta');
    }

    if (edad.value < 18 || edad.value > 120) {
        edad.classList.add('ErrorValidacion');
    } else {
        edad.classList.add('ValidacionCorrecta');
    }

    if (comentario.value.length < 50 || comentario.value.length > 150) {
        comentario.classList.add('ErrorValidacion');
    } else {
        comentario.classList.add('ValidacionCorrecta');
    }

    if (fecha.value.length === 0) {
        fecha.classList.add('ErrorValidacion');
    } else {
        fecha.classList.add('ValidacionCorrecta');
    }

    // Verifica si todos los campos tienen la clase ValidacionCorrecta
    if (nombre.classList.contains('ValidacionCorrecta') &&
        edad.classList.contains('ValidacionCorrecta') &&
        comentario.classList.contains('ValidacionCorrecta') &&
        fecha.classList.contains('ValidacionCorrecta')) {

        // Muestra un alert y envía el formulario
        alert('Formulario enviado correctamente');
        document.getElementById('miFormulario').submit();
    }
});
