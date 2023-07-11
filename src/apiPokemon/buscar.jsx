import React, { useState } from 'react';
import '../stylesPoke/styleBuscar.css'

function Buscar(props) {

    const [inputValue, setInputValue] = useState('');


    const handleChange = (event) => {
        setInputValue(event.target.value);
      };

    return (
        <div>
            <span id="formSearch">Buscar: </span>
            <input id="searchPokemon" defaultValue={inputValue} className ="formHead" type="text" placeholder="Nombre de pokemon" />
            <button className="formatButton" onClick={handleChange}>
                <img alt='Boton buscar' src={require(`../img/${props.buscar}.png`)}/>
            </button>
        </div>
    )
}

export default Buscar;

