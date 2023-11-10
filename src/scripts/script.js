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

function processInput() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const outputImages = document.getElementById('outputImages');

    // Limpa o conteúdo atual
    outputImages.innerHTML = '';

    // Exibe uma imagem para cada letra
    for (const letter of inputText) {
        if (letter.match(/[a-z]/i)) {  // Verifica se é uma letra do alfabeto
            const imageUrl = imageUrls[letter];
            if (imageUrl) {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = `Image for ${letter}`;
                outputImages.appendChild(imgElement);
            }
        }
    }
}
