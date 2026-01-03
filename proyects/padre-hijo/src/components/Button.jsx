import { useState } from "react";

export function Button(){
    const [name, setName] = useState('activo')
    const handclick = () =>{
        setName(name === 'activo'? 'inactivo' : 'activo')
    }
    return (
        <button onClick={handclick}>{name}</button>
    );
}