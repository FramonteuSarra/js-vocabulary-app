import { actualWord } from "./getRandomWord";
import { renderWords } from "./renders/renderWords";
import { replaceSpecialCharacters } from "./replaceSpecialCharacters";


export const initWordByLocalFiles = () => {

    actualWord.renderOriginalWord   = actualWord.originalWord.split(':')[2].toUpperCase();
    actualWord.renderTranslatedWord = actualWord.translatedWord.split(':')[2].toUpperCase();

    actualWord.hiddenWord = '_ '.repeat(actualWord.translatedWord.split(':')[2].length);        // Creamos la palabra oculta según el largo de la palabra a traducir

    actualWord.hiddenWord = replaceSpecialCharacters( actualWord.translatedWord.split(':')[2] );             // Función para reemplazar los caracteres especiales

    actualWord.hiddenWordArray = actualWord.hiddenWord.split(' ');
    actualWord.translatedWordArray = actualWord.translatedWord.split(':')[2].split('');

    renderWords();

}