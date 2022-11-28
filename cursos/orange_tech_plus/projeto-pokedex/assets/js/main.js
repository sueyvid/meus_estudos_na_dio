const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 16;
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <a href="${pokemon.name}.html">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </a>
        </li>
    `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit;
    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
})

moreDetails.addEventListener('click', () => {
    window.location.href='details.html'
})

pokemonList.eve