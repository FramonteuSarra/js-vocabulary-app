import { englishWords } from "../helpers/englishWords";
import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";


export const initArrayByParameters = () => {

    actualWord.actualOriginalWordsArray = [];

    let temporalOriginalArray   = [];      // Primero asignamos las palabras de cada dificultad elegida en este arreglo temporal, para luego filtrar por tipo de palabra y ya asignarlo al array definitivo

    if( gameModeDescription.difficulties.length === 6 ) { 

        temporalOriginalArray = englishWords;

    } else {

        for( let i = 0; i < gameModeDescription.difficulties.length; i++) {

            temporalOriginalArray.push( ...englishWords.filter( ( word ) => word.split(':')[0] === gameModeDescription.difficulties[i] ));
               
        }

    }

    // if( gameModeDescription.wordsTypes.length < 3 ) {

        for( let i = 0; i < gameModeDescription.wordsTypes.length; i++) {

            actualWord.actualOriginalWordsArray.push( ...temporalOriginalArray.filter( ( word ) => word.split(':')[2] === gameModeDescription.wordsTypes[i] ) );

        }

    // } else {

    //     actualWord.actualOriginalWordsArray = temporalOriginalArray;

    // }

}