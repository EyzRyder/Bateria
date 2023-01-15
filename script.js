//Reconhecer as teclas apertadas 
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

// leia o que é digitado , torna ela num array e manda para playComposition 
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value.toLowerCase();

    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }

    console.log("Música", song);
});


document.querySelectorAll('.keys').forEach(key => {
    key.addEventListener('click', (e) => {
        const keyElement = e.target.getAttribute("data-key");
        playSound(keyElement);
    });
});

//tocar sons e mudar a cor do Butão em especifico
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

//executa o que foi escrita na barra, e toca em tempo
function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}