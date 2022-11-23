const slider = document.querySelector('.slider');
const imgContainer = document.querySelector('.img-container');
const pagination = document.querySelectorAll('.pagination span');
const caption = document.querySelector('.caption');
const captionText = document.querySelector('.caption h2');

const captions = [
  'Monster With Classes',
  'Monster Thinking',
  'Monster Enjoying',
];

function slide(id) {
  imgContainer.style.left = `${-100 * id}%`;
  pagination.forEach((pag) => {
    pag.classList.remove('active');
  });
  pagination[id].classList.add('active');
  caption.style.animation = 'textChange 1s ease-in-out';
  setTimeout(() => {
    caption.style.animation = 'none';
  }, 1000);
  setTimeout(() => {
    captionText.innerText = captions[id];
  }, 500);
}

// eslint-disable-next-line no-use-before-define
let interval = setInterval(autoSlide, 4000);
let imgId = 1;
function autoSlide() {
  if (imgId > pagination.length - 1) {
    imgId = 0;
  }
  slide(imgId);
  imgId++;
}

for (let i = 0; i < pagination.length; i++) {
  // eslint-disable-next-line no-loop-func
  pagination[i].addEventListener('click', () => {
    clearInterval(interval);
    slide(i);
    imgId = i + 1;
    interval = setInterval(autoSlide, 4000);
  });
}
