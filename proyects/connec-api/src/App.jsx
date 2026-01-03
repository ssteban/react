import "./App.css";
import { useState } from "react";
import Departamento from "./components/depa-api";

const Button = ({ mostrar, setMostrar }) => {
  const text = mostrar ? "Quitar Datos" : "Mostrar Datos";

  return (
    <button className="app-button" onClick={() => setMostrar(!mostrar)}>
      {text}
    </button>
  );
};

function App() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="app-container">
      <div className="app-card">
        <h2 className="app-title">Seleccione su ubicación</h2>

        <Button mostrar={mostrar} setMostrar={setMostrar} />

        {mostrar && (
          <>
            <div className="app-divider" />
            <Departamento />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
