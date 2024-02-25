import { App } from "../app";
import { headerTitleHtml } from "../helpers/references";
import { gameModeDescription } from "./renders/gameModesDescriptions";

export const continueGame = () => {

    const options = document.querySelectorAll('.option-gamemode');

    options.forEach( ( option ) => {                    // Habilitamos los modos nuevamente..

        option.disabled = '';
                       
    })
    
    App();
    headerTitleHtml.innerText = gameModeDescription.name;
    document.querySelector(`.${ gameModeDescription.keyboardClass }`).focus();

}