// variaveis globais

const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

inputText.addEventListener('input', function(event) {
    memeText.innerText = event.target.value;
})