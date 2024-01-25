import { gameModeDescription } from "./renders/gameModesDescriptions";
import { score } from "./updateScore";

let pressedKey;

export const checkPressedKey = ( event ) => {
    
    pressedKey = false;

    if( score.lifes <= 0 ) return;                              // Deja de ejecutar toda la función al perder todas las vidas hasta que no se inicialice un nuevo juego.
    if( event.key === 'Tab') return;                           // Tab ejecuta la acción como un enter al tabular, con esto lo desactivo.
    if( event.target.tagName !== 'BUTTON' ) return;             // Con esta validación nos aseguramos que la función solo evalue el evento si el mismo fue ejecutado en un botón y no en cualquier otro lado

    if( event.type === 'click' ) {                              // Llegados acá, sabemos que se tocó un botón, si fue un click, fácil, solo obtenemos el valor de la letra asignada al botón y lo devolvemos

        gameModeDescription.actualPressedKeyEvent = event;
        pressedKey = event.target.value;

        return pressedKey;

    }

    // Llegados acá sabemos que fue una tecla presionada, hay que evaluar que sea las letras que se contemplan y no cualquier parte del teclado
    // Si se toca, por ejemplo, 'ESC', evidentemente no va a coincidir con ninguna letra, y no queremos que se tome como un error

    if( event.keyCode >= 65 && event.keyCode <= 90 ) {       // 65 a 90 equivale practicamente a las letras normales de cada idioma, es mejor manejarlo así y contemplar excepciones, ya que en el 95% de las veces se va a tocar una letra con este código
                                                                
        gameModeDescription.actualPressedKeyEvent = event;
        pressedKey = event.key.toUpperCase();

        return pressedKey;

    } else {    // En caso de que la tecla no sea las más habituales, toca recorrer el arreglo de caracteres especiales del idioma correspondiente, y evaluar uno por uno esos caracteres

        gameModeDescription.specialKeyCodes.forEach( keyCode => {

            if( keyCode === event.keyCode ) {

                gameModeDescription.actualPressedKeyEvent = event;    
                pressedKey = event.key.toUpperCase();

            }

        });

    }

    if( pressedKey ) return pressedKey;  

}