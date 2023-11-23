// Adicione URLs para as imagens correspondentes a cada letra
const imageUrls = {
    'a': 'src/images/a.jpg',
    'b': 'src/images/b.jpg',
    'c': 'src/images/c.jpg',
    'd': 'src/images/d.jpg',
    'e': 'src/images/e.jpg',
    'f': 'src/images/f.jpg',
    'g': 'src/images/g.jpg',
    'h': 'src/images/h.jpg',
    'i': 'src/images/i.jpg',
    'j': 'src/images/j.jpg',
    'k': 'src/images/k.jpg',
    'l': 'src/images/l.jpg',
    'm': 'src/images/m.jpg',
    'n': 'src/images/n.jpg',
    'o': 'src/images/o.jpg',
    'p': 'src/images/p.jpg',
    'q': 'src/images/q.jpg',
    'r': 'src/images/r.jpg',
    's': 'src/images/s.jpg',
    't': 'src/images/t.jpg',
    'u': 'src/images/u.jpg',
    'v': 'src/images/v.jpg',
    'w': 'src/images/w.jpg',
    'x': 'src/images/x.jpg',
    'y': 'src/images/y.jpg',
    'z': 'src/images/z.jpg'
};

const videosUrls = {
    'academia': 'src/videos/academia.mp4',
    'futebol': 'src/videos/futebol.mp4'
}

function processInput() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const outputImages = document.getElementById('outputImages');

    // Limpa o conteúdo atual
    outputImages.innerHTML = '';

    for (const word of inputText.split(' ')) {
        if (word in videosUrls) {
            const videoUrl = videosUrls[word];
            const videoElement = document.createElement('video');
            videoElement.src = videoUrl;
            videoElement.alt = `Video for ${word}`;
            videoElement.autoplay = true;
            videoElement.volume = false;
            videoElement.style.height = '400px';
            outputImages.appendChild(videoElement);
            outputImages.style.textAlign = 'center'
        } else {
            function removerAcentos(letra) {
                const comAcento = 'áéíóúâêîôûàèìòùäëïöüãõñçÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÄËÏÖÜÃÕÑÇ';
                const semAcento = 'aeiouaeiouaeiouaeiouaoncAEIOUAEIOUAEIOUAEIOUAONC';
            
                const indice = comAcento.indexOf(letra);
                if (indice !== -1) {
                    return semAcento[indice];
                }
                return letra;
            }
            
            // Iterar sobre a palavra e adicionar imagens
            for (const letter of word) {
                const normalizedLetter = removerAcentos(letter.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                
                if (normalizedLetter.match(/[a-z]/i)) {  // Verifica se é uma letra do alfabeto
                    const imageUrl = imageUrls[normalizedLetter];
                    if (imageUrl) {
                        const imgElement = document.createElement('img');
                        imgElement.src = imageUrl;
                        imgElement.alt = `Image for ${normalizedLetter}`;
                        outputImages.appendChild(imgElement);
                    }
                }
            }
        }
    }
}
