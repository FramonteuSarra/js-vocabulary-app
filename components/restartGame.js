import { getRandomWord } from "./getRandomWord";
import { initWord } from "./initWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { renderButtons } from "./renders/renderButtons";
import { score, updateScore } from "./updateScore"


export const restartGame = () => {

    updateScore( 0 );     // '0' reinicializa los valores de los puntajes
    getRandomWord();
    initWord();
    renderButtons();
    score.iteration = 0;
    document.querySelector(`.${ gameModeDescription.keyboardClass }`).focus(); 

}