import { renderWords } from "../components/renders/renderWords";
import { updateScore } from "../components/updateScore";
import { failuresToNextWord } from "./failuresToNextWord";
import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";

export const anyLetter = ( pressedKey ) => {    // Modo de juego en el que cualquier letra de la palabra es válida, en cualquier orden

    if ( !pressedKey ) return;
    
    let success = false;

    for( actualWord.wordIteration = 0; actualWord.wordIteration < actualWord.translatedWordArray.length; actualWord.wordIteration++ ) {   // Iteramos el split de la palabra a traducir...
        
        if( actualWord.translatedWordArray[actualWord.wordIteration] === pressedKey ) {  // Si la letra presionada es igual a la letra actual recorrida...

            actualWord.translatedWordArray[actualWord.wordIteration] = '1';    // Cambiamos la letra de la posición actual por un número (Puede ser casi cualquier otra cosa), para que en la próxima iteración no vuelva a coincidir una letra ya encontrada
            actualWord.hiddenWordArray[actualWord.wordIteration] = actualWord.renderTranslatedWord[actualWord.wordIteration];
            success = true;

            renderWords( actualWord.renderOriginalWord, actualWord.hiddenWordArray.join(' ') );
            
            if( !actualWord.hiddenWordArray.join('').includes('_') ) {          // Si el hiddenWordArray ya no contiene guiones bajos se entiende que la palabra se completó, no se contempla ninguna palabra u oración que incluya guiones bajos y que genere conflictos acá
                
                actualWord.wordIteration = 0;
                actualWord.failuresToNextWord = 0;
                document.querySelector('.nextWordButton')?.remove();            // Removemos el botón de pasar palabra en caso de que exista
                
                updateScore( 3 );     // '3' para indicar al updateScore que se completó la palabra
                return true;         // Retorno true indicando al "app" que la "completedWord" existe, para que remueva el evento existente 

            }

            updateScore( 1 );       // '1' para indicar al updateScore que hubo éxito con la letra actual, sin completar aún la palabra
            return;                

        };

    };

    if( !success ) {        // Si llega false acá significa que la letra fue errónea

        const finishGame = updateScore( 2 );   // '2' para indicar al updateScore que no hubo éxito con la letra actual

        document.querySelectorAll(`.${gameModeDescription.keyboardClass}`).forEach( button => {         // Marcamos en rojo el botón de la letra presionada para facilmente indicar que no es correcto                         

            if( button.value === gameModeDescription.actualPressedKeyEvent.key?.toUpperCase() )  button.style.backgroundColor = '#FF7790';
            if( gameModeDescription.actualPressedKeyEvent.type === 'click' && gameModeDescription.actualPressedKeyEvent.target.value === button.value ) button.style.backgroundColor = '#FF7790';

        });

        actualWord.failuresToNextWord++;                       

        if( actualWord.failuresToNextWord === 3 ) failuresToNextWord();        // Con cada error vamos sumando una unidad a este contador. Llegado a 3 se brinda la posibilidad de pasar la palabra 

        if( finishGame ) document.querySelector('.nextWordButton')?.remove();                            // Removemos el botón de pasar palabra en caso de que exista

    }
        
}

