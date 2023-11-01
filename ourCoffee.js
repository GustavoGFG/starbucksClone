const formatoBtn = document.getElementById('formato-btn');
const torraBtn = document.getElementById('torra-btn');
const buttonsArray = document.querySelectorAll('.button');
const categoryContainerArray = document.querySelectorAll(
  '.classification-container'
);

const categoriaFormato = document.getElementById('formato');
const categoriaTorra = document.getElementById('torra');

function selectButton(e) {
  buttonsArray.forEach(button => {
    button.classList.remove('button-active');
  });
  e.currentTarget.classList.toggle('button-active');

  categoryContainerArray.forEach(item => {
    item.classList.remove('show-category');
  });

  if (e.currentTarget.id === 'formato-btn') {
    categoriaFormato.classList.add('show-category');
  } else {
    categoriaTorra.classList.add('show-category');
  }
}

formatoBtn.addEventListener('click', selectButton);
torraBtn.addEventListener('click', selectButton);
