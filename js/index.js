/* document tags*/
const container = document.querySelector('.container')

/* main variables*/ 
let pokemonNumber = 1
let URL = 'https://pokeapi.co/api/v2/pokemon/' + pokemonNumber

/* getting and rendering pokemons */
const getPokemon = async (url) => {
    const getPoke  = await axios.get(url)
    const dataPoke = getPoke.data
    return dataPoke
}

const changePokemon = () => {
    for(let i = 0; i < pokemonImgs.length; i++){
        pokemonNumber = i + 1
        URL = 'https://pokeapi.co/api/v2/pokemon/' + pokemonNumber
        renderPokemon(i)
    }
}

const renderPokemon = async (currentNumber) => {
    const pokemon = await getPokemon(URL) 
    
    let attributes = pokemon.types
    for(let i = 0; i < attributes.length; i++){
        //console.log(attributes[i])
        pokemonAttributes[currentNumber].innerHTML += `
         <div class="attribute att-${attributes[i].type.name}">${attributes[i].type.name}</div>
        `
    }

    let pokemonURL = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default
    let pokeName = pokemon.name
    let pokeId = pokemon.id


    pokemonImgs[currentNumber].setAttribute('src', pokemonURL)
    pokemonName[currentNumber].innerHTML = pokeName

    if(pokeId < 10){
        pokeId = '#000' + pokeId
    }
    if(pokeId < 100){
        pokeId = '#00' + pokeId
    }
    if(pokeId < 1000){
        pokeId = '#0' + pokeId
    }

    pokemonId[currentNumber].innerHTML = pokeId
}

/* creating imgs */

const createCards = () => {
    
    for(let i = 0; i <= 49; i++){
        container.innerHTML += `
        <div class="card">
            <div class="card-img">
                <img class="pokemon" src="" alt="Pokemon ${i + 1}">
            </div>
            <span class="card-id">#0001</span>
            <h2 class="card-name">Bulbasaur</h2>
            <div class="attributes">
                
            </div>
        </div>
        `
    }
}

createCards()

const pokemonImgs = document.querySelectorAll('.pokemon')
const pokemonName = document.querySelectorAll('.card-name')
const pokemonId = document.querySelectorAll('.card-id')
const pokemonAttributes = document.querySelectorAll('.attributes')

changePokemon()
