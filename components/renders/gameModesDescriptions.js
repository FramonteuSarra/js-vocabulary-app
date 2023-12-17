import { englishWords } from "../../helpers/englishWords";
import { germanWords } from "../../helpers/germanWords";
import { englishLetters, englishSpecialKeyCodes, germanLetters, germanSpecialKeyCodes, russianLetters, russianSpecialKeyCodes, spanishLetters, spanishSpecialKeyCodes } from "../../helpers/letters";
import { russianWords } from "../../helpers/russianWords";
import { spanishWords } from "../../helpers/spanishWords";
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
    originalLanguage: '',
    translatedLanguage: '',
    keyboard: '',
    keyboardClass: '',                              // Indica la clase de estilos de cada teclado
    specialKeyCodes: '',
    originalLanguageCode: '',                       // Son los códigos de cada idioma para la API de traducción
    translatedLanguageCode: '',
    translateAPI: '1',                               // Valor de '1' para que se utilice la API y valor de '0' para que se utilicen los archivos locales
    difficulties: [],
    wordsTypes: [],
    actualPressedKeyEvent: '',                       // Guardo el evento actual al presionar una tecla para en caso de error poder marcarla en rojo

}

export const gameModesDescriptions = () => {
    
    switch( gameModeDescription.chosenGameMode ) {
       
        case 1:
            
            gameModeDescription.name                = '¡Cualquier letra! - 5 vidas.';
            gameModeDescription.description         = 'Elija los idiomas. El primer idioma será el original, y el segundo al que se traducirá. En este modo de juego, es válida cualquier letra, en cualquier orden.';
            gameModeDescription.gameMode            = anyLetter;

            break;

        case 2:

            gameModeDescription.name                = '¡Solo la siguiente letra! - 5 vidas.';
            gameModeDescription.description         = 'Elija los idiomas. El primer idioma será el original, y el segundo al que se traducirá. En este modo de juego, solo es válida la siguiente letra.';
            gameModeDescription.gameMode            = justNextLetter;

            break;
        
    }

};


export const setOriginalLanguage = () => {

    switch ( Number(gameModeDescription.chosenOriginalLanguage) ) {

        case 1:

            gameModeDescription.originalLanguage         = spanishWords;
            gameModeDescription.originalLanguageCode     = 'es-ES';

        break;

        case 2:

            gameModeDescription.originalLanguage         = englishWords;
            gameModeDescription.originalLanguageCode     = 'en-GB';

        break;

        case 3:

            gameModeDescription.originalLanguage         = russianWords;
            gameModeDescription.originalLanguageCode     = 'ru-RU';

        break;

        case 4: 

            gameModeDescription.originalLanguage         = germanWords;
            gameModeDescription.originalLanguageCode     = 'de-DE';

        break;

    }

}

export const setTranslatedLanguage = () => {

    switch ( Number(gameModeDescription.chosenTranslatedLanguage) ) {

        case 1:

            gameModeDescription.translatedLanguage     = spanishWords;
            gameModeDescription.keyboard               = spanishLetters;
            gameModeDescription.specialKeyCodes        = spanishSpecialKeyCodes;
            gameModeDescription.keyboardClass          = 'spanishButtons'
            gameModeDescription.translatedLanguageCode = 'es-ES';

        break;

        case 2:

            gameModeDescription.translatedLanguage     = englishWords;
            gameModeDescription.keyboard               = englishLetters;
            gameModeDescription.specialKeyCodes        = englishSpecialKeyCodes;
            gameModeDescription.keyboardClass          = 'englishButtons'
            gameModeDescription.translatedLanguageCode = 'en-GB';

        break;

        case 3:

            gameModeDescription.translatedLanguage     = russianWords;
            gameModeDescription.keyboard               = russianLetters;
            gameModeDescription.specialKeyCodes        = russianSpecialKeyCodes;
            gameModeDescription.keyboardClass          = 'russianButtons'
            gameModeDescription.translatedLanguageCode = 'ru-RU';

        break;

        case 4:

            gameModeDescription.translatedLanguage     = germanWords;
            gameModeDescription.keyboard               = germanLetters;
            gameModeDescription.specialKeyCodes        = germanSpecialKeyCodes;
            gameModeDescription.keyboardClass          = 'germanButtons'
            gameModeDescription.translatedLanguageCode = 'de-DE';

        break;

    }

}

