import { englishWords } from '../helpers/englishWords';
import { gameModeDescription } from './renders/gameModesDescriptions';

export const actualWord = {

    originalWord:        '',
    translatedWord:      '',
    hiddenWord:          '',
    hiddenWordArray:     '',
    translatedWordArray: []

};

/**
 * 
 * @returns {Array<String>}
 */

export const getRandomWord = () => {

    const randomIndex = Math.floor( Math.random() * englishWords.length );                                          // Hago referencia a cualquiera de los archivos solo para tomar la longitud del arreglo
   
    actualWord.originalWord = gameModeDescription.originalLanguage[randomIndex].toUpperCase();

    actualWord.translatedWord = gameModeDescription.translatedLanguage[randomIndex].toUpperCase();
 
    actualWord.hiddenWord = '_ '.repeat(actualWord.translatedWord.length);

    actualWord.hiddenWordArray = actualWord.hiddenWord.split(' ');
    actualWord.translatedWordArray = actualWord.translatedWord.split('');

};