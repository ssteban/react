import { useState, useEffect } from "react";
import Select from "./select-action";

function ObtenerMun({departamentoSelecionado}){
  const [municipio, setMunicipio] = useState([])
  console.log('Valor de departamento: ',departamentoSelecionado)
  useEffect(()=>{
    const obtenerMunicipio = async () =>{
      try {
        const respuesta = await fetch("http://127.0.0.1:3000/users/getMunicipioByDepartamento/"+departamentoSelecionado)
        if (!respuesta.ok) throw new Error('Error al cargar Municipios.')
          setMunicipio(await respuesta.json())
      } catch (error) {
        console.error('Error al obtener municipios: ', error)
      }
    }
    obtenerMunicipio()
  },[departamentoSelecionado])

  return(
    <>
      <h3>Municipios Encontrados segun su Departamento</h3>

      <Select label={"Municipio"} value={"Municipio"} onchange={()=>{}} opciones={municipio}></Select>

    </>
  )
}



export default ObtenerMun;

