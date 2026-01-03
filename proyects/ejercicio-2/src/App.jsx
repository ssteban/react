import { useState } from "react";
import Ocultar from "./components/ocultar"


function Button({estado, setMostrar}){
  const text = estado ? 'Quitar componente' : 'Mostrar Componente'
  const chandStatus = () =>{
    console.log("Cabiando estado del componente.")
    setMostrar(!estado)
  }
  return(
    <button onClick={chandStatus}>{text}</button>
  )
}

function App(){
  const [mostrar, setMostrar] = useState(false)

  return(
    <>
      <Button estado={mostrar} setMostrar={setMostrar}></Button>
      {mostrar && <Ocultar></Ocultar>}
    </>
    
  )
}

export default App;