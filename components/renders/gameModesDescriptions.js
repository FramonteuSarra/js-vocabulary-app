import { englishLetters, englishSpecialKeyCodes, germanLetters, germanSpecialKeyCodes, russianLetters, russianSpecialKeyCodes, spanishLetters, spanishSpecialKeyCodes } from "../../helpers/letters";
import { anyLetter } from "../anyLetter-GameMode";
import { justNextLetter } from "../justNextLetter-GameMode";

export const languages = [',','Español','Inglés','Ruso','Alemán'];

export const gameModeDescription = {

    totalGameModes: 2,                              // Indica al CreateSelects cuantas opciones de juego deben crearse 
    totalLanguages: 4,                              // Indica al CreateSelects cuantos idiomas tiene la aplicación
    chosenGameMode: '',                             // Indica el modo de juego elegido por el usuario
    chosenOriginalLanguage: '',                     // Indica el idioma original elegido por el usuario
    chosenTranslatedLanguage: '',                   // Indica el idioma a traducir elegido por el usuario
    name: '',
    description: '',
    gameMode: '',                                   // Indica la función del modo de juego que debe ejecutar la aplicación
    keyboard: '',
    keyboardClass: '',                              // Indica la clase de estilos de cada teclado
    specialKeyCodes: '',
    // originalLanguageCode: '',                       // Son los códigos de cada idioma para la API de traducción
    // translatedLanguageCode: '',
    difficulties: [],
    wordsTypes: [],
    actualPressedKeyEvent: '',                       // Guardo el evento actual al presionar una tecla para en caso de error poder marcarla en rojo

}

export const gameModesDescriptions = () => {
    
    switch( gameModeDescription.chosenGameMode ) {
       
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

export const setTranslatedLanguage = () => {

    switch ( gameModeDescription.chosenTranslatedLanguage ) {

        case 'es-ES':

            gameModeDescription.keyboard               = spanishLetters;
            gameModeDescription.specialKeyCodes        = spanishSpecialKeyCodes;
            gameModeDescription.keyboardClass          = 'spanishButtons'

        break;

        case 'en-GB':

            gameModeDescription.keyboard               = englishLetters;
            gameModeDescription.specialKeyCodes        = englishSpecialKeyCodes;
            gameModeDescription.keyboardClass          = 'englishButtons'

        break;

        case 'ru-RU':

            gameModeDescription.keyboard               = russianLetters;
            gameModeDescription.specialKeyCodes        = russianSpecialKeyCodes;
            gameModeDescription.keyboardClass          = 'russianButtons'

        break;

        case 'de-DE':

            gameModeDescription.keyboard               = germanLetters;
            gameModeDescription.specialKeyCodes        = germanSpecialKeyCodes;
            gameModeDescription.keyboardClass          = 'germanButtons'

        break;

    }

}

