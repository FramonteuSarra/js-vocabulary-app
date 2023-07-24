import { renderWords } from "../components/renders/renderWords";
import { score, updateScore } from "../components/updateScore";

/**
 * 
 * @param {Array<String>} hiddenWordArray 
 * @param {Array<String>} translatedWordArray 
 * @param {String} translatedWord 
 * @param {String} originalWord 
 */

export const checkLetterGameMode1 = ( hiddenWordArray, translatedWordArray, translatedWord, originalWord ) => {   

    const eventFunction = ( event ) => {    

        if( score.lifes <= 0 ) {
            return;
        }

        if( event.target.className === 'select') return;

        if( event.keyCode ) { 

            if( event.keyCode >= 65 && event.keyCode <= 90 ) {

                event.target.value = event.key.toUpperCase();

            } else {

                return;

            }
        
        } else {
            
            if( event.target.className !== 'buttons' ) return;
        
        }
        
        let success = false;

        for( let i = 0; i < translatedWordArray.length; i++ ) {
        
            if( translatedWordArray[i] === event.target.value ) {

                   
               
                translatedWordArray[i] = '1';
                hiddenWordArray[i] = event.target.value;
                success = true;
                renderWords( originalWord, hiddenWordArray.join(' ') );
                if( hiddenWordArray.join('') === translatedWord ) {
                    updateScore( 3, 1 );
                    document.removeEventListener('click', eventFunction, true);
                    document.removeEventListener('keyup', eventFunction, true);
                    return;
                }
                updateScore( 1, 1 );    
                return;                

            };

        };

        if( !success ) {
            updateScore( 2, 1 );
        }
        
    };

        document.addEventListener('click', eventFunction, true);
        document.addEventListener('keyup', eventFunction, true);

        document.querySelector('.select').addEventListener('change', () => {

            document.removeEventListener('click', eventFunction, true);
            document.removeEventListener('keyup', eventFunction, true);

        });

};