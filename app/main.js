import PokemonController from "./Controllers/PokemonController.js"
import { pokemonApi } from "./Services/AxiosService.js"
class App {
  pokemonController = new PokemonController();


}

window["app"] = new App();

