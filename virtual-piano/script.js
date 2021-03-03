const piano = document.querySelector('.piano'); //piano

const pianoКeys = document.querySelectorAll('.piano-key');

// События мыши
piano.addEventListener('click', playAudio);
piano.addEventListener('click', (event) => playAudio(event));


// События клавиатуры
window.addEventListener('keydown', (event) => playAudio(event));
window.addEventListener('keydown', (event) => {
  if(event.code === 'Space') {
    playAudio();
  }
});

function playAudio(e) {
  const audio = document.querySelector(`audio[data-letter="${e.code}"]`);// берем тег audio и атрибутом data-letter

};