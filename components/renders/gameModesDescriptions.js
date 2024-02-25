import { spanishWords } from "../../helpers/spanishWords";
import { russianCharactersToReplace, russianLetters, russianSpecialKeyCodes, spanishCharactersToReplace, spanishLetters, spanishSpecialKeyCodes } from "../../helpers/letters";
import { anyLetter } from "../anyLetter-GameMode";
import { justNextLetter } from "../justNextLetter-GameMode";
import { russianWords } from "../../helpers/russianWords";

export const gameModeDescription = {

    totalGameModes: 2,                              // Indica al CreateSelects cuantas opciones de juego deben crearse 
    totalLanguages: 2,                              // Indica al CreateSelects cuantos idiomas tiene la aplicación
    chosenOriginalLanguage: '',                     // Indica el idioma original elegido por el usuario
    chosenTranslatedLanguage: '',                   // Indica el idioma a traducir elegido por el usuario
    name: '',
    description: '',
    gameMode: '',                                   // Indica la función del modo de juego que debe ejecutar la aplicación
    keyboard: '',
    keyboardClass: '',                              // Indica la clase de estilos de cada teclado
    specialKeyCodes: '',
    specialCharactersToReplace: [],
    difficulties: [],
    wordsTypes: [],
    actualPressedKeyEvent: '',                      // Guardo el evento actual al presionar una tecla para en caso de error poder marcarla en rojo
    translateAPI: false,                            // True para usar la api de traducción, false para usar los archivos locales
    originalWordsArray: [],
    translatedWordsArray: [],
}

export const gameModesDescriptions = ( number ) => {
    
    switch( number ) {
       
        case 1:
            
            gameModeDescription.name                = '¡Cualquier letra! - 5 vidas.';
            gameModeDescription.description         = 'En este modo de juego, es válida cualquier letra, en cualquier orden.';
            gameModeDescription.gameMode            = anyLetter;

            break;

        case 2:

            gameModeDescription.name                = '¡Solo la siguiente letra! - 5 vidas.';
            gameModeDescription.description         = 'En este modo de juego, solo es válida la siguiente letra.';
            gameModeDescription.gameMode            = justNextLetter;

            break;
        
    }

};

export const setOriginalLanguage = () => {

    switch ( gameModeDescription.chosenOriginalLanguage ) {

        case 'es-ES':

            gameModeDescription.originalWordsArray = spanishWords;      

        break;

        case 'ru-RU':

            gameModeDescription.originalWordsArray = russianWords;

        break;

    }

}

export const setTranslatedLanguage = () => {

    switch ( gameModeDescription.chosenTranslatedLanguage ) {

        case 'es-ES':

            gameModeDescription.keyboard                   = spanishLetters;
            gameModeDescription.specialKeyCodes            = spanishSpecialKeyCodes;
            gameModeDescription.keyboardClass              = 'spanishButtons'
            gameModeDescription.specialCharactersToReplace = spanishCharactersToReplace;
            gameModeDescription.translatedWordsArray       = spanishWords;
            
        break;

        case 'ru-RU':

            gameModeDescription.keyboard                   = russianLetters;
            gameModeDescription.specialKeyCodes            = russianSpecialKeyCodes;
            gameModeDescription.keyboardClass              = 'russianButtons'
            gameModeDescription.specialCharactersToReplace = russianCharactersToReplace;
            gameModeDescription.translatedWordsArray       = russianWords;

        break;

    }

}

