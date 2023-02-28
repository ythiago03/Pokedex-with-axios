

// axios.get('https://api.github.com/users/ythiago03')
// .then(response => console.log(response.data))

const URL = 'https://pokeapi.co/api/v2/pokemon/347'

const getPokemon = async (url) => {
    const getPoke  = await axios.get(url)
    const dataPoke = getPoke.data
    console.log(dataPoke);
}

getPokemon(URL)