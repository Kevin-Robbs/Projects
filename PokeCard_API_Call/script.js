async function getPokemon(p){
    // this is a helper function

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + p);
    let pokemonInfo = await response.json();
    
    var img = document.querySelector('.card-img-top')
    img.src = pokemonInfo.sprites.front_default

    document.querySelector('#poke-name').innerHTML = pokemonInfo.name
}

var button = document.querySelector('.poke-btn')


button.addEventListener('click', function(){
    var pokemon = document.querySelector('#pokedex-search').value
    getPokemon(pokemon)
})


