import { actualWord } from "./getRandomWord";
import { renderWords } from "./renders/renderWords";
import { score, updateScore } from "./updateScore";

export const justNextLetter = ( pressedKey ) => {       // Modo de juego que solo es válido al tocar la siguiente letra de la palabra, y no en cualquier orden

    if ( !pressedKey ) return;

    let success = false;

    if ( actualWord.translatedWordArray[score.iteration] === pressedKey ) {

        actualWord.translatedWordArray[score.iteration] = '1';
        actualWord.hiddenWordArray[score.iteration] = pressedKey;
        success = true;
        renderWords( actualWord.originalWord, actualWord.hiddenWordArray.join(' ') );
        score.iteration++;
        
        if ( actualWord.hiddenWordArray.join('') === actualWord.translatedWord ) {

            score.iteration = 0;
            updateScore(3);
            
            return true;                                                // Retorno true indicando al "app" que la "completedWord" existe, para que remueva el evento existente

        }

        updateScore(1);
        return;

    }

    if (!success) {
        
        success = updateScore(2);                                                        // Llega 'true' para poder reinicializar "i" cuando se pierden todas las vidas

        if ( success ) {                                                           

            score.iteration = 0;

        }

    }

}