import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";


export const initArrayByParameters = () => {

    actualWord.actualOriginalWordsArray   = [];
    actualWord.actualTranslatedWordsArray = [];

    let temporalOriginalArray   = [];      // Primero asignamos las palabras de cada dificultad elegida en este arreglo temporal, para luego filtrar por tipo de palabra y ya asignarlo al array definitivo
    let temporalTranslatedArray = [];

    if( gameModeDescription.difficulties.length === 6 ) { 

        temporalOriginalArray = gameModeDescription.originalLanguage;

        if( gameModeDescription.translateAPI === '0' ) temporalTranslatedArray = gameModeDescription.translatedLanguage;      // Solo asigno el array traducido si NO se está utilizando la API, de lo contrario sería innecesario

    } else {

        for( let i = 0; i < gameModeDescription.difficulties.length; i++) {

            temporalOriginalArray.push( ...gameModeDescription.originalLanguage.filter( ( word ) => word.split(':')[0] === gameModeDescription.difficulties[i] ));
            
            if( gameModeDescription.translateAPI === '0' ) temporalTranslatedArray.push( ...gameModeDescription.translatedLanguage.filter( ( word ) => word.split(':')[0] === gameModeDescription.difficulties[i] ));    // Solo asigno el array traducido si NO se está utilizando la API, de lo contrario sería innecesario
            
        }

    }

    if( gameModeDescription.wordsTypes.length < 3 ) {

        for( let i = 0; i < gameModeDescription.wordsTypes.length; i++) {

            actualWord.actualOriginalWordsArray.push( ...temporalOriginalArray.filter( ( word ) => word.split(':')[2] === gameModeDescription.wordsTypes[i] ) );

            if( gameModeDescription.translateAPI === '0' ) actualWord.actualTranslatedWordsArray.push( ...temporalTranslatedArray.filter( ( word ) => word.split(':')[2] === gameModeDescription.wordsTypes[i] ) );

        }

    } else {

        actualWord.actualOriginalWordsArray = temporalOriginalArray;
        actualWord.actualTranslatedWordsArray = temporalTranslatedArray;

    }

}