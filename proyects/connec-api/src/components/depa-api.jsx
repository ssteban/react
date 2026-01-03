import { useEffect, useState } from "react";
import ObtenerMun from "./muni-api"
import Select from "./select-action";

function Departamento(){
  const [mostrar, setMostrar] = useState(false)
  const [depaSelecion, setDepaSelecion] = useState('')
  const [departamento, setDepartamento] = useState([])

  useEffect(()=>{
    const obtenerDepartamentos =async () => {
      try {
        const respuesta = await fetch('http://127.0.0.1:3000/users/getDepartamento');
        if (!respuesta.ok) throw new Error('Error al cargar departamentos.')
          setDepartamento(await respuesta.json())
      } catch (error) {
        console.error('Error: ', error)
      }
    }
    obtenerDepartamentos();
  }, [])

  const handleSeletion = (e) =>{
    setDepaSelecion(e.target.value)
    setMostrar(!mostrar)
  }

  useEffect(()=>{
    if(depaSelecion) {
      console.log('Departamento Selecionado: ', depaSelecion)
    }
  }, [depaSelecion])

  return(
    <>
      <h3>Departamentos encontrados:</h3>

      <Select label={"Departamentos"} value={depaSelecion} onchange={handleSeletion} opciones={departamento}></Select>


        {mostrar && <ObtenerMun departamentoSelecionado={depaSelecion}></ObtenerMun>}
      
    </>
  )
}

export default Departamento;

