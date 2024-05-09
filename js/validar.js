// VALIDACIONES PARA CAMPOS DE TEXTO

document.addEventListener('DOMContentLoaded', 
function() {
        var input = document.getElementById('inputTextoNombre');
        var mensajeError = document.getElementById('mensajeErrorNombre');

        input.addEventListener('input', 
        function() {
            var valor = input.value;
            // Validar que no este vacío, tenga menos de dos caracteres o más de 50
            if (valor.length >= 50){
                mensajeError.textContent = "El valor es demasiado largo";
            } else if (valor.length < 2){
                mensajeError.textContent = "El valor es demasiado corto";
            } else  { mensajeError.textContent="";}
        });
    }
    );


document.addEventListener('DOMContentLoaded', 
    function() {
            var input = document.getElementById('inputTextoApellido');
            var mensajeError = document.getElementById('mensajeErrorApellido');
    
            input.addEventListener('input', 
            function() {
                var valor = input.value;
                // Validar que no este vacío, tenga menos de dos caracteres o más de 50
                if (valor.length >= 50){
                    mensajeError.textContent = "El valor es demasiado largo";
                } else if (valor.length < 2){
                    mensajeError.textContent = "El valor es demasiado corto";
                } else  { mensajeError.textContent="";}
            });
        }
        );

// VALIDACIONES PARA CAMPOS DE E-MAIL

document.addEventListener('DOMContentLoaded', 
function() {
    var input = document.getElementById('inputTextoMail');
    var mensajeError = document.getElementById('mensajeErrorMail');

    input.addEventListener('input', 
    function() {
        var valor = input.value;
        var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Validar que coincida con patronEmail
        if (!patronEmail.test(valor)){
            mensajeError.textContent = "Introduzca una dirección de correo electrónico válida";
        } else  { mensajeError.textContent="";}
    });
}
);