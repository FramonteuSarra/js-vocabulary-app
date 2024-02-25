import { actualWord } from "./getRandomWord";
import { renderWords } from "./renders/renderWords";
import { replaceSpecialCharacters } from "./replaceSpecialCharacters";


export const initWordByLocalFiles = () => {

    actualWord.renderOriginalWord   = actualWord.originalWord.split(':')[2].toUpperCase();
    actualWord.renderTranslatedWord = actualWord.translatedWord.split(':')[2];

    actualWord.hiddenWord = replaceSpecialCharacters();             // Función para reemplazar los caracteres especiales

    actualWord.hiddenWordArray = actualWord.hiddenWord.split(' ');
    actualWord.translatedWordArray = actualWord.translatedWord.split(':')[2].split('');

    renderWords();

}