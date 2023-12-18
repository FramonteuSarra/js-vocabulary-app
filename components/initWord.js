import { originalWordHtml, translatedWordHtml } from "../helpers/references";
import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { renderWords } from "./renders/renderWords";
import { translateFunction } from "./translateAPI/translateAPI";


export const initWord = async() => {

        try {

            originalWordHtml.innerHTML   = 'Cargando...';
            translatedWordHtml.innerHTML = 'Cargando...';

            if( gameModeDescription.chosenOriginalLanguage !== 'en-GB' ) { 

                originalWordHtml.innerHTML   = 'Cargando...';
    
                const newOriginalWord = await translateFunction( gameModeDescription.chosenOriginalLanguage );

                if( newOriginalWord ) {
    
                    actualWord.renderOriginalWord = newOriginalWord.toUpperCase();
                
                    renderWords(); 
        
                }
            
            } else {

                actualWord.renderOriginalWord = actualWord.originalWord.split(':')[1];

                console.log( actualWord.renderOriginalWord );

                renderWords(); 

            }

            if( gameModeDescription.chosenTranslatedLanguage !== 'en-GB' ) {

                translatedWordHtml.innerHTML = 'Cargando...';

                const newTranslatedWord = await translateFunction( gameModeDescription.chosenTranslatedLanguage );
    
                if( newTranslatedWord ) {
        
                    actualWord.translatedWord = newTranslatedWord.toUpperCase();
        
                    actualWord.hiddenWord = '_ '.repeat(actualWord.translatedWord.length);
        
                    actualWord.hiddenWordArray = actualWord.hiddenWord.split(' ');
                    actualWord.translatedWordArray = actualWord.translatedWord.split('');
        
                    renderWords(); 
        
                }

            } else {

                actualWord.translatedWord = actualWord.originalWord.split(':')[1].toUpperCase();

                console.log( actualWord.translatedWord );
        
                actualWord.hiddenWord = '_ '.repeat(actualWord.translatedWord.length);
    
                actualWord.hiddenWordArray = actualWord.hiddenWord.split(' ');
                actualWord.translatedWordArray = actualWord.translatedWord.split('');
    
                renderWords(); 

            }

            
    
        } catch ( error ) {
            
            return error;
    
        }

}