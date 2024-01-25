export const selectAllWordsType = () => {

    const checkedBoxesWordsType      = document.querySelectorAll('.inputWordsType');
    const selectAllWordsTypeCheckBox = document.querySelector('.inputSelectAllWordsType');
    selectAllWordsTypeCheckBox.addEventListener('click', () => {                        // Checkbox para seleccionar o deseleccionar todos los tipos de palabras con un solo click

        checkedBoxesWordsType.forEach( ( box ) => {

            if ( !selectAllWordsTypeCheckBox.checked ) {
            
                box.checked = false;

            } else {

                box.checked = true;

            }
            
        });

    });

}