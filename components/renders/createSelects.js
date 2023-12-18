import { selectContainerHtml } from "../../helpers/references";
import { gameModeDescription, gameModesDescriptions, languages } from "./gameModesDescriptions";


export const createSelectGameMode = () => {

    const selectGameMode = document.createElement('select');
    selectGameMode.classList.add('selectGameMode');

    for( let i = 0; i <= gameModeDescription.totalGameModes; i++) {

        gameModeDescription.chosenGameMode = i;

        gameModesDescriptions(); 

        const option = document.createElement('option');

        option.text  = `${ i } - ${ gameModeDescription.name }`;
        option.value = i;
        option.classList.add('option-gamemode');

        if( i === 0 ) {
            option.id       = 'select-game-mode';
            option.selected = 'selected';
            option.disabled = 'disabled';
            option.text     = `Seleccione el modo de juego`;
        }

        selectGameMode.appendChild( option );
        
    }

    selectContainerHtml.append( selectGameMode );   

}

const codeLanguages = [',','es-ES','en-GB','ru-RU','de-DE'];

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
    option.text = 'Seleccione las dificultades';

    selectDifficulty.appendChild( option );

    divSelectBox.appendChild( selectDifficulty );
    divSelectBox.appendChild( divOverSelect );

    const difficulties = ['a1','a2','b1','b2','c1','c2'];

    for( let i = 1; i <= 6; i++) {
       
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.textContent = difficulties[i-1].toUpperCase();
        label.classList.add('labelDifficulty');

        input.type  = 'checkbox';
        input.classList.add('checkBoxesDifficulty');
        input.value = difficulties[i-1];
        input.checked = true;

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
    const option           = document.createElement('option');
    option.text = 'Seleccione los tipos de palabras';

    selectWordsType.appendChild( option );

    divSelectBox.appendChild( selectWordsType );
    divSelectBox.appendChild( divOverSelect );

    const wordsType = ['Sustantivos','Adjetivos','Verbos','ss','aa','vv'];

    for( let i = 1; i <= 3; i++) {
       
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.textContent = wordsType[i-1];
        label.classList.add('labelWordsType');

        input.type  = 'checkbox';
        input.classList.add('inputWordsType');
        input.value = wordsType[i+2];
        input.checked = true;

        divCheckBoxes.appendChild( label );
        divCheckBoxes.appendChild( input );

    }

    divContainer.appendChild( divSelectBox );
    divContainer.appendChild( divCheckBoxes );

    selectContainerHtml.append( divContainer ); 

}