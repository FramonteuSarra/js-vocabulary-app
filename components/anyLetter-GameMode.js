import { renderWords } from "../components/renders/renderWords";
import { score, updateScore } from "../components/updateScore";
import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";

export const anyLetter = ( pressedKey ) => {

    if ( !pressedKey ) return;
    
    let success = false;

    for( score.iteration = 0; score.iteration < actualWord.translatedWordArray.length; score.iteration++ ) {
        
        if( actualWord.translatedWordArray[score.iteration] === pressedKey ) {

            actualWord.translatedWordArray[score.iteration] = '1';
            actualWord.hiddenWordArray[score.iteration] = pressedKey;
            success = true;

            renderWords( actualWord.originalWord.split(':')[1], actualWord.hiddenWordArray.join(' ') );
            
            if( actualWord.hiddenWordArray.join('') === actualWord.translatedWord ) {
                
                score.iteration = 0;
                updateScore( 3 );
                
                return true;                                // Retorno true indicando al "app" que la "completedWord" existe, para que remueva el evento existente 

            }

            updateScore( 1 );    
            return;                

        };

    };

    if( !success ) {

        updateScore( 2 );

        document.querySelectorAll(`.${gameModeDescription.keyboardClass}`).forEach( button => {                                 

            if( button.value === gameModeDescription.actualPressedKeyEvent.key?.toUpperCase() || button.value === gameModeDescription.actualPressedKeyEvent.target.value )  button.style.backgroundColor = '#FF7790';     // Marca en rojo el botón en caso de error

        });
 
    }
        
}

