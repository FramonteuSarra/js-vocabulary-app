import { App } from "../app";
import { gameModeDescription, setTranslatedLanguage } from "./renders/gameModesDescriptions";
import { updateScore } from "./updateScore";
import { initArrayByParameters } from "./initArrayByParameters";
import { selectContainerHtml } from "../helpers/references";
import { checkedBoxes } from "./checkedBoxes";
import { actualWord } from "./getRandomWord";

const InitGame = () => {

    if( gameModeDescription.chosenOriginalLanguage === gameModeDescription.chosenTranslatedLanguage ) return alert('Los idiomas deben ser diferentes');

    const areBoxesChecked = checkedBoxes();         // Corroboramos que haya al menos 1 dificultad elegida y 1 tipo de palabras antes de ejecutar la app
    if( !areBoxesChecked ) return;

    const options = document.querySelectorAll('.option-gamemode');              // Una vez entrados acá luego de iniciar el juego, vuelvo a habilitar las options del los modos de juego
    options.forEach( ( option ) => {

        option.disabled = '';
                                   
    });

    updateScore( 0 );     // '0' reinicializa los valores de los puntajes
    setTranslatedLanguage();    // Seteamos el teclado, caracteres especiales, y las palabras del idioma a traducir elegido por el usuario
    initArrayByParameters();    // Inicializamos el array de palabras según los parametros (dificultad y tipos de palabras elegidas por el usuario)
    App();
    
    document.querySelector('#select-game-mode').selected = 'selected';      // Mantiene el select con el primer valor para que todas las opciones estén siempre disponibles para elegir
    document.querySelector(`.${ gameModeDescription.keyboardClass }`).focus();    // Se coloca el focus sobre los botones para que no quede dentro del select y se ejecuten los eventos sin necesidad de hacer un click para salir del select
    actualWord.wordIteration = 0;
    
    startGameButton.removeEventListener('click', InitGame, true);           // Se remueven el evento y los elementos HTML que los invocan para que no queden eventos antiguos activos al reinicializarse la app
    startGameButton.remove();
    document.querySelector('.selectLanguage1').remove();
    document.querySelector('.selectLanguage2').remove();
    document.querySelector('.divContainerSelectDifficulty').remove();
    document.querySelector('.divContainerSelectWordsType').remove();
    
}

export const startGameButton = document.createElement('button');
        
startGameButton.innerText = 'Iniciar Juego';
startGameButton.classList.add('startGameButton');

export const startGame = () => {
              
    selectContainerHtml.append( startGameButton );
    startGameButton.addEventListener('click', InitGame, true)

}






