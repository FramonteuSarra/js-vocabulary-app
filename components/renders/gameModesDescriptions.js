export const gameModeDescription = {

    type: '',                                       // Indica el modo de juego            
    name: '',
    description: ''

}

export const gameModesDescriptions = () => {
    
    switch( gameModeDescription.type ) {

        case 0: 

            return true;
        
        case 1:
            
            gameModeDescription.name = 'Inglés - ¡Cualquier letra!';

            gameModeDescription.description = 'En este modo de juego, es válida cualquier letra, en cualquier orden.';

            break;

        case 2:

            gameModeDescription.name = 'Inglés - ¡Solo la siguiente letra!';

            gameModeDescription.description = 'En este modo de juego, solo es válida la siguiente letra.';

            break;

    }

};