let contenedorPerritos = document.getElementById('imagenes');
let boton = document.getElementById('generar');

function cargarPerritos() {
    contenedorPerritos.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        contenedorPerritos.innerHTML += `
            <div class="imagen">
                <i class="fa-solid fa-circle-notch fa-spin"></i>
            </div>
        `;
    }

    let contenedores = document.querySelectorAll('#imagenes .imagen');

    // Llamadas a la API
    contenedores.forEach(contenedor => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
                return response.json();
            })
            .then(data => {
                contenedor.innerHTML = `<img src="${data.message}" alt="Imagen de perrito" />`;
            })
            .catch(error => {
                console.error('Error al obtener imagen:', error);
                contenedor.textContent = 'Error al cargar';
            });
    });
}
document.addEventListener('DOMContentLoaded', cargarPerritos);

boton.addEventListener('click', cargarPerritos);
