const slideContainer = document.querySelector('.slider');
const slide = document.querySelector('#slide');
const nextBtn = document.getElementById('arrow-right');
const prevBtn = document.getElementById('arrow-left');
const interval = 3000;
const slideTransitionSpeed = '0.2s';

const imageSelectorContainer = document.getElementById(
  'image-selector-container'
);

function createImageSelectors() {
  for (let i = 0; i < slides.length; i++) {
    let selector = document.createElement('div');
    selector.classList.add('image-selector');
    if (i === 0) {
      selector.classList.add('image-selected');
    }
    imageSelectorContainer.appendChild(selector);
  }
}

let slides = document.querySelectorAll('.slide-img');
let index = 1;
let slideId;

createImageSelectors();

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

let slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  slideId = setInterval(() => {
    index++;
    defineSelectedImage(index);
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = slideTransitionSpeed;
  }, interval);
};
const getSlides = () => document.querySelectorAll('.slide-img');
//
//
//
const imageSelectorArray = document.querySelectorAll('.image-selector');
const defineSelectedImage = index => {
  imageSelectorArray.forEach(item => item.classList.remove('image-selected'));
  if (slides[index].id === firstClone.id) {
    imageSelectorArray[0].classList.add('image-selected');
  } else if (slides[index].id === lastClone.id) {
    imageSelectorArray[imageSelectorArray.length - 1].classList.add(
      'image-selected'
    );
  } else {
    imageSelectorArray[index - 1].classList.add('image-selected');
  }
};
//
//
//

slide.addEventListener('transitionend', () => {
  slideWidth = slides[index].clientWidth;
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});
slideContainer.addEventListener('mouseleave', () => {
  startSlide();
});
nextBtn.addEventListener('click', () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  defineSelectedImage(index);
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = slideTransitionSpeed;
});
prevBtn.addEventListener('click', () => {
  slides = getSlides();
  if (index <= 0) return;
  index--;
  defineSelectedImage(index);
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = slideTransitionSpeed;
});

startSlide();
