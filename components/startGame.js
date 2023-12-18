import { App } from "../app";
import { gameModeDescription, setTranslatedLanguage } from "./renders/gameModesDescriptions";
import { eventSelectDifficulty } from "./showCheckBoxesDifficulty";
import { eventSelectWordsType } from "./showCheckBoxesWordsType";
import { score, updateScore } from "./updateScore";
import { initArrayByParameters } from "./initArrayByParameters";
import { selectContainerHtml } from "../helpers/references";

export const startGameButton = document.createElement('button');
        
startGameButton.innerText = 'Iniciar Juego';
startGameButton.classList.add('startGameButton');

const InitGame = () => {

    if( gameModeDescription.chosenOriginalLanguage === gameModeDescription.chosenTranslatedLanguage ) return alert('Los idiomas deben ser diferentes');

    const checkedBoxesDifficulty = document.querySelectorAll('.checkBoxesDifficulty');
    gameModeDescription.difficulties = [];
    let isBoxChecked;

    checkedBoxesDifficulty.forEach( ( box ) => {

        if ( box.checked ) {
            
            gameModeDescription.difficulties.push(box.value);
            isBoxChecked = true;

        }

    });

    if ( !isBoxChecked ) return alert('Se debe seleccionar al menos una dificultad');

    isBoxChecked = false;

    const checkedBoxesWordsType = document.querySelectorAll('.inputWordsType');
    gameModeDescription.wordsTypes = [];

    checkedBoxesWordsType.forEach( ( box ) => {

        if ( box.checked ) {
            
            gameModeDescription.wordsTypes.push(box.value);
            isBoxChecked = true;

        }

    });

    if ( !isBoxChecked ) return alert('Se debe seleccionar al menos un conjunto de palabras');



    const options = document.querySelectorAll('.option-gamemode');              // Una vez entrados acá luego de iniciar el juego, vuelvo a habilitar las options del los modos de juego

    options.forEach( ( option ) => {

        option.disabled = '';
                                   
    });

    updateScore( 0 );     // '0' reinicializa los valores de los puntajes
    setTranslatedLanguage();
    initArrayByParameters();
    App();
    document.querySelector('#select-game-mode').selected = 'selected';      // Mantiene el select con el primer valor para que todas las opciones estén siempre disponibles para elegir
    document.querySelector(`.${ gameModeDescription.keyboardClass }`).focus();                             // Se coloca el focus sobre los botones para que no quede dentro del select y se ejecuten los eventos sin necesidad de hacer un click para salir del select
    score.iteration = 0;
    
    startGameButton.removeEventListener('click', InitGame, true);           // Se remueven el evento y los elementos HTML que los invocan para que no queden eventos antiguos activos al reinicializarse la app
    startGameButton.remove();
    document.querySelector('.selectLanguage1').remove();
    document.querySelector('.selectLanguage2').remove();
    document.querySelector('.divContainerSelectDifficulty').remove();
    document.querySelector('.divContainerSelectWordsType').remove();
    removeEventListener('click', eventSelectDifficulty, true);
    removeEventListener('click', eventSelectWordsType, true);

}

export const startGame = () => {
              
    selectContainerHtml.append( startGameButton );
    startGameButton.addEventListener('click', InitGame, true)

}






