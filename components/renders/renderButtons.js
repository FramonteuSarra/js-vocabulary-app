import { buttonsContainer } from "../../helpers/references";
import { gameModeDescription } from "./gameModesDescriptions";

export const renderButtons = () => {

    buttonsContainer.innerHTML = '';

    gameModeDescription.keyboard.forEach( letter => {
    
        const createButton = document.createElement('button');
        createButton.innerText = letter;
        createButton.classList.add( gameModeDescription.keyboardClass );
        createButton.value = letter;
        buttonsContainer.append( createButton );
        
    });
};
