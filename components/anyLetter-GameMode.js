import { renderWords } from "../components/renders/renderWords";
import { score, updateScore } from "../components/updateScore";

export const anyLetter = ( hiddenWordArray, translatedWordArray, translatedWord, originalWord, pressedKey ) => {

    if ( !pressedKey ) return;
    
    let success = false;

    for( score.iteration = 0; score.iteration < translatedWordArray.length; score.iteration++ ) {
        
        if( translatedWordArray[score.iteration] === pressedKey ) {

            translatedWordArray[score.iteration] = '1';
            hiddenWordArray[score.iteration] = pressedKey;
            success = true;

            renderWords( originalWord, hiddenWordArray.join(' ') );
            
            if( hiddenWordArray.join('') === translatedWord ) {
                
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
    }
        
}

