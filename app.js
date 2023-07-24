import { getRandomWord } from "./components/getRandomWord";
import { renderWords } from "./components/renders/renderWords";
import { renderButtons } from "./components/renders/renderButtons";
import { checkLetterGameMode1 } from "./gamemodes/gameMode1.checkLetter";
import { checkLetterGameMode2 } from "./gamemodes/gameMode2.checkLetter";
import { headerTitleHtml } from "./helpers/references";


export const modoJuego1 = () => {

    const [ originalWord, translatedWord, hiddenWord, hiddenWordArray, translatedWordArray ] = getRandomWord();

    checkLetterGameMode1( hiddenWordArray, translatedWordArray, translatedWord, originalWord );
    renderButtons();
    renderWords( originalWord, hiddenWord );
    headerTitleHtml.innerText = 'Game Mode 1';
    
}



export const modoJuego2 = () => {

    const [ originalWord, translatedWord, hiddenWord, hiddenWordArray, translatedWordArray ] = getRandomWord();

    checkLetterGameMode2( hiddenWordArray, translatedWordArray, translatedWord, originalWord );
    renderButtons();
    renderWords( originalWord, hiddenWord );
    headerTitleHtml.innerText = 'Game Mode 2';

}