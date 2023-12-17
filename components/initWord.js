import { originalWordHtml, translatedWordHtml } from "../helpers/references";
import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { renderWords } from "./renders/renderWords";
import { translateFunction } from "./translateAPI/translateAPI";


export const initWord = async() => {

    if ( gameModeDescription.translateAPI === '1' ) {                                                                   // Utiliza la API para la traducción

        try {

            originalWordHtml.innerHTML   = 'Cargando...';
            translatedWordHtml.innerHTML = 'Cargando...';
    
            const newWord = await translateFunction();
    
            if( newWord ) {
    
                actualWord.translatedWord = newWord.toUpperCase();
    
                actualWord.hiddenWord = '_ '.repeat(actualWord.translatedWord.length);
    
                actualWord.hiddenWordArray = actualWord.hiddenWord.split(' ');
                actualWord.translatedWordArray = actualWord.translatedWord.split('');
    
                renderWords(); 
    
            }
    
        } catch ( error ) {
            
            return error;
    
        }

    } else {                                                                                                            // Utiliza los archivos locales para la traducción

        actualWord.hiddenWord = '_ '.repeat(actualWord.translatedWord.length);
    
        actualWord.hiddenWordArray = actualWord.hiddenWord.split(' ');
        actualWord.translatedWordArray = actualWord.translatedWord.split('');

        renderWords();

    }

}