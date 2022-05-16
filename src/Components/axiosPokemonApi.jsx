import React, {useEffect, useState} from "react";
import axios from "axios";

const PokemonApi = () => {

    const[pokemon, setPokemon] = useState([])
    const[click, setClick] = useState(true)


    useEffect(() =>{
        console.log("hello")
        if(!click) {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {setPokemon(response.data.results)
            })
        }  else {
            setPokemon([])
        }

    },[click]);

    const hizoClick=()=>{
        setClick(prev => !prev)
    }



    return (
        <div>
            
            
            <div>
            <button type="submit"  className="btn btn-danger" onClick= {hizoClick}>Axios Pokemon</button>
            {pokemon.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })} 

        </div> 
        </div>
        
    )


}

export default PokemonApi;