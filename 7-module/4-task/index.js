export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;

    this.elem = document.createElement("div");
    this.elem.classList.add("slider");
    this.elem.innerHTML = `
      <div class="slider__thumb" style="left: 0%;">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress" style="width: 0%;"></div>
    `;
    this.sliderSteps = document.createElement("div");
    this.sliderSteps.classList.add("slider__steps");
    for (let i = 0; i < steps; i++) {
      let span = document.createElement("span");
      if (i == 0) {
        span.classList.add("slider__step-active");
      }
      this.sliderSteps.append(span);
    }
    this.elem.append(this.sliderSteps);
    
    this.addEventListeners()

    this.elem.addEventListener('click', () => this.onClick());
  }

  addEventListeners() {
    this.elem.querySelector('.slider__thumb').ondragstart = () => false;
    this.elem.querySelector('.slider__thumb').onpointerdown = this.onPointerDown;
  }

  onPointerDown = event => {
    this.elem.classList.add('slider_dragging');
    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
  };

  onPointerMove = event => {
    let left = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
    if (left < 0) {
      left = 0;
    }
    if (left > 1) {
      left = 0;
    }
    let leftPercents = left * 100;
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;
    let segments =this.steps - 1;;
    let approximateValue = left * segments;
    this.value = Math.round(approximateValue);
    
    this.elem.querySelector('.slider__value').innerHTML = this.value;
    let active = this.elem.querySelector('.slider__step-active');
    if (active) {
      active.classList.remove('slider__step-active');
    }
    this.elem.querySelector('.slider__steps').children[this.value].classList.add('slider__step-active');
  };
  onPointerUp = () => {
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
    this.elem.classList.remove('slider_dragging');

    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');

    thumb.style.left = `${(this.value / this.segments) * 100}%`;
    progress.style.width = `${(this.value / this.segments) * 100}%`;

    let customEvent = new CustomEvent('slider-change', { 
      detail: this.value, 
      bubbles: true 
    });
    this.elem.dispatchEvent(customEvent);
  }

  onClick() {
    let left = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
      let segments = this.steps - 1;
      
      this.value = Math.round(left * segments);

      let customEvent = new CustomEvent('slider-change', { 
        detail: this.value, 
        bubbles: true 
      });
      this.elem.dispatchEvent(customEvent);

      let percents = this.value / segments * 100;
      
      this.elem.querySelector('.slider__progress').style.width = percents + '%';
      this.elem.querySelector('.slider__thumb').style.left = percents + '%';

    this.elem.querySelector('.slider__value').innerHTML = this.value;

    let active = this.elem.querySelector('.slider__step-active');
    if (active) {
      active.classList.remove('slider__step-active');
    }

    this.elem.querySelector('.slider__steps').children[this.value].classList.add('slider__step-active');
  }

}
