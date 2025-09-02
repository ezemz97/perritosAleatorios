# Actividad: Conociendo perritos 🐶
## Objetivo 🎯
- En equipos de 5 integrantes, crear una página web sencilla que permita mostrar imágenes aleatorias de perros utilizando la API pública de perros (Dog API)

## Consigna 📋:
1. ### Crear la estructura HTML 🏗️
- Agregar un titulo visible
- Un botón con el texto: "Mostrar perrito"
- Un contenedor donde se mostrará la imagen del perrito

2. ### Aplicar estilos con CSS 🎨
- Aplicar color (o imagen) de fondo y color a las letras
- El botón debe tener un efecto visual al pasar el cursor (hover)
- La imagen del perrito debe mostrarse centrada y con border. Opcionalmente pueden agregarle más estilos (pseudo-class, borde con color, etc)

3. ### Desarrollar las funcionalidades JavaScript ⚙️
- Al hacer click en el bóton, la página debe:
    - Realizar una petición HTTP (fetch) a la API: https://dog.ceo/api/breeds/image/random 
    - Obtener la URL de la imagen del perro que devuelve la API.
    - Mostrar la imagen en el contenedor designado.
    - Mientras se carga la imagen, mostrar un texto que diga “Cargando perrito...”.
    - Si ocurre un error al obtener la imagen, mostrar un mensaje de error en el contenedor. 

## Preguntas para pensar 💭: 
1. ¿Para qué sirve innerHTML?
2. ¿Qué tipo de solicitud realiza "fetch" por defecto?
3. ¿Por qué convertimos la respuesta con .json()?
4. ¿Por qué es importante tener un contenedor (por ejemplo, un div) para mostrar contenido dinámico? 
5. ¿Qué es un pseudoclase en CSS y cómo se usa?