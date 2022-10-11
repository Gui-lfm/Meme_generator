// variaveis globais
const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const imgFile = document.getElementById('meme-insert');
const imgPreview = document.getElementById('meme-image');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

// requisito 1
inputText.addEventListener('input', function (event) {
  memeText.innerText = event.target.value;
});

// requisito 2
imgFile.addEventListener('change', function (event) {
  const img = event.target.files[0];
  if (img) {
    imgPreview.src = URL.createObjectURL(img);
  }
});

// requisito 6
btnFire.addEventListener('click', function () {
  memeContainer.style.border = '3px dashed red';
});

btnWater.addEventListener('click', function () {
  memeContainer.style.border = '5px double blue';
});

btnEarth.addEventListener('click', function () {
  memeContainer.style.border = '6px groove green';
});
