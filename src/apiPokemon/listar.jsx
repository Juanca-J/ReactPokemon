import { useEffect, useState } from 'react';
import axios from 'axios';



const urlAPI = "https://pokeapi.co/api/v2/pokemon/";

function Listar() {
    // const [data, setData] = useState([]);
    const [nextLink, setNextLink] = useState('');
    const [prevLink, setPrevLink] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(urlAPI);
            // const pokemonData = response.data.results;
            // console.log("response: ", response);
            setNextLink(response.data.next);
            setPrevLink(response.data.previous);

            // setData(pokemonData);

            // console.log("Lista general: ", pokemonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return { nextLink, prevLink, fetchData };
}

export default Listar;