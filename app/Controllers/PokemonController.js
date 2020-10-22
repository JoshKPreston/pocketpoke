import { pokemonService } from "../Services/PokemonService.js"
import { ProxyState } from "../AppState.js";


// Private

let _draw = () => {
  let template = ''
  ProxyState.pokemonArray.forEach(p => {template += p.Template});
  document.getElementById('shelf').innerHTML = template
}


export default class PokemonController {
  constructor() {
    console.log('PokemonController');
    ProxyState.on("pokemonArray", _draw)
    this.getPokemon()
    this.loading()
    _draw();
  }


  getPokemon(){
    try {
      pokemonService.getPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  showCard(id) {
    let pokemon = ProxyState.pokemonArray.find(p => p.id == id)
    document.getElementById('pokedexDisplay').innerHTML = pokemon.PokedexCard
    document.getElementById('pokedexStats').innerHTML = pokemon.PokedexStats
  }
  
  loading() {
    setTimeout(() => {
      document.getElementById('loading').classList.add('hidden')
    }, 5000)
  }

}