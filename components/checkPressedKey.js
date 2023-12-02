import { score } from "./updateScore";


let pressedKey;

export const checkPressedKey = ( event ) => {
    
        if ( !event ) return;

        if( score.lifes <= 0 ) return;                              // Deja de ejecutar toda la función al perder todas las vidas hasta que no se inicialice un nuevo juego.

        if( event.key === 'Tab') return;                           // Tab ejecuta la acción como un enter al tabular, con esto lo desactivo.
      
        if( event.keyCode >= 65 && event.keyCode <= 90 ) {

            event.target.value = event.key.toUpperCase();
            pressedKey = event.target.value;
            return pressedKey;

        } 

        if( event.type === 'click' && event.target.tagName === 'BUTTON' ) {

            pressedKey = event.target.value;
            return pressedKey;

        }



}





