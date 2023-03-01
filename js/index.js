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
        renderPokemon(URL = 'https://pokeapi.co/api/v2/pokemon/' + pokemonNumber, i)
    }
}

const renderPokemon = async (url, currentNumber) => {
    const pokemon = await getPokemon(URL) 
    console.log(pokemon)
    let pokemonURL = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default
    pokemonImgs[currentNumber].setAttribute('src', pokemonURL)
}

/* creating imgs */

const createImg = () => {
    
    for(let i = 0; i <= 55; i++){
        container.innerHTML += `
        <img class="pokemon" src="" alt="Pokemon ${i + 1}">
        `
    }
}

//createImg()

const pokemonImgs = document.querySelectorAll('.pokemon')

changePokemon()
