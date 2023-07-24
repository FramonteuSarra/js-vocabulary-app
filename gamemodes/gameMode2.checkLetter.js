import { renderWords } from "../components/renders/renderWords";
import { score, updateScore } from "../components/updateScore";

/**
 * 
 * @param {Array<String>} hiddenWordArray 
 * @param {Array<String>} translatedWordArray 
 * @param {String} translatedWord 
 * @param {String} originalWord 
 */

export const checkLetterGameMode2 = ( hiddenWordArray, translatedWordArray, translatedWord, originalWord ) => {

    let i = 0;

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

        if( translatedWordArray[i] === event.target.value ) {
        
            translatedWordArray[i] = '1';
            hiddenWordArray[i] = event.target.value;
            success = true;
            renderWords( originalWord, hiddenWordArray.join(' ') );
            i++;
            if( hiddenWordArray.join('') === translatedWord ) {
                i = 0;
                updateScore( 3, 2 );
                document.removeEventListener('click', eventFunction, true);
                document.removeEventListener('keyup', eventFunction, true);
                return;
            }
            updateScore( 1, 2 );
            return;
            
        }

        if( !success ) {
            updateScore( 2, 2 );
        }

    };

        document.addEventListener('click', eventFunction, true);
        document.addEventListener('keyup', eventFunction, true);

        document.querySelector('.select').addEventListener('change', () => {

            document.removeEventListener('click', eventFunction, true);
            document.removeEventListener('keyup', eventFunction, true);

        });

};