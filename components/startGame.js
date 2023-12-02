import { App } from "../app";
import { translatedWordContainer } from "../helpers/references";
import { score } from "./updateScore";

const startGameButton = document.createElement('button');
        
startGameButton.innerText = 'Iniciar Juego';
startGameButton.classList.add('startGameButton');
startGameButton.value = 0;

const InitGame = () => {

    App();
    document.querySelector('#select-game-mode').selected = 'selected';      // Mantiene el select con el primer valor para que todas las opciones estén siempre disponibles para elegir
    document.querySelector('.buttons').focus();                             // Se coloca el focus sobre los botones para que no quede dentro del select y se ejecuten los eventos sin necesidad de hacer un click para salir del select
    score.iteration = 0;
    startGameButton.removeEventListener('click', InitGame, true);
    startGameButton.remove();

}

export const startGame = () => {

    translatedWordContainer.append( startGameButton );

    startGameButton.addEventListener('click', InitGame, true);

}