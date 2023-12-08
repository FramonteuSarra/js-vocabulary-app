import { App } from "../app";
import { headerTitleHtml, translatedWordHtml } from "../helpers/references";
import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { renderScore } from "./renders/renderScore"

export const score = {

    totalScore: 0,
    wordsCompleted: 0,
    multiplier: 1,
    lifes: 5,
    highestScore: 0,
    iteration: 0,                                                           // Prefiero manejar las iteraciones de los 'for' de manera global para facilitar su reinicialización al cambiar entre los distintos modos de juego

};

let localStorageKey = '';

/**
 * 
 * @param {Number} action     Letra correcta: 1 | Error: 2 | Palabra completada: | 3
 * @param {Number} gameMode   Indica el modo de juego que debe recargar al completar una palabra
 */

export const updateScore = ( action ) => {

    if( action !== 0 ) {

        localStorageKey = 'highestScoreGameMode' + gameModeDescription.chosenGameMode + gameModeDescription.chosenOriginalLanguage + gameModeDescription.chosenTranslatedLanguage;
        score.highestScore = localStorage.getItem( localStorageKey );

        if ( !score.highestScore ) {

            score.highestScore = 0;
            localStorage.setItem(localStorageKey, score.highestScore);

        }

    }

    switch( action ) {

        case 0: 

            score.highestScore   = 0;
            score.totalScore     = 0;
            score.wordsCompleted = 0;
            score.multiplier     = 1;
            score.lifes          = 5;
            break;
            

        case 1:

            score.totalScore = Math.round( score.totalScore + (10 * score.multiplier));

            if( score.totalScore >= score.highestScore ) {
                score.highestScore = score.totalScore;
                localStorage.setItem(localStorageKey, score.highestScore);
            }
            
            break;
        
        case 2:

            score.lifes--;
            score.multiplier = 1;
            if( score.lifes <= 0 ) {
                translatedWordHtml.innerText = `Game Over!
                                             
                                                La palabra era: ${ actualWord.translatedWord }`;
                renderScore( score );
                return true;
            }
            break;

        case 3:

            score.multiplier = (score.multiplier * 1.1).toFixed(2);
            score.totalScore = Math.round( score.totalScore + (50 * score.multiplier));
            score.wordsCompleted++;
            if( score.lifes < 5 ) {
                score.lifes++;
            }
            if( score.totalScore >= score.highestScore ) {
                score.highestScore = score.totalScore;
                localStorage.setItem(localStorageKey, score.highestScore);
            }
            headerTitleHtml.innerText = 'Palabra Completada!';
            
            const options = document.querySelectorAll('.option-gamemode');
            
            options.forEach( ( option ) => {

                option.disabled = 'disabled';
                               
            })

            setTimeout(() => {
                
                options.forEach( ( option ) => {

                    option.disabled = '';
                                   
                })
                
                App();
                headerTitleHtml.innerText = gameModeDescription.name;
                document.querySelector(`.${ gameModeDescription.keyboardClass }`).focus();
                        
            }, 1500);
            break;

    };
    
    renderScore( score );

};