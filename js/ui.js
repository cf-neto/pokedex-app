import {typeColors} from './utils.js';

// Muda background de acordo com cada pokemon
export function changeBackground(type) {
    const card = document.getElementById('card');
    if (typeColors[type]) {
        card.style.background = `
            radial-gradient(circle at 50% 0%, 
            ${typeColors[type]}33 36%, 
            #ffffff 36%)`;
    } else {
        card.style.background = '#f5f5f5';
        card.style.border = '2px solid #ddd';
        card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }
}

// Renderiza o pokemon
export async function renderPokemon(pokemon) {
    const card = document.getElementById('card');
    card.style.opacity = '0.5';

    const hp = pokemon.stats[0].base_stat;
    const sAttack = pokemon.stats[1].base_stat;
    const sDefense = pokemon.stats[2].base_stat;
    const sSpeed = pokemon.stats[5].base_stat;

    const spriteOptions = [
        pokemon.sprites.other?.dream_world?.front_default,
        pokemon.sprites.other?.['official-artwork']?.front_default,
        pokemon.sprites.other?.home?.front_default,
        pokemon.sprites.front_default,
        pokemon.sprites.front_shiny,
        pokemon.sprites.back_default,
        pokemon.sprites.back_shiny
    ];
    const imgSrc = spriteOptions.find(src => typeof src === "string" && src.trim() !== "") || 'assets/placeholder.png';

    let typesHTML = '';
    pokemon.types.forEach(type => {
        const typeName = type.type.name;
        typesHTML += `<span style="background-color: ${typeColors[typeName] || '#777'}">${typeName}</span>`;
    });

    card.style.opacity = '1';
    changeBackground(pokemon.types[0].type.name);

    card.innerHTML = `
        <p class="hp">
            <span>HP</span>
            ${hp}
        </p>
        <img id="img" src="${imgSrc}">
        <h2 id="pokemon_name">${pokemon.name}</h2>
        <div class="types">${typesHTML}</div>
        <div class="stats">
            <div><h3>${sAttack}</h3><p>Attack</p></div>
            <div><h3>${sDefense}</h3><p>Defense</p></div>
            <div><h3>${sSpeed}</h3><p>Speed</p></div>
        </div>`;
}
