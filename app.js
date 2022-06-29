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
  product = document.querySelector('.products'),
  lightBoxCarousel = document.querySelector('.LightBoxCarousel'),
  LBnext = document.querySelector('.LBnext'),
  LBprevious = document.querySelector('.LBprevious'),
  lightBox = document.querySelector('.lightBox'),
  closeLightBox = document.querySelector('.closeLightBox'),
  auto = true,
  intervalTime = 5000;
// console.log(addToCart);
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
nextOrPrevSlide.addEventListener('click', (x) => {
  let slides = [...imgArr];
  // next
  if (
    x.target.className === 'next' ||
    x.target.className == 'fa-solid fa-angle-right'
  ) {
    let nextIndex;
    slides.forEach((x, index) => {
      if (x.classList.contains('active')) {
        nextIndex = index + 1;
      }
      x.classList.remove('active');
    });
    if (nextIndex > imgArr.length - 1) {
      nextIndex = 0;
    }
    slides[nextIndex].classList.add('active');
  }
  // prev
  if (
    x.target.className === 'previous' ||
    x.target.className == 'fa-solid fa-angle-left'
  ) {
    let prevIndex;

    slides.forEach((x, index) => {
      if (x.classList.contains('active')) {
        prevIndex = index - 1;
      }
      x.classList.remove('active');
    });
    if (prevIndex < 0) {
      prevIndex = imgArr.length - 1;
    }
    slides[prevIndex].classList.add('active');
  }
});

// slideInterval
// if (auto) {
//   slideInterval = setInterval((nextSlides), intervalTime);
// }

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
    quantity.textContent = `$${125}x ${numOfProd}`;
    amount.textContent = `$${125 * numOfProd}`;
    displayNum.textContent = `${numOfProd}`;

    numOfItems.textContent = '0';
  }
});

// add delete functionality
deleteItem.addEventListener('click', () => {
  if (confirm('Remove iems?')) {
    cartList.style.display = 'none';
    checkOut.style.display = 'none';
    emptyCart.style.display = 'flex';
    displayNum.style.display = 'none';
    counter = 0;
  }
});

// add lightBox
// console.log(lightBoxCarousel);
lightBoxCarousel.addEventListener('click', (x) => {
  let slides = [...LBimgArr];
  // next
  if (
    x.target.className === 'LBnext' ||
    x.target.classList.contains('lightBoxNext')
  ) {
    let nextIndex;
    slides.forEach((x, index) => {
      if (x.classList.contains('active')) {
        nextIndex = index + 1;
      }
      x.classList.remove('active');
    });
    if (nextIndex > imgArr.length - 1) {
      nextIndex = 0;
    }
    slides[nextIndex].classList.add('active');
  }
  // prev
  if (
    x.target.className === 'LBprevious' ||
    x.target.classList.contains('lightBoxPrev')
  ) {
    let prevIndex;

    slides.forEach((x, index) => {
      if (x.classList.contains('active')) {
        prevIndex = index - 1;
      }
      x.classList.remove('active');
    });
    if (prevIndex < 0) {
      prevIndex = imgArr.length - 1;
    }
    slides[prevIndex].classList.add('active');
  }
});

//open Lightbox function

product.addEventListener('click', (x) => {
  if (x.target.classList.contains('productslide')) {
    console.log('object');
  }
});

// close Lightbox function
closeLightBox.addEventListener('click', () => {
  lightBox.classList.remove('active');
});
// console.dir(prodArr);
