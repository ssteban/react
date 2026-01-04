# Cartelera de Películas - Proyecto React

Este proyecto es una aplicación web simple construida con React y Vite que muestra un listado de películas. La aplicación carga los datos desde un archivo JSON local y los presenta en una interfaz de usuario basada en tarjetas.

## Descripción del Proyecto

La aplicación consiste en los siguientes componentes y funcionalidades:

- **`App.jsx`**: Es el componente principal de la aplicación. Se encarga de:
  -   Realizar una solicitud `fetch` para obtener los datos de las películas desde el archivo `/public/data/cartelera.json` cuando el componente se monta, utilizando el hook `useEffect`.
  -   Almacenar la lista de películas en el estado del componente con `useState`.
  -   Iterar sobre la lista de películas y renderizar un componente `Contenedor` para cada una, pasándole las propiedades correspondientes (título, resumen, imagen, etc.).

- **`components/card/contenedor.jsx`**: Es un componente reutilizable que representa una única "tarjeta" de película. Se encarga de:
  -   Recibir las propiedades de la película (título, resumen, año, director, imagen).
  -   Estructurar el HTML para mostrar la información de la película de forma organizada, incluyendo la imagen, los detalles y un botón "Ver más".

- **`components/card/contenedor.css`**: Contiene los estilos CSS para dar formato y diseño a las tarjetas de las películas, utilizando Flexbox para el layout y añadiendo efectos visuales como sombras y transiciones.

- **`public/data/cartelera.json`**: Un archivo JSON estático que actúa como una base de datos local, conteniendo un array de objetos, donde cada objeto representa una película con sus detalles.

## Cómo ejecutar el proyecto

Para poder visualizar o trabajar en el proyecto en un entorno de desarrollo local, sigue estos pasos:

### Prerrequisitos

-   Tener instalado [Node.js](https://nodejs.org/) (que incluye npm).

### Instalación

1.  Clona el repositorio o descarga el código fuente en tu máquina local.
2.  Abre una terminal en el directorio raíz del proyecto.
3.  Instala las dependencias del proyecto ejecutando:
    ```sh
    npm install
    ```

### Ejecución

1.  Una vez instaladas las dependencias, ejecuta el siguiente comando para iniciar el servidor de desarrollo de Vite:
    ```sh
    npm run dev
    ```
2.  Abre tu navegador web y visita la URL que se muestra en la terminal (normalmente `http://localhost:5173`).