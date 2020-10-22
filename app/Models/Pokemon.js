

export default class Pokemon {
  constructor(data) {
    this.id = data.id
    this.sprite = data.sprite
    this.name = data.name
    this.height = data.height 
    this.weight = data.weight
  }


  get Template() {
    return /*html*/ `
    <div class="col-4 pokemon-card" onclick="app.pokemonController.showCard(${this.id})">
      <div class="card">
        <img class="card-img-top" src="${this.sprite}" alt="Card image cap">
      </div>
    </div>
    `
  }

  get PokedexCard() {
    return /*html*/ `
      <img class="pokedex-pokemon" src="${this.sprite}" alt="${this.name}">
    `
  }
  get PokedexStats() {
    return /*html*/ `
      <div class="typewriter">
        <p>Name: ${this.name}<br>
        Height: ${this.height}<br>
        Weight: ${this.weight}</p>
      </div>
    `
  }

}


// <div class="card-body">
// <h5 class="card-title">${this.name}</h5>
// <h6 class="card-subtitle">${this.id}</h6>
// <p class="card-text"></p>