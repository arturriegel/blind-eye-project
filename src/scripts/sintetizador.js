const synth = window.speechSynthesis; // chamada SpeechSynthesis API
const input = document.querySelector('textarea'); // caixa de texto
const selectVoices = document.querySelector('select'); // lista de vozes

let voices = [];
function getVoices() { 
  voices = synth.getVoices(); // armazena as vozes no array
  voices.forEach((voice, index) => {
    selectVoices.add(new Option(`${voice.name} (${voice.lang})`, index)); // adiciona as informações na lista de seleção..
  });
}

window.addEventListener('load', () => { // ao ser concluído..
  getVoices(); // carrega as vozes..
  if (synth.onvoiceschanged !== undefined)
    synth.onvoiceschanged = getVoices; // checa e atualiza o evento
});

// dispara um evento ao clicar no botão!
document.querySelector('button').addEventListener('click', () => {
  var utter = new SpeechSynthesisUtterance(input.value); // responsável pelo que vai falar!
  utter.voice = voices[selectVoices.value]; // define qual será a voz..
  synth.speak(utter); // reproduz o audio!
});