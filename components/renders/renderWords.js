import { originalWordHtml, translatedWordHtml } from "../../helpers/references";
import { actualWord } from "../getRandomWord";

/**
 * 
 * @param {String} originalWord 
 * @param {String} hiddenWord 
 */

export const renderWords = ( originalWord = actualWord.originalWord.split(':')[1], hiddenWord = actualWord.hiddenWord ) => {

    originalWordHtml.innerHTML = originalWord;
    translatedWordHtml.innerHTML = hiddenWord;
    
};