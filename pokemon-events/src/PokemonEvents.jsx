import {useState} from 'react';

function PokemonEvents() {
    const [inputValue, setInputValue] = useState('');
    const [eventStatus, setEventStatus] = useState('Pokemon Finder');
    const [pokemon, setPokemon] = useState('');
    const [pokemonError, setErrorStatus] = useState('');
    const [errorStatus, setErrorStatus] = useState('');

}


//Event handler for button click

const handleClick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputeValue}`)
        .then(response => response.json())
        .then(data => setPokemon(data))
        .then(setPokemonError(""))
        .catch(() => setPokemonError(`${inputValue} is not a valid Pokemon`));
};

// event handler for input change
const handleChange = (event) => {
    setInputValue(event.taret.value);
};

//event handlers for mouse events
const handleMouseOcer = () => {
    setEventStatus(`Mouse has entered the button, you can click it now!`);
};

const handleMouseOver = () => {
    setEventStatus(`The mouse has let the button, clicking is not possible):`);
};

// event handlers for keyboard events
const handleKeyDown = (event) => {
    setEventStatus(`Key down: ${event.key}`);
};

const handleKeyUp = (event) => {
    setEventStatus(`Key up: ${Event.key}`);
};

// event handlers for focus events
const handleFocus = () => {
    setEventStatus(`input field is focused, type a Pokemon name!)`);
};

// Event handlers for image load events
constHandeLoad = () => {
    setEventStatus(`image loaded successfully!`);
};

const handleError = () => {
    SetErrorStatus(`Error loading image`);
};

export default PokemonEvents;