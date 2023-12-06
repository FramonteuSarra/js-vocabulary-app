import { createSelectLanguages } from "./renders/createSelects";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { startGame } from "./startGame";



export const languagesToChoose = () => {

    createSelectLanguages( '1' );
    createSelectLanguages( '2' );
           
    document.querySelector('.selectLanguage1').addEventListener('change', ( event ) => { 
        
        gameModeDescription.chosenOriginalLanguage = event.target.value;

        if ( !gameModeDescription.chosenTranslatedLanguage ) return;

        startGame();
    
    });
        
    document.querySelector('.selectLanguage2').addEventListener('change', ( event ) => { 
        
        gameModeDescription.chosenTranslatedLanguage = event.target.value;

        if ( !gameModeDescription.chosenOriginalLanguage ) return;

        startGame();

    }); 

};


    

    

