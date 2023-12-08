import { getRandomWord } from "./components/getRandomWord";
import { renderWords } from "./components/renders/renderWords";
import { renderButtons } from "./components/renders/renderButtons";
import { checkPressedKey } from "./components/checkPressedKey";
import { gameModeDescription, setOriginalLanguage, setTranslatedLanguage } from "./components/renders/gameModesDescriptions";
import { headerTitleHtml, translatedWordHtml } from "./helpers/references";

export const App = () => {

    setOriginalLanguage();
    setTranslatedLanguage();
    getRandomWord();
    renderButtons();
    renderWords();

    let pressedKey, completedWord;
   
    const eventFunction = ( event ) => {

            pressedKey = checkPressedKey( event );

            translatedWordHtml.innerText = event.keyCode;
            headerTitleHtml.innerText = event.key;
         
            completedWord = gameModeDescription.gameMode( pressedKey );
                    
            if (completedWord) {
                document.removeEventListener('click', eventFunction, true);
                document.removeEventListener('keyup', eventFunction, true);
                completedWord = false;
            }

    }

    document.addEventListener('click', eventFunction, true);
    document.addEventListener('keyup', eventFunction, true);

    document.querySelector('.selectGameMode').addEventListener('change', () => {                               // remueve el eventListener anterior, al cambiar el modo de juego o reinicializar el juego

        document.removeEventListener('click', eventFunction, true);
        document.removeEventListener('keyup', eventFunction, true);
    
    });



    
    
}