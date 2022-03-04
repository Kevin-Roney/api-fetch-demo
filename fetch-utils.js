export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

    const response = await fetch(url);

    const jsonResponse = await response.json();

    return jsonResponse.results;
}

// TODO write star wars fetch function
export async function getStarWarsPeople() {
    let url = 'https://swapi.dev/api/people';

    const response = await fetch(url);

    const jsonResponse = await response.json();
    
    return jsonResponse.results;
}