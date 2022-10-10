// variaveis globais

const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const imgFile = document.getElementById('meme-insert');
const imgPreview = document.getElementById('meme-image');

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
