import { getRandomWord } from "./components/getRandomWord";
import { renderWords } from "./components/renders/renderWords";
import { renderButtons } from "./components/renders/renderButtons";
import { GameMode1 } from "./gamemodes/gameMode1";
import { GameMode2 } from "./gamemodes/gameMode2";
import { checkPressedKey } from "./components/checkPressedKey";
import { gameModeDescription } from "./components/renders/gameModesDescriptions";


export const App = () => {

    const [ originalWord, translatedWord, hiddenWord, hiddenWordArray, translatedWordArray ] = getRandomWord();
    renderButtons();
    renderWords( originalWord, hiddenWord );
    let pressedKey, completedWord;
   
    
    
    const eventFunction = ( event ) => {

            pressedKey = checkPressedKey( event );
            
            switch( gameModeDescription.type ) {

                case 1:
                    completedWord = GameMode1( hiddenWordArray, translatedWordArray, translatedWord, originalWord, pressedKey );
                    break;
                
                case 2:
                    completedWord = GameMode2( hiddenWordArray, translatedWordArray, translatedWord, originalWord, pressedKey );
                    break;
        
            };

            if (completedWord) {
                document.removeEventListener('click', eventFunction, true);
                document.removeEventListener('keyup', eventFunction, true);
                completedWord = false;
            }

    }

    document.addEventListener('click', eventFunction, true);
    document.addEventListener('keyup', eventFunction, true);

    document.querySelector('.select').addEventListener('change', () => {                               // remueve el eventListener anterior, al cambiar el modo de juego o reinicializar el juego

        document.removeEventListener('click', eventFunction, true);
        document.removeEventListener('keyup', eventFunction, true);
    
    });



    
    
}