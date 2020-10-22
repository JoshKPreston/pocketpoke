import Pokemon from "../Models/Pokemon.js"
import { ProxyState } from "../AppState.js";
import { pokemonApi } from "./AxiosService.js";

class PokemonService {
  constructor() {
    console.log('PokemonService');
  }

  async getPokemon() {
    // let res = await pokemonApi.get('pokemon/?offset=0&limit=72')
    // let pokemonList = res.data.results
    let numOfPokemonToQuery = 24
    let pokemonData = null
    let pokemonArr = []
    for (let i = 1; i <= numOfPokemonToQuery; i++) {
      let pokemonObj = {}
      let searchString = `pokemon/${i}`
      pokemonData = await pokemonApi.get(searchString)
      // console.log(pokemon.data);
      
      pokemonObj.id = pokemonData.data.id
      pokemonObj.sprite = pokemonData.data.sprites.front_default
      pokemonObj.name = pokemonData.data.name
      pokemonObj.height = pokemonData.data.height
      pokemonObj.weight = pokemonData.data.weight
      pokemonArr.push(new Pokemon(pokemonObj))
    }
    ProxyState.pokemonArray = ProxyState.pokemonArray.concat(pokemonArr)
  }


}

export const pokemonService = new PokemonService();