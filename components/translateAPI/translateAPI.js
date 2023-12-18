import { actualWord } from "../getRandomWord";

export const translateFunction = ( translateTo ) => {

    let apiUrl = `https://api.mymemory.translated.net/get?q=${actualWord.originalWord}&langpair=en-GB|${translateTo}`;

    return new Promise(( resolve, reject ) => {

        fetch(apiUrl).then(res => res.json()).then(data => {

            console.log( data.responseData.translatedText )
            
            let splitTranslatedWord = data.responseData.translatedText.split(':')[1]

            const accentedVowels = ['Á', 'É', 'Í', 'Ó', 'Ú', 'A', 'E', 'I', 'O', 'U'];

            for( let i = 0; i < accentedVowels.length-5; i++) {

                if( splitTranslatedWord.includes( accentedVowels[i] ) ) {
                
                    splitTranslatedWord = splitTranslatedWord.replace(accentedVowels[i], accentedVowels[i+5]);       // Detecta si alguna letra viene con tilde y la cambia por la misma letra sin tilde

                }

            }

            ( data )
            ? resolve( splitTranslatedWord )
            : reject( `Error, no se pudo hacer la traducción` );

        });

    });

}