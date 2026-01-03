import Contenedor from "./components/card/contenedor";
import { useState, useEffect } from "react";
function App() {

  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("/data/cartelera.json")
      .then(response => response.json())
      .then(data => setPeliculas(data))
      .catch(error => console.log('Error al cargar los datos ',error));
  }, []);



  return (
    <>
      {
        peliculas.map(pelicula => (
          <Contenedor
            key={pelicula.ID}
            titulo={pelicula.titulo}
            resumen={pelicula.resumen}
            año={pelicula.año_de_lanzamiento}
            director={pelicula.director}
            imagen={pelicula.url_foto}
          />
        ))
      }
    </>
  )
}

export default App;