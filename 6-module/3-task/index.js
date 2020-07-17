import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let carousel = document.createElement('div');
    carousel.className = ('carousel');
    
    let carouselArrowRight = document.createElement('div');
    carouselArrowRight.className = ('carousel__arrow carousel__arrow_right');
      let iconArrowRight = document.createElement('img');
      iconArrowRight.src = '/assets/images/icons/angle-icon.svg';
      iconArrowRight.alt = 'icon';
      carouselArrowRight.appendChild(iconArrowRight);
    carousel.appendChild(carouselArrowRight); 

    let carouselArrowLeft = document.createElement('div');
    carouselArrowLeft.className = ('carousel__arrow carousel__arrow_left');
      let iconArrowLeft = document.createElement('img');
      iconArrowLeft.src = '/assets/images/icons/angle-left-icon.svg';
      iconArrowLeft.alt = 'icon';
      carouselArrowLeft.appendChild(iconArrowLeft);
      carousel.appendChild(carouselArrowLeft);  

    let carouselInner = document.createElement('div');
    carouselInner.className = ('carousel__inner');
    carousel.appendChild(carouselInner);

    let slideIndex = 0;

    function slideElement (slide) {
      let carouselSlide = document.createElement('div');
      carouselSlide.className = ('carousel__slide');
      carouselSlide.dataset.id = slide.id;
      carouselInner.appendChild(carouselSlide);

        let carouselImg = document.createElement('img');
        carouselImg.src = `/assets/images/carousel/${slide.image}`;
        carouselImg.className = ('carousel__img');
        carouselImg.alt = 'slide';
        carouselSlide.appendChild(carouselImg);

        let carouselCaption = document.createElement('div');
        carouselCaption.className = ('carousel__caption');
        carouselSlide.appendChild(carouselCaption);

          let price = document.createElement('span');
          price.className = ('carousel__price');
          price.textContent = `€${slide.price.toFixed(2)}`;
          carouselCaption.appendChild(price);

          let carouselTitle = document.createElement('div');
          carouselTitle.className = ('carousel__title');
          carouselTitle.textContent = slide.name;
          carouselCaption.appendChild(carouselTitle);

          let button = document.createElement('button');
          button.type = 'button';
          button.className = ('carousel__button');
          carouselCaption.appendChild(button);

            let icon = document.createElement('img');
            icon.src = '/assets/images/icons/plus-icon.svg';
            icon.alt = 'icon';
            button.appendChild(icon);

      let addProduct = new CustomEvent("product-add", {
        detail: slide.id, 
        bubbles: true 
      });
      button.addEventListener('click', () => {
        carousel.dispatchEvent(addProduct);
      })      
    }  

    this.slides.map((slide) => {
      return slideElement(slide);
    })


      function arrows () {
        if(slideIndex == 0) { 
          carouselArrowLeft.style.display = 'none';
          carouselArrowRight.style.display = '';
        }
        else {
          carouselArrowLeft.style.display = '';
          carouselArrowRight.style.display = '';
        }
      }  
      arrows();

      carouselArrowRight.addEventListener('click', function () {
        let offsetW = document.querySelector('.carousel__inner').offsetWidth;
        slideIndex++;
        carouselArrowLeft.style.display = '';
        if(slideIndex == carouselInner.children.length-1) { carouselArrowRight.style.display = 'none';}
        carouselInner.style.transform = `translateX(${-slideIndex*offsetW}px)`;			
      });
    
      carouselArrowLeft.addEventListener('click', function () {
        let offsetW = document.querySelector('.carousel__inner').offsetWidth;
        slideIndex--;
        arrows();
        carouselInner.style.transform = `translateX(-${slideIndex*offsetW}px)`;
      });

    this.elem = carousel;
  }
}
