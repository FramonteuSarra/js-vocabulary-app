import { buttonsContainer, headerTitleHtml, originalWordHtml, translatedWordHtml } from '../helpers/references';
import { languagesToChoose } from './languagesToChoose';
import { createSelectGameMode } from './renders/createSelects';
import { gameModeDescription, gameModesDescriptions } from './renders/gameModesDescriptions';
import { updateScore } from './updateScore';

export const selectGameMode = () => {

    createSelectGameMode();

    document.querySelector('.selectGameMode').addEventListener('change', ( event ) => {
        
        gameModeDescription.chosenOriginalLanguage   = '';
        gameModeDescription.chosenTranslatedLanguage = '';
        gameModeDescription.chosenGameMode = Number(event.target.value);

        gameModesDescriptions();

        headerTitleHtml.innerText = gameModeDescription.name;
        originalWordHtml.innerText = gameModeDescription.description;
        translatedWordHtml.innerText = '';
        buttonsContainer.innerHTML = '';
        
        updateScore( 0 );     // '0' reinicializa los valores de los puntajes
        languagesToChoose();

        const options = document.querySelectorAll('.option-gamemode')                               // Desabilito las options para que no se pueda cambiar el modo de juego hasta que no se inicialice por completo el ya elegido
            
            options.forEach( ( option ) => {

                option.disabled = 'disabled';
                               
        })
              
    });
    
};


selectGameMode();