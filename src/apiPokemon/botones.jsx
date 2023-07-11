import '../stylesPoke/styleButtons.css'
import { next, back } from './pokeapi.jsx';


function Botones(props) {



    return (
        <div>
            <button className="formB" onClick={back}>
                <img alt="back" src={require(`../img/boton-${props.anterior}.png`)} />
            </button>

            <button className="formB" onClick={next}>
                <img alt="next" src={require(`../img/boton-${props.siguiente}.png`)} />
            </button>
        </div>
    )
}

export default Botones;
