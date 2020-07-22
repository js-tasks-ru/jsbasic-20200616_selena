import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    let ribbon = document.createElement('div');
    ribbon.className = ('ribbon');

    let arrowLeft = document.createElement('button');
    arrowLeft.className = ('ribbon__arrow ribbon__arrow_left');
      let iconArrowLeft = document.createElement('img');
      iconArrowLeft.src = '/assets/images/icons/angle-icon.svg';
      iconArrowLeft.alt = 'icon';
      arrowLeft.appendChild(iconArrowLeft);
    ribbon.appendChild(arrowLeft);


    let ribbonInner = document.createElement('nav');
    ribbonInner.className = ('ribbon__inner');
    ribbon.appendChild(ribbonInner);

    function menuItem (item, i) {
      let ribbonItem = document.createElement('a');
      ribbonItem.href = '#';
      ribbonItem.className = ('ribbon__item');
      ribbonItem.dataset.id = item.id;
      ribbonItem.textContent = item.name;
      ribbonInner.appendChild(ribbonItem);

      if(i == 0) {
        ribbonItem.classList.add('ribbon__item_active'); 
      }

      ribbonItem.addEventListener('click', () => {
        event.preventDefault();
        
        let activeItem = document.querySelector('.ribbon__item_active');
        activeItem.classList.remove('ribbon__item_active');
  
        event.target.classList.add('ribbon__item_active');
  
  
        let customEvent = new CustomEvent('ribbon-select', { 
          detail: item.id, 
          bubbles: true 
        });
  
        ribbonInner.dispatchEvent(customEvent);
      })


      return ribbonItem;
    }

    this.categories.map((item, i) => {
      return menuItem(item, i);
    })

    let arrowRight = document.createElement('button');
    arrowRight.className = ('ribbon__arrow ribbon__arrow_right');
      let iconArrowRight = document.createElement('img');
      iconArrowRight.src = '/assets/images/icons/angle-icon.svg';
      iconArrowRight.alt = 'icon';
      arrowRight.appendChild(iconArrowRight);
    ribbon.appendChild(arrowRight);

    let slideIndex = 0;

    function arrows () {
      if(slideIndex == 0) { 
        arrowLeft.classList.remove('ribbon__arrow_visible');
        arrowRight.classList.add('ribbon__arrow_visible');
      }
      else {
        arrowLeft.classList.add('ribbon__arrow_visible');
        arrowRight.classList.add('ribbon__arrow_visible');
      }
    }  
    arrows();

    arrowLeft.addEventListener('click', function () {
      let left = document.querySelector('.ribbon__arrow_left');
      
      ribbonInner.scrollBy(-350, 0);
      slideIndex--;
      let scrollLeft = ribbonInner.scrollLeft;
      arrows();
      if(scrollLeft==0){left.classList.remove('ribbon__arrow_visible');}
      else{left.classList.add('ribbon__arrow_visible');}
    });

    arrowRight.addEventListener('click', function () {
      ribbonInner.scrollBy(350, 0);
      slideIndex++;
      arrows();
      let right = document.querySelector('.ribbon__arrow_right');
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollRight<1){right.classList.remove('ribbon__arrow_visible');}
      else{right.classList.add('ribbon__arrow_visible');}
 	
    });

    this.elem = ribbon;
  }
}
