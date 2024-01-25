import { selectContainerHtml } from "../helpers/references";
import { actualWord, getRandomWord } from "./getRandomWord";
import { initWordByLocalFiles } from "./initWordByLocalFiles";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { renderButtons } from "./renders/renderButtons";
import { initWordByAPI } from "./translateAPI/initWordByAPI";

const getNextWord = () => {

    getRandomWord();
    
    if( gameModeDescription.translateAPI ) {

        initWordByAPI();

    } else {

        initWordByLocalFiles();

    }

    renderButtons();
    actualWord.failuresToNextWord = 0;
    document.querySelector(`.${ gameModeDescription.keyboardClass }`).focus();    // Ponemos el focus en los botones
    document.querySelector('.nextWordButton').remove();

}



export const failuresToNextWord = () => {

    const nextWordButton = document.createElement('button');

    nextWordButton.innerText = '¿Pasar palabra?';
    nextWordButton.classList.add('nextWordButton');

    selectContainerHtml.append( nextWordButton );
    nextWordButton.addEventListener('click', getNextWord, true); 

}