import { originalWordHtml, translatedWordHtml } from "../../helpers/references";
import { actualWord } from "../getRandomWord";

/**
 * 
 * @param {String} originalWord 
 * @param {String} hiddenWord 
 */

export const renderWords = ( originalWord = actualWord.renderOriginalWord, hiddenWord = actualWord.hiddenWord ) => {

    originalWordHtml.innerHTML = `${originalWord}  ${actualWord.wordType.toUpperCase()}`;
    translatedWordHtml.innerHTML = hiddenWord;
    
};