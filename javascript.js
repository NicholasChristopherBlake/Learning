// Menu

const menuIcon = document.getElementById('menu');
const menuIconClose = document.getElementById('menu-close');

menuIcon.onclick = () => {
  document.documentElement.style.setProperty(`--styleMenu`, ' ')
  document.documentElement.style.setProperty(`--opacity`, '1')
}
menuIconClose.onclick = () => {
  document.documentElement.style.setProperty(`--styleMenu`, 'none')
}

// Cart

const cartIcon = document.getElementById('cart-icon');
const cartItemsNumber = document.getElementById('cart-items-number')
let cartClosed = true;

function openCart() {
  if (cartClosed) {
    document.documentElement.style.setProperty(`--displayCart`, ' ');
    cartClosed = false;
  }
  else {
    document.documentElement.style.setProperty(`--displayCart`, 'none');
    cartClosed = true;
  }
}

cartIcon.onclick = () => openCart()
cartItemsNumber.onclick = () => openCart();


// Changing amount of Items

const minusIcon = document.getElementById('minus-item');
const plusIcon = document.getElementById('plus-item');
const numberOfItems = document.getElementById('number-of-items');
let number = numberOfItems.innerText

minusIcon.onclick = () => {
  if (number > 0) {
    number--;
    numberOfItems.innerText = number;
  }
}
plusIcon.onclick = () => {
  number++;
  numberOfItems.innerText = number;
}

// Add Items to Cart

let hasItems = false;

const addButton = document.querySelector('.add-cart');
const number2 = document.querySelector('.number');
let onePrice = document.getElementById('new-price-num').innerText;

addButton.onclick = () => {
  if (number == 0) {return}
  if (hasItems == true) {
    number2.innerText = Number(number2.innerText) + Number(number);
    let finalPrice = Number(number2.innerText) * parseInt(onePrice);
    document.querySelector('.final-price').innerText = '$' + finalPrice + '.00';
    document.documentElement.style.setProperty(`--displayItemsNumber`, ' ');
    document.getElementById('cart-items-number').innerText = number2.innerText;
  }
  if (hasItems == false) {
    document.documentElement.style.setProperty(`--displayEmptyCart`, 'none')
    document.documentElement.style.setProperty(`--displayCartItems`, 'flex')
    document.querySelector('.price').innerText = '$' + document.getElementById('new-price-num').innerText;
    number2.innerText = number;
    let finalPrice = Number(number) * parseInt(onePrice);
    document.querySelector('.final-price').innerText = '$' + finalPrice + '.00';
    hasItems = true;
    ItemsNumber(hasItems);
  }
}

// Change the number of Items on the Cart
function ItemsNumber(hasItems) {
  if (hasItems == true) {
    document.documentElement.style.setProperty(`--displayItemsNumber`, ' ');
    cartItemsNumber.innerText = number2.innerText;
  }
  else if (hasItems == false) {
    document.documentElement.style.setProperty(`--displayItemsNumber`, 'none');
  }
}

// Delete Items from Cart

const deleteIcon = document.getElementById('delete-icon');
deleteIcon.onclick = () => {
  document.documentElement.style.setProperty(`--displayCartItems`, 'none');
  document.documentElement.style.setProperty(`--displayEmptyCart`, 'flex');
  hasItems = false;
  ItemsNumber(hasItems);
}

// Carousel Mobile

const ulElement = document.querySelector('.carousel-ul');
const slides = Array.from(ulElement.children);
const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');
// const dotsNav = document.querySelector('.carousel-nav')
// const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another (could do it with Flexbox and overflow as well)
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition)

//
const moveToSlide = (ulElement, currentSlide, targetSlide) => {
  ulElement.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

// When I click left -> move slides to the left
leftBtn.addEventListener('click', e => {
  const currentSlide = ulElement.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  // move the slide
  moveToSlide(ulElement, currentSlide, prevSlide);
})

// When I click right -> move slides to the right
rightBtn.addEventListener('click', e => {
  const currentSlide = ulElement.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  // move the slide
  moveToSlide(ulElement, currentSlide, nextSlide);
})

