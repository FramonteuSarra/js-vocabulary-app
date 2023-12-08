import { App } from "../app";
import { selectContainerHtml, translatedWordContainer, translatedWordHtml } from "../helpers/references";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { score } from "./updateScore";

export const startGameButton = document.createElement('button');
        
startGameButton.innerText = 'Iniciar Juego';
startGameButton.classList.add('startGameButton');
startGameButton.value = 0;

const InitGame = () => {

    if( gameModeDescription.chosenOriginalLanguage === gameModeDescription.chosenTranslatedLanguage ) return alert('Los idiomas deben ser diferentes');

    const options = document.querySelectorAll('.option-gamemode');

    options.forEach( ( option ) => {

        option.disabled = '';
                                   
    })

    const input = document.createElement('input');

    input.type = Text;
    input.classList.add('input');
    selectContainerHtml.append( input )

    input.focus();

    App();
    document.querySelector('#select-game-mode').selected = 'selected';      // Mantiene el select con el primer valor para que todas las opciones estén siempre disponibles para elegir
    // document.querySelector('.buttons').focus();                             // Se coloca el focus sobre los botones para que no quede dentro del select y se ejecuten los eventos sin necesidad de hacer un click para salir del select
    score.iteration = 0;
    startGameButton.removeEventListener('click', InitGame, true);           // Se remueven el evento y los elementos HTML que los invocan para que no queden eventos antiguos activos al reinicializarse la app
    startGameButton.remove();
    document.querySelector('.selectLanguage1').remove();
    document.querySelector('.selectLanguage2').remove();

}

export const startGame = () => {
              
    translatedWordContainer.append( startGameButton );
    startGameButton.addEventListener('click', InitGame, true)

}






