// my variables
const hamIcon = document.querySelector('.ham'),
  hamburger = document.querySelector('.hamburger'),
  addOrRemoveItem = document.querySelector('.addItems'),
  numOfItems = document.querySelector('.numOfItems'),
  nextOrPrevSlide = document.querySelector('.navigation');

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
    numOfItems.innerHTML = counter;
  }
  if (x.target.className === 'fa-solid fa-minus') {
    counter--;
    if (counter <= 0) {
      counter = 0;
    }
    numOfItems.innerHTML = counter;
  }
});

// nextOrPrevSlide.addEventListener('click', (x)=>{

// })
