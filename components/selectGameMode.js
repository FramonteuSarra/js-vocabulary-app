import { buttonsContainer, headerTitleHtml, originalWordHtml, translatedWordHtml } from '../helpers/references';
import { languagesToChoose } from './languagesToChoose';
import { createSelectDifficulty, createSelectGameMode, createSelectWordsType } from './renders/createSelects';
import { gameModeDescription, gameModesDescriptions } from './renders/gameModesDescriptions';
import { selectAllWordsType } from './selectAllWordsType';
import { showCheckBoxes } from './showCheckBoxes';

export const selectGameMode = () => {

    createSelectGameMode();                           // Creamos el select para los gameModes y una vez elegido un modo de juego va a seguir ejecutandose la app

    document.querySelector('.selectGameMode').addEventListener('change', ( event ) => {
        
        gameModeDescription.chosenOriginalLanguage   = '';
        gameModeDescription.chosenTranslatedLanguage = '';

        gameModesDescriptions( Number(event.target.value) );                    // Llamamos esta función indicandole el modo de juego para setear el nombre y la descripción del modo de juego

        headerTitleHtml.innerText = gameModeDescription.name;
        originalWordHtml.innerText = gameModeDescription.description;
        translatedWordHtml.innerText = '';
        buttonsContainer.innerHTML = '';
        
        languagesToChoose();       // Esta función crea los 2 selects para los idiomas, y espera a que se elijan ambos idiomas para mostrar el botón para iniciar el juego, por esta función continúa la app

        createSelectDifficulty();
        document.querySelector('.selectBoxDifficulty').addEventListener('click', () => showCheckBoxes( '.divCheckBoxesDifficulty' ), true);       // JS para el select de la dificultad para que pueda simular un select con checkboxes
        
        createSelectWordsType();
        document.querySelector('.selectBoxWordsType').addEventListener('click', () => showCheckBoxes( '.divCheckBoxesWordsType' ), true);       // JS para el select de los tipos de palabras para que pueda simular un select con checkboxes

        selectAllWordsType();                                                                      // Añade un checkbox para seleccionar o deseleccionar todos los tipos de palabras con un solo click

        document.querySelector('.restartGameButton')?.remove();                                     // Remueve el botón de reinicio en caso de existir

        const options = document.querySelectorAll('.option-gamemode')                               // Desabilito las options para que no se pueda cambiar el modo de juego hasta que no se inicialice por completo el ya elegido
            
            options.forEach( ( option ) => {

                option.disabled = 'disabled';
                               
        })
              
    });    

};


selectGameMode();