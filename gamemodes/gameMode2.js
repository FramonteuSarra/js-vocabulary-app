import { justNextLetter } from "../components/justNextLetter-GameMode";

/**
 * 
 * @param {Array<String>} hiddenWordArray
 * @param {Array<String>} translatedWordArray
 * @param {String} translatedWord
 * @param {String} originalWord
 * @param {String} pressedKey
 */

let completedWord;

export const GameMode2 = ( hiddenWordArray, translatedWordArray, translatedWord, originalWord, pressedKey ) => {  
       
        completedWord = justNextLetter( hiddenWordArray, translatedWordArray, translatedWord, originalWord, pressedKey );
        
        if( completedWord ) return completedWord;

};

