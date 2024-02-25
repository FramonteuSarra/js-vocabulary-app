import { App } from "../app";
import { headerTitleHtml, selectContainerHtml, translatedWordHtml } from "../helpers/references";
import { continueGame } from "./continueGame";
import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";
import { renderScore } from "./renders/renderScore"

export const score = {

    totalScore: 0,                      // Es el puntaje total actual del jugador en esta sesión
    wordsCompleted: 0,                  // Es la cantidad de palabras completadas en esta sesión
    multiplier: 1,                      // Es el valor por el cual se va a multiplicar la puntuación total al momento de completar una palabra u oración. El valor va a depender de la dificultad de la palabra actual, de la cantidad de tipos de palabras elegidos y si es una oración o una palabra simple
    lifes: 5,                           // Cantidad de vidas del jugador, se pierden con cada letra errada, si se llega a '0' se pierde el juego. Se gana una vida con cada palabra completada y 2 vidas con cada oración completada hasta un máximo de 5.
    highestScore: 0,                    // Es la puntuación máxima histórica alcanzada en un modo de juego en particular, y con un idioma original y un idioma a traducir en particular

};

let localStorageKey = '';

/**
 * 
 * @param {Number} action     Reinicializar puntajes: 0 | Letra correcta: 1 | Error: 2 | Palabra completada: 3
 */

export const updateScore = ( action ) => {

    if( gameModeDescription.chosenOriginalLanguage && gameModeDescription.chosenTranslatedLanguage ) {   // Solo crea la key si ya se ha elegido el modo de juego y ambos idiomas

        localStorageKey = 'highestScoreGameMode' + gameModeDescription.chosenGameMode + gameModeDescription.chosenOriginalLanguage + gameModeDescription.chosenTranslatedLanguage;
        score.highestScore = localStorage.getItem( localStorageKey );

        if ( !score.highestScore ) {

            score.highestScore = 0;
            localStorage.setItem(localStorageKey, score.highestScore);

        }

    }

    switch( action ) {

        case 0:                                 // Inicializa los puntajes al ejecutar la app
        
            score.totalScore     = 0;
            score.wordsCompleted = 0;
            score.multiplier     = 1;
            score.lifes          = 5;
            break;
            

        case 1:

            score.totalScore = Math.round( score.totalScore + (10 * score.multiplier));         // Por cada acierto, recibimos 10 puntos multiplicados por el valor actual del multiplier

            if( score.totalScore >= score.highestScore ) {                  // En caso de superar la máxima puntuación del modo actual, la vamos actualizando en el localStorage
                score.highestScore = score.totalScore;
                localStorage.setItem(localStorageKey, score.highestScore);
            }
    
            break;
        
        case 2:

            score.lifes--;                                       // En caso de error se pierde una vida...
            score.multiplier = 1;                               // El multiplicador se restablece en caso de un error...
            if( score.lifes <= 0 ) {
                translatedWordHtml.innerText = `Game Over!
                                             
                                                La palabra era: ${ actualWord.renderTranslatedWord }`;
                renderScore();
                return true;                        // Retornamos true para los casos de los modos de juego que necesiten reestablecer algún valor solo cuando se pierden todas las vidas
            }
            break;

        case 3:

            const wordDifficulty = actualWord.originalWord.split(':')[1];           // Es la dificultad de la palabra (a1, a2, b1, b2, c1, c2)
            let valueByParameters = 0;

            for( let i = 1; i <= gameModeDescription.difficulties.length; i++ ) {  // Manejamos la variación del multiplicador en función de qué dificultad tiene la palabra

                if ( gameModeDescription.difficulties[i-1] === wordDifficulty.toLowerCase() ) valueByParameters = i / 100;   // Le damos un valor extra a las palabras más dificiles, siendo 'c2' las que más puntuación dan y 'a1' las que menos
                if ( valueByParameters ) break;         // No tiene sentido seguir recorriendo el arreglo si la dificultad ya se encontró con éxito

            }

            const wordType = actualWord.originalWord.split(':')[3];                 // Es el tipo de palabra (sustantivo, adjetivo, etc)

            if ( wordType === 'SENTENCE' ) valueByParameters += 0.2;                // En caso de ser una oración, damos este plus

            score.multiplier = (score.multiplier * 1.006 + gameModeDescription.wordsTypes.length / 100 + valueByParameters).toFixed(2);   // Acá se genera la variación del multiplier según los parametros (dificultad, tipos de palabras en total). Multiplicamos siempre por 1.006 para generar una exponencialidad en caso de rachas relativamente largas
            score.totalScore = Math.round( score.totalScore + (50 * score.multiplier));         // Se multiplica la puntuación con el multiplier actual
            score.wordsCompleted++;
            
            if( score.lifes < 5 ) score.lifes++;
            if( score.lifes < 5 && wordType === 'SENTENCE' ) score.lifes++;           // En caso de oración se gana una vida extra (2 en total) siempre con un tope de 5
            
            if( score.totalScore >= score.highestScore ) {          // En caso de superar la máxima puntuación del modo actual, la vamos actualizando en el localStorage
                score.highestScore = score.totalScore;
                localStorage.setItem(localStorageKey, score.highestScore);
            }
            headerTitleHtml.innerText = 'Palabra Completada!';
            console.log( actualWord.renderTranslatedWord );
            translatedWordHtml.innerText = actualWord.renderTranslatedWord;
            
            const options = document.querySelectorAll('.option-gamemode');          // Desactivamos los modos de juego para que no se pueda cambiar de modo hasta que no se complete este proceso
            
            options.forEach( ( option ) => {

                option.disabled = 'disabled';
                               
            })

            document.querySelector('.restartGameButton')?.remove();
            document.querySelector('.nextWordButton')?.remove();                                // Remueve el botón de pasar palabra en caso de existir

            const continueGameButton = document.createElement('button');

            continueGameButton.innerText = 'Continuar Juego';
            continueGameButton.classList.add('continueGameButton');

            selectContainerHtml.append( continueGameButton );
            continueGameButton.addEventListener('click', continueGame, true);                       
           

    };
    
    renderScore();

};