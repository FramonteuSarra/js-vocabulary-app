import { buttonsContainer, headerTitleHtml, originalWordHtml, translatedWordHtml } from '../helpers/references';
import { languagesToChoose } from './languagesToChoose';
import { createSelectDifficulty, createSelectGameMode, createSelectWordsType } from './renders/createSelects';
import { gameModeDescription, gameModesDescriptions } from './renders/gameModesDescriptions';
import { showCheckBoxesDifficulty } from './showCheckBoxesDifficulty';
import { showCheckBoxesWordsType } from './showCheckBoxesWordsType';

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
        
        languagesToChoose();

        createSelectDifficulty();
        document.querySelector('.selectBoxDifficulty').addEventListener('click', showCheckBoxesDifficulty, true);       // JS para el select de la dificultad para que pueda simular un select con checkboxes
        
        createSelectWordsType();
        document.querySelector('.selectBoxWordsType').addEventListener('click', showCheckBoxesWordsType, true);       // JS para el select de los tipos de palabras para que pueda simular un select con checkboxes

        document.querySelector('.restartGameButton')?.remove();                                     // Remueve el botón de reinicio en caso de existir

        const options = document.querySelectorAll('.option-gamemode')                               // Desabilito las options para que no se pueda cambiar el modo de juego hasta que no se inicialice por completo el ya elegido
            
            options.forEach( ( option ) => {

                option.disabled = 'disabled';
                               
        })
              
    });
    
};


selectGameMode();