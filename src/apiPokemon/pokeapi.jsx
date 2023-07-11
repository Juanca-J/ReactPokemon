import React, {useEffect, useState } from 'react';
import axios from 'axios';
import '../stylesPoke/styles.css';

import Listar from './listar.jsx';

const urlAPI = "https://pokeapi.co/api/v2/pokemon/";

const LlamarApi = () => {
    const [data, setData] = useState([]);
    // const [nextLink, setNextLink] = useState('');
    // const [prevLink, setPrevLink] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(urlAPI);
            const pokemonData = response.data.results;
            console.log("response: ", response);
            //   setNextLink(response.data.next);
            //   setPrevLink(response.data.previous);
            setData(pokemonData);

            console.log("Lista general: ", pokemonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <ul>
                {data.map((pokemon, index) => (
                    <div className='cardFormat' key={index}>
                        <li>
                            <img className='formatImgPok' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`} alt={pokemon.name} />
                            <p className='formatName'>{pokemon.name}</p>
                            {/* <p>{`https://pokeapi.co/api/v2/pokemon/${index + 1}/types`}</p> */}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};



// pokeapi.jsx

// Llamada a la función back
const back = () => {
    // const listar = Listar();
    // const prevLink = listar.prevLink; // Reemplaza 'prevLinkValue' con el valor adecuado
    // back(prevLink);
  };
  
  // Llamada a la función next
  const next = () => {
    // <div>
    //     <Listar />
    // </div>
    // const listar = Listar();
    // console.log("listar: ", listar.nextLink);
    // const nextLink = listar.nextLink; // Reemplaza 'prevLinkValue' con el valor adecuado
    // back(nextLink);
  };
  

export { back, next };
export {LlamarApi}
export default LlamarApi;
