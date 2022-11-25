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
function slideTo(slideIndex) {
  imgContainer.style.left = `${-100 * id}%`;
  pagination.forEach((pag) => {
    pag.classList.remove('active');
  });
  pagination[slideIndex].classList.add('active');
  caption.style.animation = 'textChange 1s ease-in-out';
  setTimeout(() => {
    caption.style.animation = 'none';
  }, 1000);
  setTimeout(() => {
    captionText.innerText = captions[slideIndex];
  }, 500);
}
let imgId = 1;
function autoSlide() {
  if (imgId > pagination.length - 1) {
    imgId = 0;
  }
  slideTo(imgId);
  imgId++;
}
let interval = setInterval(autoSlide, 4000);
for (let i = 0; i < pagination.length; i++) {
  // eslint-disable-next-line no-loop-func
  pagination[i].addEventListener('click', () => {
    clearInterval(interval);
    slideTo(i);
    imgId = i + 1;
    interval = setInterval(autoSlide, 4000);
  });
}
