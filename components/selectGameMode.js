import { modoJuego1, modoJuego2 } from '../app'; 
import { createSelectGameMode } from './renders/createSelectGameMode';
import { updateScore } from './updateScore';

export const selectGameMode = () => {

    createSelectGameMode( 2 );

    document.querySelector('.select').addEventListener('change', ( event ) => {
        
        switch( event.target.value ) {
            case '1':
                modoJuego1();
                updateScore( 0, 1 );     // '0' reinicializa los valores de los puntajes || El 2do argumento indica en updateScore cual es el modo de juego que tiene que recargar
                document.querySelector('#select-game-mode').selected = 'selected';      // Mantiene el select con el primer valor para que todas las opciones estén siempre disponibles para elegir
                break;
            case '2':
                modoJuego2();
                updateScore( 0, 2 );   
                document.querySelector('#select-game-mode').selected = 'selected';   
                break;
            case '3':
                console.log('Opción 3');
                break;
            case '4':
                console.log('Opción 4');
                break;
            case '5':
                console.log('Opción 5');
                break;
            case '6':
                console.log('Opción 6');
                break;
            case '7':
                console.log('Opción 7');
                break;
        };

    });
    
};