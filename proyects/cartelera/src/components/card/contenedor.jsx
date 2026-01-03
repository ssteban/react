import './contenedor.css'

function Contenedor({titulo, resumen, año, director, imagen}) {


  return (
    <div className="pelicula-card">
      <img src={imagen} alt={`Poster de ${titulo}`} className="pelicula-imagen" />
      
      <div className="pelicula-info">
        <div>
          <h2>{titulo}</h2>
          <p className="resumen">{resumen}</p>
          <div className="detalles">
            <p><strong>Año:</strong> {año}</p>
            <p><strong>Director:</strong> {director}</p>
          </div>
        </div>
        
        <button className="btn-ver-mas">Ver más</button>
      </div>
    </div>
  );
}

export default Contenedor;