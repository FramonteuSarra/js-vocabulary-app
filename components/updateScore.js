import { modoJuego1, modoJuego2 } from "../app";
import { headerTitleHtml, translatedWordHtml } from "../helpers/references";
import { renderScore } from "./renders/renderScore"

export const score = {

    totalScore: 0,
    wordsCompleted: 0,
    multiplier: 1,
    lifes: 5,
    highestScore: 0,

};

let localStorageKey = '';

/**
 * 
 * @param {Number} action     Letra correcta: 1 | Error: 2 | Palabra completada: | 3
 * @param {Number} gamemode   Indica el modo de juego que debe recargar al completar una palabra
 */

export const updateScore = ( action, gamemode ) => {

    localStorageKey = 'highestScoreGameMode' + gamemode;
    score.highestScore = localStorage.getItem( localStorageKey );

    if ( !score.highestScore ) {
        score.highestScore = 0;
        localStorage.setItem(localStorageKey, score.highestScore);
    }

    switch( action ) {

        case 0: 

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
                translatedWordHtml.innerText = 'Game Over!';
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
            
            setTimeout(() => {
                switch( gamemode ) {

                    case 1: 
                        modoJuego1();
                        headerTitleHtml.innerText = 'Game Mode 1';
                        break;

                    case 2: 
                        modoJuego2();
                        headerTitleHtml.innerText = 'Game Mode 2';
                        break;

                }

            }, 1500);
            break;

    };
    
    renderScore( score );

};