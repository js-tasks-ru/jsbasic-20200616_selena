import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    let card = document.createElement('div');
    card.className = ('card');
    let cardTop = document.createElement('div');
    cardTop.className = ('card__top');
      let image = document.createElement('img');
      image.src = `/assets/images/products/${this.product.image}`;
      image.className = ('card__image');
      image.alt = 'product';
      cardTop.appendChild(image);

      let price = document.createElement('span');
      price.className = ('card__price');
      price.textContent = `€${this.product.price.toFixed(2)}`;
      cardTop.appendChild(price);
    card.appendChild(cardTop);

    let cardBody = document.createElement('div');
    cardBody.className = ('card__body');

      let cardTitle = document.createElement('div');
      cardTitle.className = ('card__title');
      cardTitle.textContent = this.product.name;
      cardBody.appendChild(cardTitle);

      let button = document.createElement('button');
      button.type = 'button';
      button.className = ('card__button');
      cardBody.appendChild(button);

        let icon = document.createElement('img');
        icon.src = '/assets/images/icons/plus-icon.svg';
        icon.alt = 'icon';
        button.appendChild(icon);
    card.appendChild(cardBody);  

    let addProduct = new CustomEvent("product-add", {
      detail: this.product.id, 
      bubbles: true 
    });
    button.addEventListener('click', () => {
      this.elem.dispatchEvent(addProduct);
    })
    
    this.elem = card;
  }
}
