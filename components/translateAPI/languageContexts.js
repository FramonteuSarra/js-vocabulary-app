import { actualWord } from "../getRandomWord";

export const typesOfContexts = {

    nounsContext:        '',
    adjectivesContext:   '',
    verbsContext:        '',
    adverbsContext:      '',
    cardinalsNumContext: '',
    ordinalsNumContext:  '',
    iterations:          []

};


export const languageContexts = ( language ) => {

    switch( language ) {

        case 'es-ES':

            typesOfContexts.nounsContext        = `i also have a * ${actualWord.originalWord.split(':')[1].trim()} *`;
            typesOfContexts.adjectivesContext   = `i like to be * ${actualWord.originalWord.split(':')[1].trim()} * as him`;
            typesOfContexts.verbsContext        = `the action to * ${actualWord.originalWord.split(':')[1].trim()} * this on`;
            typesOfContexts.adverbsContext      = `* ${actualWord.originalWord.split(':')[1].trim()} * mente`;
            typesOfContexts.cardinalsNumContext = `tengo * ${actualWord.originalWord.split(':')[1].trim()} * lápices rojos`;
            typesOfContexts.ordinalsNumContext  = `obtuve el * ${actualWord.originalWord.split(':')[1].trim()} * puesto en la carrera`;
            typesOfContexts.iterations          = [4, 4, 4, 1, 2, 3];

            break;

        case 'ru-RU':

            typesOfContexts.nounsContext        = `i have a * ${actualWord.originalWord.split(':')[1].trim()} * like you`;
            typesOfContexts.adjectivesContext   = `i like  * ${actualWord.originalWord.split(':')[1].trim()} * as him`;
            typesOfContexts.verbsContext        = `the action to * ${actualWord.originalWord.split(':')[1].trim()} * this on`;
            typesOfContexts.adverbsContext      = `i like to do this * ${actualWord.originalWord.split(':')[1].trim()} * always in that way`;
            typesOfContexts.cardinalsNumContext = `i have * ${actualWord.originalWord.split(':')[1].trim()} * red pencils`;
            typesOfContexts.ordinalsNumContext  = `i had the * ${actualWord.originalWord.split(':')[1].trim()} * place in the race`;

            break;

        case 'de-DE':

            typesOfContexts.nounsContext        = `i have a * ${actualWord.originalWord.split(':')[1].trim()} * like you`;
            typesOfContexts.adjectivesContext   = `i like  * ${actualWord.originalWord.split(':')[1].trim()} * as him`;
            typesOfContexts.verbsContext        = `the action to * ${actualWord.originalWord.split(':')[1].trim()} * this on`;
            typesOfContexts.adverbsContext      = `i like to do this * ${actualWord.originalWord.split(':')[1].trim()} * always in that way`;
            typesOfContexts.cardinalsNumContext = `i have * ${actualWord.originalWord.split(':')[1].trim()} * red pencils`;
            typesOfContexts.ordinalsNumContext  = `i had the * ${actualWord.originalWord.split(':')[1].trim()} * place in the race`;

            break;

        case 'fr-FR':

            typesOfContexts.nounsContext        = `i have a * ${actualWord.originalWord.split(':')[1].trim()} * like you`;
            typesOfContexts.adjectivesContext   = `i like  * ${actualWord.originalWord.split(':')[1].trim()} * as him`;
            typesOfContexts.verbsContext        = `the action to * ${actualWord.originalWord.split(':')[1].trim()} * this on`;
            typesOfContexts.adverbsContext      = `i like to do this * ${actualWord.originalWord.split(':')[1].trim()} * always in that way`;
            typesOfContexts.cardinalsNumContext = `i have * ${actualWord.originalWord.split(':')[1].trim()} * red pencils`;
            typesOfContexts.ordinalsNumContext  = `i had the * ${actualWord.originalWord.split(':')[1].trim()} * place in the race`;

            break;

        case 'it-IT':

            typesOfContexts.nounsContext        = `i have a * ${actualWord.originalWord.split(':')[1].trim()} * like you`;
            typesOfContexts.adjectivesContext   = `i like  * ${actualWord.originalWord.split(':')[1].trim()} * as him`;
            typesOfContexts.verbsContext        = `the action to * ${actualWord.originalWord.split(':')[1].trim()} * this on`;
            typesOfContexts.adverbsContext      = `i like to do this * ${actualWord.originalWord.split(':')[1].trim()} * always in that way`;
            typesOfContexts.cardinalsNumContext = `i have * ${actualWord.originalWord.split(':')[1].trim()} * red pencils`;
            typesOfContexts.ordinalsNumContext  = `i had the * ${actualWord.originalWord.split(':')[1].trim()} * place in the race`;

            break;

        case 'pt-PT':

            typesOfContexts.nounsContext        = `i have a * ${actualWord.originalWord.split(':')[1].trim()} * like you`;
            typesOfContexts.adjectivesContext   = `i like  * ${actualWord.originalWord.split(':')[1].trim()} * as him`;
            typesOfContexts.verbsContext        = `the action to * ${actualWord.originalWord.split(':')[1].trim()} * this on`;
            typesOfContexts.adverbsContext      = `i like to do this * ${actualWord.originalWord.split(':')[1].trim()} * always in that way`;
            typesOfContexts.cardinalsNumContext = `i have * ${actualWord.originalWord.split(':')[1].trim()} * red pencils`;
            typesOfContexts.ordinalsNumContext  = `i had the * ${actualWord.originalWord.split(':')[1].trim()} * place in the race`;

            break;

    };


}