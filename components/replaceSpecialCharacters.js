import { actualWord } from "./getRandomWord";
import { gameModeDescription } from "./renders/gameModesDescriptions";

/**
 * 
 * @param {String} translatedWord     La traemos como argumento ya que varía como se maneja según si se usan archivos locales o la API de traducción
 * @returns    Retorna directamente la palabra oculta con todos los caracteres especiales y espacios cambiados por los necesarios
 */

export const replaceSpecialCharacters = ( translatedWord ) => {             // Cada idioma tiene armado un arreglo con los caracteres especiales (con tildes, dieresis, etc), a cambiar por letras normales, acá evaluamos si la palabra los incluye y los reemplazamos en la palabra a evaluar
                                                                            // Sin embargo a la hora de renderizar la palabra vamos a utilizar la palabra original, por lo que los caracteres especiales si saldran en pantalla
    for( let i = 0; i < gameModeDescription.specialCharactersToReplace.length; i = i + 2) {

        if( actualWord.translatedWord.includes( gameModeDescription.specialCharactersToReplace[i] ) ) {
        
            actualWord.translatedWord = actualWord.translatedWord.replace(gameModeDescription.specialCharactersToReplace[i], gameModeDescription.specialCharactersToReplace[i+1]);       // Cambiamos los caracteres especiales por letras normales para la validación de cada intento
            i = i - 2;                

        }

    }

    actualWord.hiddenWord = '_ '.repeat(translatedWord.length);        // Creamos la palabra oculta según el largo de la palabra a traducir.

    const splitHiddenWord = actualWord.hiddenWord.split(' ');

    for( let i = 0; i < translatedWord.length; i++ ) {

        if( translatedWord[i] === ' ' ) {

            splitHiddenWord.splice(i, 1, ` `);   // Reemplazamos los espacios que hayan por el caracter ALT+255 (caracter invisible) para poder visualizarlos en la app automaticamente en caso de oraciones o palabras compuestas

        }

        if( translatedWord[i] === ',' ) {

            splitHiddenWord.splice(i, 1, `,`);  // Si la oración incluye una coma, la mostramos directamente en la palabra oculta

        }

    }

    return splitHiddenWord.join(' ');

}