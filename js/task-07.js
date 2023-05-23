const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', handFontSizeChange);

function handFontSizeChange() {
  const fontSize = fontSizeControl.value;
  text.style.fontSize = `${fontSize}px`;
}