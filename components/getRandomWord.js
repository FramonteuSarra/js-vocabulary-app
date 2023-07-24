import { originalWords } from '../helpers/originalWords';
import { translatedWords } from '../helpers/translatedWords';

let selectedWords = [];

/**
 * 
 * @returns {Array<String>}
 */

export const getRandomWord = () => {

    const randomIndex = Math.floor( Math.random() * originalWords.length );
    
    const originalWord = originalWords[randomIndex].toUpperCase();

    const translatedWord = translatedWords[randomIndex].toUpperCase();
  
    const hiddenWord = '_ '.repeat(translatedWord.length);

    const hiddenWordArray = hiddenWord.split(' ');
    const translatedWordArray = translatedWord.split('');

    selectedWords = [];

    selectedWords.push(originalWord, translatedWord, hiddenWord, hiddenWordArray, translatedWordArray);

    return selectedWords;
};