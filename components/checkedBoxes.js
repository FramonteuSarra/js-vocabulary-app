import { gameModeDescription } from "./renders/gameModesDescriptions";

export const checkedBoxes = () => {

    const checkedBoxesDifficulty = document.querySelectorAll('.checkBoxesDifficulty');
    gameModeDescription.difficulties = [];
    let isBoxChecked;

    checkedBoxesDifficulty.forEach( ( box ) => {    // Verificamos las checkboxes de la dificultad y guardamos los valores de las que hayan sido tildadas

        if ( box.checked ) {
            
            gameModeDescription.difficulties.push(box.value);
            isBoxChecked = true;

        }

    });

    if ( !isBoxChecked ) return alert('Se debe seleccionar al menos una dificultad');

    isBoxChecked = false;

    const checkedBoxesWordsType = document.querySelectorAll('.inputWordsType');
    gameModeDescription.wordsTypes = [];

    checkedBoxesWordsType.forEach( ( box ) => {     // Verificamos las checkboxes de los tipos de palabras y guardamos los valores de las que hayan sido tildadas

        if ( box.checked ) {
            
            gameModeDescription.wordsTypes.push(box.value);
            isBoxChecked = true;

        }

    });

    if ( !isBoxChecked ) return alert('Se debe seleccionar al menos un conjunto de palabras');

    return true;

}