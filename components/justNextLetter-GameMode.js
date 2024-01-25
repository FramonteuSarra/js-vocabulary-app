import { failuresToNextWord } from "./failuresToNextWord";
import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { renderWords } from "./renders/renderWords";
import { updateScore } from "./updateScore";

export const justNextLetter = ( pressedKey ) => {       // Modo de juego que solo es válido al tocar la siguiente letra de la palabra, y no en cualquier orden

    if ( !pressedKey ) return;

    let success = false;

    if ( actualWord.translatedWordArray[actualWord.wordIteration] === ' ' ) actualWord.wordIteration++;        // En caso de oraciones o palabras compuestas, va a saltar el espacio y va a pasar a la siguiente letra

    if ( actualWord.translatedWordArray[actualWord.wordIteration] === pressedKey ) {   // No hace falta recorrer el split de la palabra, solo nos interesa evaluar la siguiente letra

        actualWord.translatedWordArray[actualWord.wordIteration] = '1';      // Cambiamos la letra de la posición actual por un número (Puede ser casi cualquier otra cosa), para que en la próxima iteración no vuelva a coincidir una letra ya encontrada
        actualWord.hiddenWordArray[actualWord.wordIteration] = actualWord.renderTranslatedWord[actualWord.wordIteration];
        success = true;

        renderWords( actualWord.renderOriginalWord, actualWord.hiddenWordArray.join(' ') );
        actualWord.wordIteration++;
        
        if ( !actualWord.hiddenWordArray.join('').includes('_') ) {  // Si el hiddenWordArray ya no contiene guiones bajos se entiende que la palabra se completó, no se contempla ninguna palabra u oración que incluya guiones bajos y que genere conflictos acá

            actualWord.wordIteration = 0;
            updateScore(3);     // '3' para indicar al updateScore que se completó la palabra
            
            return true;        // Retorno true indicando al "app" que la "completedWord" existe, para que remueva el evento existente

        }

        document.querySelectorAll(`.${gameModeDescription.keyboardClass}`).forEach( button => {                                 

            if( button.style.backgroundColor === 'rgb(255, 119, 144)' ) button.style.backgroundColor = 'rgb(240, 240, 240)';     // Restablece el color de los botones una vez se acierta la letra
        });

        updateScore(1);      // '1' para indicar al updateScore que hubo éxito con la letra actual, sin completar aún la palabra
        return;

    }

    if (!success) {
        
        const finishGame = updateScore(2);       // '2' para indicar al updateScore que no hubo éxito con la letra actual. Llega 'true' para poder reinicializar la iteración cuando se pierden todas las vidas en este modo de juego

        document.querySelectorAll(`.${gameModeDescription.keyboardClass}`).forEach( button => {                                 

            if( button.value === gameModeDescription.actualPressedKeyEvent.key?.toUpperCase() )  button.style.backgroundColor = 'rgb(255, 119, 144)';     // Marca en rojo el botón en caso de error
            if( gameModeDescription.actualPressedKeyEvent.type === 'click' && gameModeDescription.actualPressedKeyEvent.target.value === button.value ) button.style.backgroundColor = '#FF7790';

        });

        if ( finishGame ) {        // No queremos reinicializar la iteración con cada fallo, solo si se pierde
            
            actualWord.wordIteration = 0;
            document.querySelector('.nextWordButton')?.remove();                            // Removemos el botón de pasar palabra en caso de que exista

        }

        actualWord.failuresToNextWord++;                       

        if( actualWord.failuresToNextWord === 3 ) failuresToNextWord();         // Con cada error vamos sumando una unidad a este contador. Llegado a 3 se brinda la posibilidad de pasar la palabra

    }

}