export const actualWord = {

    originalWord:                  '',                  // Palabra base original en inglés obtenida del archivo local
    renderOriginalWord:            '',                  // Palabra a traducir por el usuario dentro de la app, si se elige otro idioma que no sea inglés como base, esta palabra va a ser traducida por la API antes de mostrarla
    translatedWord:                '',                  // Palabra en el idioma que el usuario escogió, la cual es la que debe ser escrita por el usuario en la app. Si resultase ser inglés, la palabra es la directamente escogida desde el archivo local, y solo se hace la traducción del renderOriginalWord
    hiddenWord:                    '',
    hiddenWordArray:               '',
    translatedWordArray:           [],
    actualOriginalWordsArray:      [],
};

export const getRandomWord = () => {

    const randomIndex = Math.floor( Math.random() * actualWord.actualOriginalWordsArray.length );                                          

    actualWord.originalWord = actualWord.actualOriginalWordsArray[randomIndex].toUpperCase();  

};