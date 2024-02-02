document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('miFormulario');
    var camposConError = {};  

    

    function cerrarPopup(campo) {
        delete camposConError[campo]; 
        var popup = document.querySelector('.popup');
        if (popup) {
            popup.parentNode.removeChild(popup); 
        }
    }
function mostrarMensajeError(campo, mensaje) {
        if (!camposConError[campo]) {
            camposConError[campo] = true; 
            var popup = document.createElement('div');
            popup.classList.add('popup');
            popup.innerHTML = `<p>${mensaje}</p><button onclick="cerrarPopup('${campo}')">Cerrar</button>`;
            document.body.appendChild(popup);
        }
    }
    function validarNombre() {
        var nombreInput = document.getElementById('nombre');
        var valor = nombreInput.value.trim();

        if (valor.length < 3 || valor.length > 50) {
            mostrarMensajeError('nombre', 'Ingrese un nombre entre 3 y 50 caracteres');
            nombreInput.classList.remove('ValidacionCorrecta');
            nombreInput.classList.add('ErrorValidacion');
        } else {
            nombreInput.classList.remove('ErrorValidacion');
            nombreInput.classList.add('ValidacionCorrecta');
            cerrarPopup('nombre'); 
        }
    }

    function validarEdad() {
        var edadInput = document.getElementById('edad');
        var valor = parseInt(edadInput.value, 10);

        if (isNaN(valor) || valor < 18 || valor > 120) {
            mostrarMensajeError('edad', 'Ingrese una edad válida entre 18 y 120');
            edadInput.classList.remove('ValidacionCorrecta');
            edadInput.classList.add('ErrorValidacion');
        } else {
            edadInput.classList.remove('ErrorValidacion');
            edadInput.classList.add('ValidacionCorrecta');
            cerrarPopup('edad'); 
        }
    }

    function validarComentario() {
        var comentarioInput = document.getElementById('comentario');
        var valor = comentarioInput.value.trim();

        if (valor.length < 50 || valor.length > 150) {
            mostrarMensajeError('comentario', 'Ingrese un comentario entre 50 y 150 caracteres');
            comentarioInput.classList.remove('ValidacionCorrecta');
            comentarioInput.classList.add('ErrorValidacion');
        } else {
            comentarioInput.classList.remove('ErrorValidacion');
            comentarioInput.classList.add('ValidacionCorrecta');
            cerrarPopup('comentario'); 
        }
    }

    function validarFecha() {
        var fechaInput = document.getElementById('fecha');
        var valor = fechaInput.value.trim();

        if (valor.length === 0) {
            mostrarMensajeError('fecha', 'Seleccione una fecha de nacimiento');
            fechaInput.classList.remove('ValidacionCorrecta');
            fechaInput.classList.add('ErrorValidacion');
        } else {
            fechaInput.classList.remove('ErrorValidacion');
            fechaInput.classList.add('ValidacionCorrecta');
            cerrarPopup('fecha'); 
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
