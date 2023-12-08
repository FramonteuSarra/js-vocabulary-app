import { selectContainerHtml } from "../../helpers/references";
import { gameModeDescription, gameModesDescriptions, languages } from "./gameModesDescriptions";


export const createSelectGameMode = () => {

    const selectGameMode = document.createElement('select');
    selectGameMode.classList.add('selectGameMode');

    for( let i = 0; i <= gameModeDescription.totalGameModes; i++) {

        gameModeDescription.chosenGameMode = i;

        gameModesDescriptions(); 

        const option = document.createElement('option');

        option.text  = `${ i } - ${ gameModeDescription.name }`;
        option.value = i;
        option.classList.add('option-gamemode');

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


export const createSelectLanguages = ( argument ) => {

    const selectGameMode = document.createElement('select');
    selectGameMode.classList.add('selectLanguage' + argument);

    for( let i = 0; i <= gameModeDescription.totalLanguages; i++) {

        const option = document.createElement('option');

        option.text  = `${ languages[i] }`;
        option.value = i;
        option.classList.add('select-option');

        let languageType = 'original';

        if( argument === '2' ) {
            
            languageType = 'al que traducir';
        
        }

        if( i === 0 ) {
            option.id       = 'select-game-mode';
            option.selected = 'selected';
            option.disabled = 'disabled';
            option.text     = `Seleccione el idioma ${ languageType }`;
        }

        selectGameMode.appendChild( option );
        
    }

    selectContainerHtml.append( selectGameMode );   

}