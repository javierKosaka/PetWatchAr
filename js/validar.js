
// VALIDAR CAMPOS OBLIGATORIOS VACIOS 
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#formGeneral');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        //Array de campos obligatorios
        const inputIds = ['inputTextoNombre', 'inputTextoApellido', 'inputTextoMail', 'inputNumerCelu', 'inputFechaNacimiento', 'inputTextoComentarios'];

        inputIds.forEach(id => {
            const inputElement = document.getElementById(id);
            const errorElementId = `mensajeError${id.slice(10)}`;
            console.log(errorElementId);  
            const errorElement = document.getElementById(errorElementId);

            if (!inputElement.value.trim()) {
                if (errorElement) {
                    errorElement.textContent = 'Debe completar este campo';
                } else {
                    console.error("No se encontró el elemento de error para", id);
                }
                isValid = false;
            } else {
                if (errorElement) {
                    // Limpiar mensaje de error
                    errorElement.textContent = ''; 
                }
            }
        });

        if (isValid) {
            alert("El mensaje ha sido enviado correctamente. En breve será contactado por uno de nuestros representantes");
            form.submit(); 
        }
    });
});