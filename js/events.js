import { getPokemons } from './api.js';
import { renderPokemon } from './ui.js';

let counter = 1;

loadPokemon(1)

export function setupEvents() {
    document.getElementById('btnPrevious').addEventListener('click', () => {
        if (counter > 1) {
            counter = counter - 1;
            loadPokemon(counter);
        }
    });

    document.getElementById('btnNext').addEventListener('click', () => {
        counter = counter + 1;
        loadPokemon(counter);
    });

    btnSearch.addEventListener('click', function() {
        const input = document.getElementById('input').value;
        const numberValue = Number(input);
    
        try{
            loadPokemon(input);
            if (input.trim() === "") {
                console.log("Input vazio.");
                return;
            } 
            else if (!isNaN(numberValue)) {
                counter = numberValue;
            } 
        }
        catch(err){
            console.error(err);
            throw err;
        }
    })
}

async function loadPokemon(nameOrId) {
    try {
        const pokemon = await getPokemons(nameOrId);
        renderPokemon(pokemon);
    } catch (error) {
        console.error(error);
    }
}
