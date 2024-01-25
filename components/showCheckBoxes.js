let expanded = false;

export const showCheckBoxes = ( argument ) => {         // JS para simular un select con checkboxes para los select de dificultad y tipos de palabras

  const divCheckBoxes = document.querySelector( argument );
   
    if (!expanded) {

      divCheckBoxes.style.display = 'block';
      expanded = true;
      
    } else {

      divCheckBoxes.style.display = 'none';
      expanded = false;

    }

}