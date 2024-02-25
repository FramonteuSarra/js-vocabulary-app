import { actualWord, getRandomWord } from "./components/getRandomWord";
import { checkPressedKey } from "./components/checkPressedKey";
import { gameModeDescription } from "./components/renders/gameModesDescriptions";
import { selectContainerHtml } from "./helpers/references";
import { restartGame } from "./components/restartGame";
import { initWordByAPI } from "./components/translateAPI/initWordByAPI";
import { renderButtons } from "./components/renders/renderButtons";
import { initWordByLocalFiles } from "./components/initWordByLocalFiles";

const restartGameButton = document.createElement('button');

restartGameButton.innerText = 'Reiniciar Juego';
restartGameButton.classList.add('restartGameButton');

export const App = () => {
    
    renderButtons();                                                    // Renderiza el teclado correspondiente según el idioma a traducir
    getRandomWord();                                                    // Obtiene una palabra aleatoria desde los archivos locales, según corresponda

    if( gameModeDescription.translateAPI ) {                            // Estas funciones inicializan las diferentes formas de la palabra, y le modifican los caracteres especiales y espacios según corresponda

        initWordByAPI();

    } else {

        initWordByLocalFiles();

    }

    document.querySelector('.continueGameButton')?.remove();                                // Remueve el botón de continuar juego en caso de existir
    selectContainerHtml.append( restartGameButton );
    restartGameButton.addEventListener('click', restartGame, true);                     // Botón para reiniciar el juego

    let pressedKey, completedWord;
   
    const eventFunction = ( event ) => {

        if( actualWord.translatedWord === '' || actualWord.originalWord === '' ) return;

        pressedKey = checkPressedKey( event );                                          // Obtenemos la letra presionada ya sea con teclado o con mouse

        document.querySelectorAll(`.${gameModeDescription.keyboardClass}`).forEach( button => {

            if( button.value === pressedKey )  button.focus();                          // Ponemos el focus en cada botón de la pantalla cuando estemos usando un teclado

        });
        
        completedWord = gameModeDescription.gameMode( pressedKey );                 // Llamamos al modo de juego elegido enviandole la letra presionada para que sea evaluada
                
        if (completedWord) {                                                        // Removemos el evento una vez completada la palabra
            document.removeEventListener('click', eventFunction, true);
            document.removeEventListener('keyup', eventFunction, true);
            completedWord = false;
        }

    }

    document.addEventListener('click', eventFunction, true);
    document.addEventListener('keyup', eventFunction, true);

    document.querySelector('.selectGameMode').addEventListener('change', () => {                               // remueve el eventListener anterior, al cambiar el modo de juego

        document.removeEventListener('click', eventFunction, true);
        document.removeEventListener('keyup', eventFunction, true);
    
    });

}