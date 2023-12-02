import { letters } from "../../helpers/letters";
import { buttonsContainer } from "../../helpers/references";

export const renderButtons = () => {

    buttonsContainer.innerHTML = '';

    letters.forEach( letter => {
    
        const createButton = document.createElement('button');
        createButton.innerText = letter;
        createButton.classList.add('buttons');
        createButton.value = letter;
        buttonsContainer.append( createButton );
        
    
    });
};
