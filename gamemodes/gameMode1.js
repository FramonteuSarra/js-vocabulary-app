import { anyLetter } from "../components/anyLetter-GameMode";

/**
 * 
 * @param {Array<String>} hiddenWordArray 
 * @param {Array<String>} translatedWordArray 
 * @param {String} translatedWord 
 * @param {String} originalWord 
 * @param {String} pressedKey
 */

let completedWord;

export const GameMode1 = ( hiddenWordArray, translatedWordArray, translatedWord, originalWord, pressedKey ) => {  
       
        completedWord = anyLetter( hiddenWordArray, translatedWordArray, translatedWord, originalWord, pressedKey );
        
        if( completedWord ) return completedWord;

};