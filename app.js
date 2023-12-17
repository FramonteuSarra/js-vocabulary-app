import { getRandomWord } from "./components/getRandomWord";
import { renderButtons } from "./components/renders/renderButtons";
import { checkPressedKey } from "./components/checkPressedKey";
import { gameModeDescription, setOriginalLanguage, setTranslatedLanguage } from "./components/renders/gameModesDescriptions";
import { selectContainerHtml } from "./helpers/references";
import { restartGame } from "./components/restartGame";
import { initWord } from "./components/initWord";
import { initArrayByParameters } from "./components/initArrayByParameters";

const restartGameButton = document.createElement('button');

restartGameButton.innerText = 'Reiniciar Juego';
restartGameButton.classList.add('restartGameButton');

export const App = () => {

    setOriginalLanguage();                                  // TODO: esto aca se está ejecutando cada vez que se completa una palabra y en algunos casos no es necesario!!!
    setTranslatedLanguage();
    renderButtons();
    initArrayByParameters();
    getRandomWord();
    initWord();                                                                         // Acá es donde se evalua si se usa la API o los archivos locales

    selectContainerHtml.append( restartGameButton );
    restartGameButton.addEventListener('click', restartGame, true);

    let pressedKey, completedWord;
   
    const eventFunction = ( event ) => {

        pressedKey = checkPressedKey( event );
        
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