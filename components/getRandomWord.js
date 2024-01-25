import { gameModeDescription } from "./renders/gameModesDescriptions";

export const actualWord = {

    originalWord:                  '',                  // Palabra base original obtenida del archivo local
    renderOriginalWord:            '',                  // Palabra a traducir por el usuario dentro de la app, si se elige otro idioma que no sea inglés como base, esta palabra va a ser traducida por la API antes de mostrarla
    translatedWord:                '',                  // Palabra en el idioma que el usuario escogió, la cual es la que debe ser escrita por el usuario en la app. Modificados los caracteres especiales. Si resultase ser inglés, la palabra es la directamente escogida desde el archivo local, y solo se hace la traducción del renderOriginalWord
    renderTranslatedWord:          '',                  // A la palabra traducida se le modifican los caracteres especiales, para renderizarla la guardamos acá tal como es originalmente
    hiddenWord:                    '',                  // Es la recreación mediante guiones de la palabra a adivinar que se muestra originalmente en pantalla
    hiddenWordArray:               [],                  // Es un split hecho de hiddenWord el cual se va modificando a medida se aciertan las letras y es lo que se muestra en pantalla desde que existe un primer acierto
    translatedWordArray:           [],                  // Es un split de la palabra traducida el cual se recorre al momento de comparar si la tecla presionada existe y en caso de dar true, hacer las correspondientes modificaciones en el hiddenWordArray que se va a mostrar en pantalla
    wordType:                      '',                  // Indica el tipo de palabra
    wordIteration:                 '',                  // Indice actual del split hecho de la palabra a traducir, que se maneja según la palabra y el modo de juego que corresponda, de manera global para poder reinicializarlo según la situación
    actualOriginalWordsArray:      [],                  // Es el array del idioma original formado por el conjunto de palabras según las dificultades y/o tipos de palabras elegidas por el usuario
    actualTranslatedWordsArray:    [],                  // Es el array del idioma a traducir formado por el conjunto de palabras según las dificultades y/o tipos de palabras elegidas por el usuario
    failuresToNextWord:             0,                  // Es un contador de fallos, si llega a 3 brinda la posibilidad de pasar la palabra, si se utiliza o si se completa la palabra sin usarlo, vuelve a 0
    cafe:                          '',
};

export const getRandomWord = () => {

    actualWord.originalWord   = '';
    actualWord.translatedWord = '';

    const randomIndex = Math.floor( Math.random() * actualWord.actualOriginalWordsArray.length );           // Generamos un indice aleatorio con el tamaño del array de pàlabras                                     

    if( actualWord.actualOriginalWordsArray.length === 0 ) throw alert('Lamentablemente, no hay palabras del tipo seleccionado para mostrar en esta dificultad.');

    actualWord.originalWord = actualWord.actualOriginalWordsArray[randomIndex].toUpperCase();               // Obtenemos la palabra aleatoria del archivo local del idioma original según el indice obtenido

    if( !gameModeDescription.translateAPI ) actualWord.translatedWord = actualWord.actualTranslatedWordsArray[randomIndex].toUpperCase();   // En caso de no estar usando la API obtenemos la misma palabra traducida con el mismo indice, desde el archivo local correspondiente

    switch( actualWord.originalWord.split(':')[3].toLowerCase() ) {                                         // Mostramos al usuario que tipo de palabra es la que debe traducir

        case 'n':

            actualWord.wordType = '(Sust.)';
            break;

        case 'adj':

            actualWord.wordType = '(Adj.)';
            break;
            
        case 'v':

            actualWord.wordType = '(Verbo)';
            break;

        case 'adv':

            actualWord.wordType = '(Adv.)';
            break;

        case 'numcard':

            actualWord.wordType = '(Núm.)';
            break;

        case 'numord':

            actualWord.wordType = '(Núm.)';
            break;

        default:

            actualWord.wordType = '';

    }

};