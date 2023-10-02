const slideContainer = document.querySelector('.slider');
const slide = document.querySelector('#slide');
const nextBtn = document.getElementById('arrow-right');
const prevBtn = document.getElementById('arrow-left');
const interval = 3000;

let slides = document.querySelectorAll('.slide-img');
let index = 1;
console.log(slides);
let slideId;

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
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '0.7s';
  }, interval);
};
const getSlides = () => document.querySelectorAll('.slide-img');

slide.addEventListener('transitionend', () => {
  slideWidth = slides[index].clientWidth;
  slides = getSlides();
  // console.log(slides);
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
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = '0.7s';
});
prevBtn.addEventListener('click', () => {
  slides = getSlides();
  if (index <= 0) return;
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = '0.7s';
});

startSlide();
