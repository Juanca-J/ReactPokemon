import './App.css';
import pokeImage from './img/poke.png';
import Botones from './apiPokemon/botones';
import Buscar from './apiPokemon/buscar';
import LlamarApi from './apiPokemon/pokeapi';


function App() {
  return (

    <div>
      <header className="headerFormat">
        <a href="https://pokeapi.co/"dd>
          <img alt='imgen Principal' src={pokeImage} width="180px" height="180px"></img>
        </a>

        <div>
          <Buscar
            buscar="search"
          />
        </div>

        <div className="formDivB">
          <Botones
            anterior="back"
            siguiente="next"
          />
        </div>
      </header>

      <section>
        <div className="formContainerSec">
          <div className="pokemonInvoke">
            <LlamarApi/>
          </div>
        </div>
      </section> 

    </div>


  );
}

export default App;
