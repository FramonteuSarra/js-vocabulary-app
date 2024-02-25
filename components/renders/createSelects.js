import { selectContainerHtml } from "../../helpers/references";
import { gameModeDescription, gameModesDescriptions } from "./gameModesDescriptions";

export const createSelectGameMode = () => {

    const selectGameMode = document.createElement('select');
    selectGameMode.classList.add('selectGameMode');

    for( let i = 0; i <= gameModeDescription.totalGameModes; i++) {

        gameModesDescriptions( i );

        const option = document.createElement('option');

        option.text  = `${ i } - ${ gameModeDescription.name }`;
        option.value = i;
        option.classList.add('option-gamemode');

        if( i === 0 ) {                          // Seteamos la primer opción del select para que vaya por defecto y que no se pueda elegir, que va a ser la que indique al usuario para que sirve el select
            option.id       = 'select-game-mode';
            option.selected = 'selected';
            option.disabled = 'disabled';
            option.text     = `Seleccione el modo de juego`;
        }

        selectGameMode.appendChild( option );
        
    }

    selectContainerHtml.append( selectGameMode );   

}

const codeLanguages = [',','es-ES','ru-RU'];
const languages = [',','Español','Ruso'];

export const createSelectLanguages = ( argument ) => {

    const selectLanguage = document.createElement('select');
    selectLanguage.classList.add('selectLanguage' + argument);

    for( let i = 0; i <= gameModeDescription.totalLanguages; i++) {

        const option = document.createElement('option');

        option.text  = `${ languages[i] }`;
        option.value = codeLanguages[i];
        option.classList.add('select-option');

        let languageType = 'original';

        if( argument === '2' ) {
            
            languageType = 'al que traducir';
        
        }

        if( i === 0 ) {
            option.id       = 'select-game-mode';
            option.selected = 'selected';
            option.disabled = 'disabled';
            option.text     = `Seleccione el idioma ${ languageType }`;
        }

        selectLanguage.appendChild( option );
        
    }

    selectContainerHtml.append( selectLanguage );   

}

export const createSelectDifficulty = () => {

    const divContainer  = document.createElement('div');
    const divSelectBox  = document.createElement('div');
    const divOverSelect = document.createElement('div');
    const divCheckBoxes = document.createElement('div');

    divContainer.classList.add('divContainerSelectDifficulty');
    divSelectBox.classList.add('selectBoxDifficulty');
    divOverSelect.classList.add('overSelectDifficulty');
    divCheckBoxes.classList.add('divCheckBoxesDifficulty');
    
    const selectDifficulty = document.createElement('select');
    const option           = document.createElement('option');
    option.text            = 'Seleccione las dificultades';

    selectDifficulty.appendChild( option );

    divSelectBox.appendChild( selectDifficulty );
    divSelectBox.appendChild( divOverSelect );

    const difficulties = ['f1l1','f1l2','f1l3','f1l4','f1l5','f1l6','f1l7','f1l8','f1l9','f1l10','f2l1','f2l2','f2l3','f2l4','f2l5','f2l6','f2l7','f2l8','f2l9','f2l10','f3l1','f3l2','f3l3','f3l4','f3l5','f3l6','f3l7','f3l8','f3l9','f3l10','f4l1','f4l2','f4l3','f4l4','f4l5','f4l6','f4l7','f4l8','f4l9','f4l10'];

    for( let i = 1; i <= difficulties.length; i++) {
       
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.textContent = difficulties[i-1].toUpperCase();
        label.classList.add('labelDifficulty');

        input.type  = 'checkbox';
        input.classList.add('checkBoxesDifficulty');
        input.value = difficulties[i-1];
        input.checked = false;

        divCheckBoxes.appendChild( label );
        divCheckBoxes.appendChild( input );

    }

    divContainer.appendChild( divSelectBox );
    divContainer.appendChild( divCheckBoxes );

    selectContainerHtml.append( divContainer ); 

}

export const createSelectWordsType = () => {

    const divContainer  = document.createElement('div');
    const divSelectBox  = document.createElement('div');
    const divOverSelect = document.createElement('div');
    const divCheckBoxes = document.createElement('div');

    divContainer.classList.add('divContainerSelectWordsType');
    divSelectBox.classList.add('selectBoxWordsType');
    divOverSelect.classList.add('overSelectWordsType');
    divCheckBoxes.classList.add('divCheckBoxesWordsType');
    
    const selectWordsType = document.createElement('select');
    const option          = document.createElement('option');
    option.text = 'Seleccione los tipos de palabras';

    selectWordsType.appendChild( option );

    divSelectBox.appendChild( selectWordsType );
    divSelectBox.appendChild( divOverSelect );

    const wordsTypeNames = ['Sustantivos','Adjetivos','Verbos conj.','Adverbios','Núm. Cardinales','Núm. Ordinales','Oraciones','Verbos infinitivos'];
    const wordsTypeCodes = ['n','adj','v','adv','numcard','numord','sentence','vinf'];
    // const wordsTypeCodes = ['0','1','2','3','4','5','6','7'];

    for( let i = 0; i < wordsTypeCodes.length; i++) {
       
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.textContent = wordsTypeNames[i];
        label.classList.add('labelWordsType');

        input.type  = 'checkbox';
        input.classList.add('inputWordsType');
        input.value = wordsTypeCodes[i];
        input.checked = false;

        divCheckBoxes.appendChild( label );
        divCheckBoxes.appendChild( input );

    }

    const label = document.createElement('label');
    const input = document.createElement('input');

    label.textContent = 'Seleccionar todo';                              // Creamos una checkbox para poder seleccionar y deseleccionar todo con un solo click
    label.classList.add('labelSelectAllWordsType');

    input.type  = 'checkbox';
    input.classList.add('inputSelectAllWordsType');
    input.value = true;
    input.checked = false;

    divCheckBoxes.appendChild( label );
    divCheckBoxes.appendChild( input );

    divContainer.appendChild( divSelectBox );
    divContainer.appendChild( divCheckBoxes );

    selectContainerHtml.append( divContainer ); 

}