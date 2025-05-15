// Função para fetch API pokeapi
export async function getPokemons(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
        throw new Error("Erro: Pokemon não encontrado!");
    }
    return await response.json();
}