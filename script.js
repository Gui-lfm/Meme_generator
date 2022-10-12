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

// requisito 7
const memeUm = document.getElementById('meme-1');
const memeDois = document.getElementById('meme-2');
const memeTres = document.getElementById('meme-3');
const memeQuatro = document.getElementById('meme-4');

const memes = [memeUm, memeDois, memeTres, memeQuatro];

for (let index = 0; index < memes.length; index += 1) {
  const meme = memes[index];
  meme.addEventListener('click', function () {
    imgPreview.src = meme.src;
  });
}
