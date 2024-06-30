/* conectar con API que muestra a los cuidadores*/
        document.addEventListener('DOMContentLoaded', function() {
            fetch('https://jakosaka.pythonanywhere.com/api/cuidadores')
                .then(response => response.json())
                .then(data => {
                    const cuidadoresBody = document.querySelector('#cuidadoresBody');
                    data.forEach(cuidador => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${cuidador.IDCUIDADOR}</td>
                            <td>${cuidador.NOMBRE}</td>
                            <td>${cuidador.APELLIDO}</td>
                            <td>${cuidador.CALIFICACION}</td>
                            <td>${cuidador.REVIEWS}</td>
                            <td>${cuidador.MASCOTA}</td>
                            <td><button class="btn btn-primary btn-sm" onclick="showEditModal('${cuidador.IDCUIDADOR}', '${cuidador.NOMBRE}', '${cuidador.APELLIDO}', '${cuidador.CALIFICACION}', '${cuidador.REVIEWS}', '${cuidador.MASCOTA}')">Editar</button></td>
                            <td><button class="btn btn-danger btn-sm" onclick="deleteCuidador('${cuidador.IDCUIDADOR}')">Borrar</button></td>
                        `;
                        cuidadoresBody.appendChild(row);
                    });
                });


/* conectar con API que agrega un cuidador*/
            document.querySelector('#addCuidadorForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const formData = new FormData(event.target);
                const data = Object.fromEntries(formData.entries());
                fetch('https://jakosaka.pythonanywhere.com/api/cuidador', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    location.reload();
                });
            });

/*conectar con API que modifica un cuidador*/
            document.querySelector('#saveChangesButton').addEventListener('click', function() {
                const formData = new FormData(document.querySelector('#editCuidadorForm'));
                const data = Object.fromEntries(formData.entries());
                const IDCUIDADOR = document.querySelector('#editCuidadorForm').dataset.idcuidador;
                fetch(`https://jakosaka.pythonanywhere.com/api/cuidador/${IDCUIDADOR}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    location.reload();
                });
            });
        });

        /*modal que modifica los datos del cuidador*/
        function showEditModal(IDCUIDADOR, NOMBRE, APELLIDO, CALIFICACION, REVIEWS, MASCOTA) {
            const form = document.querySelector('#editCuidadorForm');
            form.dataset.idcuidador = IDCUIDADOR;
            form.NOMBRE.value = NOMBRE;
            form.APELLIDO.value = APELLIDO;
            form.CALIFICACION.value = CALIFICACION;
            form.REVIEWS.value = REVIEWS;
            form.MASCOTA.value = MASCOTA;
            const modal = new bootstrap.Modal(document.querySelector('#editModal'));
            modal.show();
        }

/*conectar con API que borra un cuidador*/
        function deleteCuidador(IDCUIDADOR) {
            if (confirm('¿Estás seguro de que quieres eliminar este cuidador?')) {
                fetch(`https://jakosaka.pythonanywhere.com/api/cuidador/${IDCUIDADOR}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    location.reload();
                });
            }
        }
