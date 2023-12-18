let expanded = false;
let state;
const itemsClassesInsideSelect = ['divCheckBoxesDifficulty','labelDifficulty','checkBoxesDifficulty','overSelectDifficulty'];

export const eventSelectDifficulty = ( event ) => {
  
    state = true;

    itemsClassesInsideSelect.forEach( itemClass => {

      if ( event.target.className === itemClass ) return state = false;      

    });

    if ( state === true ) {

    document.querySelector('.divCheckBoxesDifficulty').style.display = 'none';
    expanded = false;
    document.querySelector('.selectBoxWordsType').style.zIndex = '0';

    }

}

export const showCheckBoxesDifficulty = () => {

  const divCheckBoxesDifficulty = document.querySelector('.divCheckBoxesDifficulty');
    
    if (!expanded) {

      divCheckBoxesDifficulty.style.display = 'block';
      expanded = true;
      document.querySelector('.selectBoxWordsType').style.zIndex = '0';
      addEventListener('click', eventSelectDifficulty, true);
      
    } else {

      divCheckBoxesDifficulty.style.display = 'none';
      expanded = false;
      document.querySelector('.selectBoxWordsType').style.zIndex = '1';
      removeEventListener('click', eventSelectDifficulty, true);

    }

}