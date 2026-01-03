import { useState, useEffect } from "react";


function Ocultar(){
  
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const conteo = setInterval(()=>{
      setCount(prev => prev + 1)
    }, 1000)

    return ()=>{
      clearInterval(conteo)
      console.log('se desmonto el componente ya no se cuenta')
    }
  }, [])
  return(
    <>
      <h1>Conteo en el tiempo: {count}</h1>
    </>
    
  )


}

export default Ocultar;





