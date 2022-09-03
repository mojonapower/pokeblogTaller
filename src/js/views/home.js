import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Gotta Catch ’Em All</h1>
      {store.pokemones.map((elm, index) => {
        return (
          <li>
            {elm.name}
            <Link to={'/pokedetalle/'+elm.name}>
              <button onClick={()=>{
				alert(elm.name)
			  }}>Ir a detalle</button>
            </Link>
          </li>
        );
      })}
    </div>
  );
};
