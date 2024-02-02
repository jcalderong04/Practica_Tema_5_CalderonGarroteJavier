//Prueba del github de mierda

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('miFormulario');

    function validarNombre() {
        var nombreInput = document.getElementById('nombre');
        var valor = nombreInput.value.trim();

        if (valor.length < 3 || valor.length > 50) {
            nombreInput.classList.remove('ValidacionCorrecta');
            nombreInput.classList.add('ErrorValidacion');
        } else {
            nombreInput.classList.remove('ErrorValidacion');
            nombreInput.classList.add('ValidacionCorrecta');
        }
    }

    function validarEdad() {
        var edadInput = document.getElementById('edad');
        var valor = parseInt(edadInput.value, 10);

        if (isNaN(valor) || valor < 18 || valor > 120) {
            edadInput.classList.remove('ValidacionCorrecta');
            edadInput.classList.add('ErrorValidacion');
        } else {
            edadInput.classList.remove('ErrorValidacion');
            edadInput.classList.add('ValidacionCorrecta');
        }
    }

    function validarComentario() {
        var comentarioInput = document.getElementById('comentario');
        var valor = comentarioInput.value.trim();

        if (valor.length < 50 || valor.length > 150) {
            comentarioInput.classList.remove('ValidacionCorrecta');
            comentarioInput.classList.add('ErrorValidacion');
        } else {
            comentarioInput.classList.remove('ErrorValidacion');
            comentarioInput.classList.add('ValidacionCorrecta');
        }
    }

    function validarFecha() {
        var fechaInput = document.getElementById('fecha');
        var valor = fechaInput.value.trim();

        if (valor.length === 0) {
            fechaInput.classList.remove('ValidacionCorrecta');
            fechaInput.classList.add('ErrorValidacion');
        } else {
            fechaInput.classList.remove('ErrorValidacion');
            fechaInput.classList.add('ValidacionCorrecta');
        }
    }

    form.addEventListener('input', function (event) {
        var inputId = event.target.id;

        switch (inputId) {
            case 'nombre':
                validarNombre();
                break;
            case 'edad':
                validarEdad();
                break;
            case 'comentario':
                validarComentario();
                break;
            case 'fecha':
                validarFecha();
                break;
            default:
                break;
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        alert('Formulario enviado correctamente');
        form.submit();
    });
});
