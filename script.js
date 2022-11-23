const mouseCircle = document.querySelector('.mouse-circle');
const mouseDot = document.querySelector('.mouse-dot');
const mouseCircleBool = true;
const mouseCircleFn = (x, y) => {
  mouseCircleBool
    && (mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`);
  mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};
const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector('.main-circle img');
let mX = 0;
let mY = 0;
const z = 100;
const animateCircles = (e, x, y) => {
  if (x < mX) {
    circles.forEach((circle) => {
      circle.style.left = `${z}px`;
    });
    mainImg.style.left = `${z}px`;
  } else if (x > mX) {
    circles.forEach((circle) => {
      circle.style.left = `-${z}px`;
    });
    mainImg.style.left = `-${z}px`;
  }

  if (y < mY) {
    circles.forEach((circle) => {
      circle.style.top = `${z}px`;
    });
    mainImg.style.top = `${z}px`;
  } else if (y > mY) {
    circles.forEach((circle) => {
      circle.style.top = `-${z}px`;
    });
    mainImg.style.top = `-${z}px`;
  }
  mX = e.clientX;
  mY = e.clientY;
};
document.body.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  mouseCircleFn(x, y);
  animateCircles(e, x, y);
  const hoveredEl = document.elementFromPoint(x, y);
});
document.body.addEventListener('mouseleave', () => {
  mouseCircle.style.opacity = '0';
  mouseDot.style.opacity = '0';
});
const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent = 'I am a backend Developer trying to make people happy with my work :)';
Array.from(aboutMeTextContent).forEach((char) => {
  const span = document.createElement('span');
  span.textContent = char;
  aboutMeText.appendChild(span);
});
