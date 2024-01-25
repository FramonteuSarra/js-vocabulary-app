import { originalWordHtml, translatedWordHtml } from "../../helpers/references";
import { actualWord } from "../getRandomWord";
import { gameModeDescription } from "../renders/gameModesDescriptions";
import { renderWords } from "../renders/renderWords";
import { replaceSpecialCharacters } from "../replaceSpecialCharacters";
import { translateFunction } from "./translateAPI";

export const initWordByAPI = async() => {

        try {

            originalWordHtml.innerHTML   = 'Cargando...';
            translatedWordHtml.innerHTML = 'Cargando...';

            if( gameModeDescription.chosenOriginalLanguage !== 'en-GB' ) {              // Si el lenguaje original elegido por el usuario NO es inglés hay que traducir

                originalWordHtml.innerHTML   = 'Cargando...';
    
                const newOriginalWord = await translateFunction( gameModeDescription.chosenOriginalLanguage );      // Creamos una promesa que espera a que la API envíe la traducción...

                if( newOriginalWord ) {
    
                    actualWord.renderOriginalWord = newOriginalWord.toUpperCase();
                
                    renderWords(); 
        
                }
            
            } else {

                actualWord.renderOriginalWord = actualWord.originalWord.split(':')[2];          // Si el lenguaje elegido es inglés simplemente se muestra la palabra tal como es desde el archivo local

                renderWords(); 

            }

            if( gameModeDescription.chosenTranslatedLanguage !== 'en-GB' ) {        // Si el lenguaje original elegido por el usuario NO es inglés hay que traducir

                translatedWordHtml.innerHTML = 'Cargando...';

                const newTranslatedWord = await translateFunction( gameModeDescription.chosenTranslatedLanguage );   // Creamos una promesa que espera a que la API envíe la traducción...
    
                if( newTranslatedWord ) {

                    actualWord.translatedWord       = newTranslatedWord.toUpperCase();          // A esta palabra se le van a modificar los caracteres especiales
                    actualWord.renderTranslatedWord = newTranslatedWord.toUpperCase();          // A esta palabra se la va a mantener tal como está para renderizarla

                    actualWord.hiddenWord = replaceSpecialCharacters( actualWord.translatedWord );      // Función para reemplazar los caracteres especiales

                    console.log( actualWord.translatedWord );
                    console.log( actualWord.renderTranslatedWord );
        
                    actualWord.hiddenWordArray = actualWord.hiddenWord.split(' ');
                    actualWord.hiddenWordArray.pop();

                    actualWord.translatedWordArray = actualWord.translatedWord.split('');

                    renderWords(); 
        
                }

            } else {                            // Si el idioma a traducir elegido es inglés, se inicializa directamente la palabra del archivo local

                actualWord.translatedWord       = actualWord.originalWord.split(':')[2].toUpperCase();
                actualWord.renderTranslatedWord = actualWord.originalWord.split(':')[2].toUpperCase();
                
                console.log( actualWord.translatedWord );

                actualWord.hiddenWord = replaceSpecialCharacters( actualWord.translatedWord );      // Función para reemplazar los caracteres especiales
    
                actualWord.hiddenWordArray = actualWord.hiddenWord.split(' ');
                actualWord.translatedWordArray = actualWord.translatedWord.split('');
    
                renderWords(); 

            }
    
        } catch ( error ) {
            
            return error;
    
        }

}