// my variables
const hamIcon = document.querySelector('.ham'),
  hamburger = document.querySelector('.hamburger'),
  addOrRemoveItem = document.querySelector('.addItems'),
  numOfItems = document.querySelector('.numOfItems'),
  nextOrPrevSlide = document.querySelector('.carousel'),
  imgArr = document.querySelectorAll('.imageSlides'),
  LBimgArr = document.querySelectorAll('.LightBoxImageSlides'),
  prodArr = document.querySelectorAll('.productSlide'),
  LBprodArr = document.querySelectorAll('.LBproduct'),
  cart = document.querySelector('.cart'),
  cartDetails = document.querySelector('.cartDetails'),
  addToCart = document.querySelector('.addToCart'),
  quantity = document.querySelector('.quantity'),
  amount = document.querySelector('.amount'),
  checkOut = document.querySelector('.checkOut'),
  emptyCart = document.querySelector('.emptyCart'),
  cartList = document.querySelector('.cartList '),
  displayNum = document.querySelector('.displayNum'),
  deleteItem = document.querySelector('.fa-trash-can'),
  closeCart = document.querySelector('.closeCart'),
  product = document.querySelector('.products'),
  LBproduct = document.querySelector('.LBproducts'),
  lightBoxCarousel = document.querySelector('.LightBoxCarousel'),
  LBnext = document.querySelector('.LBnext'),
  LBprevious = document.querySelector('.LBprevious'),
  lightBox = document.querySelector('.lightBox'),
  closeLightBox = document.querySelector('.closeLightBox'),
  intervalTime = 5000;
let auto = true;
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('numOfProd') != null) {
    // console.log(Number(localStorage.getItem('numOfProd')));
    numOfProd = localStorage.getItem('numOfProd');
    cartList.style.display = 'flex';
    checkOut.style.display = 'flex';
    emptyCart.style.display = 'none';
    displayNum.style.display = 'flex';
    quantity.textContent = `$${125}x ${numOfProd}`;
    amount.textContent = `$${125 * numOfProd}`;
    displayNum.textContent = `${numOfProd}`;
  }
});
// side bar
hamIcon.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-bars') {
    e.target.className = 'fa-solid fa-xmark';
    hamburger.style.transform = 'translateX(0)';
  } else {
    e.target.className = 'fa-solid fa-bars';
    hamburger.style.transform = 'translateX(-160%)';
  }
});

// add counter functionality
let counter = 0;
addOrRemoveItem.addEventListener('click', (x) => {
  // console.log(x.target);
  if (x.target.className === 'fa-solid fa-plus') {
    counter++;
    numOfItems.textContent = counter;
  }
  if (x.target.className === 'fa-solid fa-minus') {
    counter--;
    if (counter <= 0) {
      counter = 0;
    }
    numOfItems.textContent = counter;
  }
});

// carousel slide
function nextSlide() {
  let nextIndex, currIndex;
  let slides = [...imgArr],
    productSlide = [...prodArr];

  slides.forEach((x, index) => {
    if (x.classList.contains('active')) {
      nextIndex = index + 1;
      currIndex = index;
    }
    x.classList.remove('active');
  });
  if (nextIndex > imgArr.length - 1) {
    nextIndex = 0;
  }
  slides[nextIndex].classList.add('active');
  productSlide[currIndex].classList.remove('activeState');
  productSlide[nextIndex].classList.add('activeState');
}
function prevSlide() {
  let prevIndex, currIndex;
  let slides = [...imgArr],
    productSlide = [...prodArr];

  slides.forEach((x, index) => {
    if (x.classList.contains('active')) {
      prevIndex = index - 1;
      currIndex = index;
    }
    x.classList.remove('active');
  });
  if (prevIndex < 0) {
    prevIndex = imgArr.length - 1;
  }
  slides[prevIndex].classList.add('active');
  productSlide[currIndex].classList.remove('activeState');
  productSlide[prevIndex].classList.add('activeState');
}
nextOrPrevSlide.addEventListener('click', (x) => {
  // next
  if (
    x.target.className === 'next' ||
    x.target.className == 'fa-solid fa-angle-right'
  ) {
    nextSlide();
  }
  // prev
  if (
    x.target.className === 'previous' ||
    x.target.className == 'fa-solid fa-angle-left'
  ) {
    prevSlide();
  }
});

// slideInterval
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// display cart details
cart.addEventListener('click', (e) => {
  if (cartDetails.className === 'cartDetails') {
    cartDetails.classList.add('active');
  } else {
    cartDetails.classList.remove('active');
  }
});

// add items to cart
addToCart.addEventListener('click', () => {
  if (numOfItems.textContent != '0') {
    cartList.style.display = 'flex';
    checkOut.style.display = 'flex';
    emptyCart.style.display = 'none';
    displayNum.style.display = 'flex';
    let numOfProd = parseInt(numOfItems.textContent);
    localStorage.setItem('numOfProd', numOfProd);
    quantity.textContent = `$${125}x ${numOfProd}`;
    amount.textContent = `$${125 * numOfProd}`;
    displayNum.textContent = `${numOfProd}`;
    numOfItems.textContent = '0';
    counter = 0;
  }
});
closeCart.addEventListener('click', () => {
  cartDetails.classList.remove('active');
});

// add delete functionality
deleteItem.addEventListener('click', () => {
  if (confirm('Remove iems?')) {
    cartList.style.display = 'none';
    checkOut.style.display = 'none';
    emptyCart.style.display = 'flex';
    displayNum.style.display = 'none';
    counter = 0;
    localStorage.clear();
  }
});

// add lightBox

lightBoxCarousel.addEventListener('click', (x) => {
  let slides = [...LBimgArr],
    productSlide = [...LBprodArr];

  if (
    x.target.className === 'LBnext' ||
    x.target.classList.contains('lightBoxNext')
  ) {
    let nextIndex, currIndex;
    slides.forEach((x, index) => {
      if (x.classList.contains('active')) {
        nextIndex = index + 1;
        currIndex = index;
      }
      x.classList.remove('active');
    });
    if (nextIndex > imgArr.length - 1) {
      nextIndex = 0;
    }
    slides[nextIndex].classList.add('active');
    productSlide[currIndex].classList.remove('activeState');
    productSlide[nextIndex].classList.add('activeState');
  }
  // prev
  if (
    x.target.className === 'LBprevious' ||
    x.target.classList.contains('lightBoxPrev')
  ) {
    let prevIndex, currIndex;

    slides.forEach((x, index) => {
      if (x.classList.contains('active')) {
        prevIndex = index - 1;
        currIndex = index;
      }
      x.classList.remove('active');
    });
    if (prevIndex < 0) {
      prevIndex = imgArr.length - 1;
    }
    slides[prevIndex].classList.add('active');
    productSlide[currIndex].classList.remove('activeState');
    productSlide[prevIndex].classList.add('activeState');
  }
});

//open Lightbox function
product.addEventListener('click', (e) => {
  let slides = [...LBimgArr],
    productSlide = [...LBprodArr],
    currIndex;
  if (e.target.className == 'prodImg') {
    lightBox.classList.add('active');
    slides.forEach((item, index) => {
      currIndex = index;
      item.classList.remove('active');
      if (e.target.src == item.firstElementChild.src) {
        item.classList.add('active');
        productSlide[currIndex].classList.add('activeState');
      }
    });
  }
});

LBproduct.addEventListener('click', (e) => {
  let slides = [...LBimgArr],
    productSlide = [...LBprodArr],
    currIndex;

  if (e.target.className == 'LBprodImg') {
    slides.forEach((item, index) => {
      currIndex = index;
      item.classList.remove('active');
      if (e.target.src == item.firstElementChild.src) {
        item.classList.add('active');
        productSlide.forEach((x) => {
          x.classList.remove('activeState');
        });
        productSlide[currIndex].classList.add('activeState');
      }
    });
  }
});

// close Lightbox
closeLightBox.addEventListener('click', () => {
  lightBox.classList.remove('active');
});
