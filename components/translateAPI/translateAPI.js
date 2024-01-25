import { actualWord } from "../getRandomWord";
import { languageContexts, typesOfContexts } from "./languageContexts";

let textToTranslate, i;

export const translateFunction = ( translateTo ) => {

    // languageContexts( translateTo );

    // switch( actualWord.originalWord.split(':')[3].toLowerCase() ) {

    //     case 'n':

    //         textToTranslate = typesOfContexts.nounsContext;
    //         i = typesOfContexts.iterations[0];
    //         break;

    //     case 'adj':

    //         textToTranslate = typesOfContexts.adjectivesContext;
    //         i = typesOfContexts.iterations[1];
    //         break;

    //     case 'v':

    //         textToTranslate = typesOfContexts.verbsContext;
    //         i = typesOfContexts.iterations[2];
    //         break;

    //     case 'adv':

    //         textToTranslate = typesOfContexts.adverbsContext;
    //         i = typesOfContexts.iterations[3];
    //         break;

    //     case 'numcard':

    //         textToTranslate = typesOfContexts.cardinalsNumContext;
    //         i = typesOfContexts.iterations[4];
    //         break;

    //     case 'numord':

    //         textToTranslate = typesOfContexts.ordinalsNumContext;
    //         i = typesOfContexts.iterations[5];
    //         break;

    //     default:

            textToTranslate = `${actualWord.originalWord.split(':')[2].trim()}`;
            i = 0;
            console.log( textToTranslate );

    // };

    let apiUrl = `https://api.mymemory.translated.net/get?q=${textToTranslate.toLowerCase()}&langpair=en-GB|${translateTo}`;       

    return new Promise(( resolve, reject ) => {

        fetch(apiUrl).then(res => res.json()).then(data => {         // Enviamos el texto a traducir al idioma correspondiente

            console.log( actualWord.originalWord );
            console.log( data.responseData.translatedText );
            
            ( data )
            ? resolve( data.responseData.translatedText.split(' ')[i] )     // Hacemos un split del texto y enviamos solamente la palabra que nos interesa
            : reject( `Error, no se pudo hacer la traducción` );

        });

    });

}