import { actualWord } from "./getRandomWord";
import { gameModeDescription, setOriginalLanguage } from "./renders/gameModesDescriptions";


export const initArrayByParameters = () => {

    if( !gameModeDescription.translateAPI ) setOriginalLanguage();
    
    actualWord.actualOriginalWordsArray = [];       // Acá se va a guardar el arreglo de las palabras del idioma original elegido, según los parametros elegidos (dificultades y tipos de palabras)
    actualWord.actualTranslatedWordsArray = [];     // (SOLO con archivos locales) Acá se va a guardar el arreglo de las palabras en el idioma a traducir elegido, según los parametros elegidos (dificultades y tipos de palabras)
    let temporalOriginalArray = [];                 
    let temporalTranslatedArray = [];      
    
    for( let i = 0; i < gameModeDescription.wordsTypes.length; i++) {

        temporalOriginalArray.push( ...gameModeDescription.originalWordsArray[gameModeDescription.wordsTypes[i]] );     // Introducimos en el arreglo temporal los arreglos de cada tipo de palabra elegida
        
        if( !gameModeDescription.translateAPI ) temporalTranslatedArray.push( ...gameModeDescription.translatedWordsArray[gameModeDescription.wordsTypes[i]] ); // (SOLO con archivos locales) Introducimos en el arreglo temporal los arreglos de cada tipo de palabra elegida


    }     

    for( let i = 0; i < gameModeDescription.difficulties.length; i++) {

        actualWord.actualOriginalWordsArray.push( ...temporalOriginalArray.filter( ( word ) => word.split(':')[1] === gameModeDescription.difficulties[i] ));       // Agregamos al arreglo final solo las palabras de las dificultades elegidas por el usuario
        
        if( !gameModeDescription.translateAPI ) actualWord.actualTranslatedWordsArray.push( ...temporalTranslatedArray.filter( ( word ) => word.split(':')[1] === gameModeDescription.difficulties[i] ));   // (SOLO con archivos locales) Agregamos al arreglo final solo las palabras de las dificultades elegidas por el usuario
            
    }

}

