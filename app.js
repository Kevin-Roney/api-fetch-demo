
// import functions
import { getPokedex } from './fetch-utils.js';

// grab DOM elements
const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
const list = document.querySelector('#list');
<<<<<<< HEAD
const errorElement = document.querySelector('#error-message');
=======
>>>>>>> ebde882766946b3d1e21eb192ba45b07bd27a0c2

async function loadPokedex() {
    const pokedex = await getPokedex();

    list.classList.add('pokemon');

<<<<<<< HEAD
    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);
=======
    for(let pokemon of pokedex) {
        const clone = template.textContent.cloneNode(true);
>>>>>>> ebde882766946b3d1e21eb192ba45b07bd27a0c2

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');

        name.textContent = 'Name: ' + pokemon.pokemon;

        type.textContent = 'Type: ' + pokemon.type_1;

        image.src = pokemon.url_image;
        image.alt = pokemon.pokemon;

        list.appendChild(clone);
    }
}
// set event listeners 
selectEl.addEventListener('change', async(event) => {
    const selected = event.target.value;

    if (selected === 'none') {
        const p = document.createElement('p');

        p.textContent = 'please select an API';

        errorElement.appendChild(p);
    } else if (selected === 'pokemon') {
        list.innerHTML = '';
        errorElement.innerHTML = '';

        await loadPokedex();
    } else if (selected === 'star-wars') {
    //TODO add star wars
    }
});
