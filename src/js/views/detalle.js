import React ,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export const Detalle=()=>{
    const {nombre} = useParams();
    const [variable, setVariable] = useState();
    const pokedex = async () => {
        try {
          const getpoke = await fetch("https://pokeapi.co/api/v2/pokemon/"+nombre);
          const data = await getpoke.json();
          setVariable(data);
          console.log(data)
        } catch {
          console.log("hubo un error");
        }
      };
    useEffect(()=>{
        pokedex();
    },[])
    return <>
    <h1>Detalle del pokemon {nombre}</h1>
    <img src={variable?.sprites.front_default}/>
    <img src={variable?.sprites.back_default}/>
    <img src={variable?.sprites.front_shiny}/>
    </>
}