let expanded = false;
let state;
const itemsClassesInsideSelect = ['divCheckBoxesWordsType','labelWordsType','inputWordsType','overSelectWordsType'];

export const eventSelectWordsType = ( event ) => {
  
    state = true;

    itemsClassesInsideSelect.forEach( itemClass => {

      if ( event.target.className === itemClass ) return state = false;      

    });

    if ( state === true ) {

    document.querySelector('.divCheckBoxesWordsType').style.display = 'none';
    expanded = false;
    
    }

}

export const showCheckBoxesWordsType = () => {

  const divCheckBoxesWordsType = document.querySelector('.divCheckBoxesWordsType');
    
    if (!expanded) {

      divCheckBoxesWordsType.style.display = 'block';
      expanded = true;
      addEventListener('click', eventSelectWordsType, true);
      
    } else {

      divCheckBoxesWordsType.style.display = 'none';
      expanded = false;
      removeEventListener('click', eventSelectWordsType, true);

    }

}