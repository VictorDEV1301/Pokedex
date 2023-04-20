const idPokemon = document.querySelector('.idPokemon');
const namePokemon = document.querySelector('.namePokemon');
const pokemonImg = document.querySelector('#pokemon');
const searchPokemon = document.querySelector('#searchPokemon');

async function apiRequest(pokemon){
  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await apiResponse.json();
  return data;
}

async function renderPokemon(pokemon){
  const data = await apiRequest(pokemon);
  idPokemon.innerHTML = data.id;
  namePokemon.innerHTML = data.name;
  pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
  console.log(pokemonImg.src);
}

searchPokemon.addEventListener('keypress',e=>{
  if(e.key === 'Enter'){
    e.preventDefault();
    renderPokemon(searchPokemon.value);
  }
})