// estructura de datos y parseo
const cuidadores = `
[
    {"id": 1,"cuidador": "Andrea Passet", "rating": 4.5, "experiencia": 10, "animales": "fa-solid fa-cat icon-size", "foto": "Assets/Img/cuidadores/1.AndreaPasset.png"},
    {"id": 2, "cuidador": "Javier Netto", "rating": 4.7, "experiencia": 8, "animales": "fa-solid fa-dog icon-size", "foto": "Assets/Img/cuidadores/2.JavierNetto.png"},
    {"id": 3, "cuidador": "Agustin Giay", "rating": 4.3, "experiencia": 5, "animales": "fa-solid fa-dog icon-size", "foto": "Assets/Img/cuidadores/3.AgustinGiay.png"},
    {"id": 4, "cuidador": "Carla Romaña", "rating": 4.8, "experiencia": 12, "animales": "fa-solid fa-cat icon-size", "foto": "Assets/Img/cuidadores/4.CarlaRomaña.png"},
    {"id": 5, "cuidador": "Paula Silas", "rating": 4.6, "experiencia": 9, "animales": "fa-solid fa-dog icon-size", "foto": "Assets/Img/cuidadores/5.PaulaSilas.png"},
    {"id": 6, "cuidador": "Oscar Ruggeri", "rating": 4.2, "experiencia": 7, "animales": "fa-solid fa-fish icon-size", "foto": "Assets/Img/cuidadores/6.OscarRuggeri.png"},
    {"id": 7, "cuidador": "Malcolm Braida", "rating": 4.9, "experiencia": 15, "animales": "fa-solid fa-cat icon-size", "foto": "Assets/Img/cuidadores/7.MalcolmBraida.png"},
    {"id": 8, "cuidador": "Rodrigo Blanco", "rating": 3.9, "experiencia": 4, "animales": "fa-solid fa-cat icon-size", "foto": "Assets/Img/cuidadores/8.RodrigoBlanco.png"},
    {"id": 9, "cuidador": "Andrea DAlessandro", "rating": 4.4, "experiencia": 11, "animales": "fa-solid fa-cat icon-size", "foto": "Assets/Img/cuidadores/9.AndreaDAlessandro.png"},
    {"id": 10, "cuidador": "Natasha Gorosito", "rating": 4.0, "experiencia": 6, "animales": "fa-solid fa-cat icon-size", "foto": "Assets/Img/cuidadores/10.NatashaGorosito.png"}
  ]
`;


const cuidadoresJson = JSON.parse(cuidadores);

//Función para impactar los registros en el html
const ubicacionHtml = document.querySelector('#cuidadoresContainer');

function mostrarCuidadores(){
    cuidadoresJson.forEach(cuidador => {
        let etiquetas = 
        `
        <div class="cuidadores-contenedor">
            <div class="cuidadores-imagen">
                <img src=${cuidador.foto} alt="foto cuidador" class="cuidadores-imagen">
            </div>
            <div class="cuidadores-detalle">
                <h4>${cuidador.cuidador}</h4>
                <h5>${cuidador.rating} &#9733; (${cuidador.experiencia})</h5>
                <div><i class="${cuidador.animales}"></i></div>
                <button class="button-cuidador button-cuidador-hover" href="#">Detalle</button>
            </div>
        </div>
        `;
        console.log(cuidador.animales);
        ubicacionHtml.insertAdjacentHTML('beforeend', etiquetas);
    });
}

mostrarCuidadores();

