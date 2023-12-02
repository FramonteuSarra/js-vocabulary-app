import { headerTitleHtml, originalWordHtml, translatedWordHtml } from '../helpers/references';
import { createSelectGameMode } from './renders/createSelectGameMode';
import { gameModeDescription, gameModesDescriptions } from './renders/gameModesDescriptions';
import { startGame } from './startGame';
import { updateScore } from './updateScore';

export const selectGameMode = ( gameModesAmounts) => {

    createSelectGameMode( gameModesAmounts );

    document.querySelector('.select').addEventListener('change', ( event ) => {
        
        gameModeDescription.type = Number(event.target.value);

        gameModesDescriptions();

        headerTitleHtml.innerText = gameModeDescription.name;
        originalWordHtml.innerText = gameModeDescription.description;
        translatedWordHtml.innerText = '';        
        
        updateScore( 0 );     // '0' reinicializa los valores de los puntajes
        startGame();
                  
    });
    
};