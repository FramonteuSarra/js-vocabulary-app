import { actualWord, getRandomWord } from "./getRandomWord";
import { initWordByAPI } from "./translateAPI/initWordByAPI";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { renderButtons } from "./renders/renderButtons";
import { updateScore } from "./updateScore"
import { initWordByLocalFiles } from "./initWordByLocalFiles";

export const restartGame = () => {

    updateScore( 0 );     // '0' reinicializa los valores de los puntajes
    getRandomWord();
    
    if( gameModeDescription.translateAPI ) {

        initWordByAPI();

    } else {

        initWordByLocalFiles();

    }

    renderButtons();
    actualWord.wordIteration = 0;
    actualWord.failuresToNextWord = 0;
    document.querySelector('.nextWordButton')?.remove();                            // Removemos el botón de pasar palabra en caso de que exista
    document.querySelector(`.${ gameModeDescription.keyboardClass }`).focus();    // Ponemos el focus en los botones

}