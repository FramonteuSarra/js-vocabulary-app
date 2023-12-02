import { selectContainerHtml } from "../../helpers/references";
import { gameModeDescription, gameModesDescriptions } from "./gameModesDescriptions";



/**
 * 
 * @param {Number} gameModesAmounts 
 */

export const createSelectGameMode = ( gameModesAmounts ) => {

    const selectGameMode = document.createElement('select');
    selectGameMode.classList.add('select');

    for( let i = 0; i <= gameModesAmounts; i++) {

        gameModeDescription.type = i;

        gameModesDescriptions(); 

        const option = document.createElement('option');

        option.text  = `${ i } - ${ gameModeDescription.name }`;
        option.value = i;
        option.classList.add('select-option');

        if( i === 0 ) {
            option.id       = 'select-game-mode';
            option.selected = 'selected';
            option.disabled = 'disabled';
            option.text     = `Seleccione el modo de juego`;
        }

        selectGameMode.appendChild( option );
        
    }

    selectContainerHtml.append( selectGameMode );   

}