function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}