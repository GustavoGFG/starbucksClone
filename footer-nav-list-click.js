const footerTopicList = document.querySelectorAll(
  '.footer-nav .title-container'
);
const footerTopicContent = document.querySelectorAll('.footer-nav .col ul');
const footerArrowArray = document.querySelectorAll(
  '.footer-nav .title-container i'
);

footerTopicList.forEach((item, index) => {
  item.addEventListener('click', () => {
    footerTopicContent[index].classList.toggle('visible');
    footerArrowArray[index].classList.toggle('rotate');
  });
});
