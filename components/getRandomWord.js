import { englishWords } from '../helpers/englishWords';
import { gameModeDescription } from './renders/gameModesDescriptions';

export const actualWord = {

    originalWord:                  '',
    translatedWord:                '',
    hiddenWord:                    '',
    hiddenWordArray:               '',
    translatedWordArray:           [],
    actualOriginalWordsArray:      [],
    actualTranslatedWordsArray:    []
};

export const getRandomWord = () => {

    const randomIndex = Math.floor( Math.random() * actualWord.actualOriginalWordsArray.length );                                          

    actualWord.originalWord   = actualWord.actualOriginalWordsArray[randomIndex].toUpperCase();  

    if( gameModeDescription.translateAPI === '0' ) {

        const splitTranslatedWord = actualWord.actualTranslatedWordsArray[randomIndex].toUpperCase().split(':');
        actualWord.translatedWord = splitTranslatedWord[1];

    }

};