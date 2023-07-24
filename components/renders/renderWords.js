import { originalWordHtml, translatedWordHtml } from "../../helpers/references";

/**
 * 
 * @param {String} originalWord 
 * @param {String} hiddenWord 
 */

export const renderWords = ( originalWord, hiddenWord ) => {

    originalWordHtml.innerHTML = originalWord;
    translatedWordHtml.innerHTML = hiddenWord;
    
};