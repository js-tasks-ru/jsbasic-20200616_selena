function initCarousel() {
  let carouselWrapper = document.querySelector('.carousel');
  let carouselInner = carouselWrapper.querySelector('.carousel__inner');
  let carouselArrowRight = carouselWrapper.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = carouselWrapper.querySelector('.carousel__arrow_left');
  let offsetW = carouselWrapper.querySelector('.carousel__inner').offsetWidth;  
  let slideIndex = 0;

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
    slideIndex++;
    carouselArrowLeft.style.display = '';
    if(slideIndex == carouselInner.children.length-1) { carouselArrowRight.style.display = 'none';}
    carouselInner.style.transform = `translateX(${-slideIndex*offsetW}px)`;			
  });

  carouselArrowLeft.addEventListener('click', function () {
    slideIndex--;
    arrows();
    carouselInner.style.transform = `translateX(-${slideIndex*offsetW}px)`;
  });
}
