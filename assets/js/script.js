const container = document.querySelector('.container');
const song = document.querySelector('.song');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const reset = document.querySelector('.reset');
const progressBar = document.querySelector('.progress-bar');
const titulo = document.querySelector('.titulo');
const circle = document.querySelector('.circle');

let controlArray = [left, right]

let audio;

let letra;

let tempo = 0;

progressBar.addEventListener('click', (event) => {
    // if (container.classList.contains('costa')){
    const posicaoClique = event.offsetX;
    const larguraBarra = progressBar.offsetWidth;
    const valor = Math.round((posicaoClique / larguraBarra) * 100);
    audio.currentTime = (valor * audio.duration) / 100;
    tempo = audio.currentTime;
  });



reset.addEventListener('click', () => {
    // if (container.classList.contains('costa')){
    audio.currentTime = 0;
    // audio.play()
    tempo = 0;
// }
    // container.classList.remove('costa');
    // audio.play();
});

song.addEventListener('click', el => {
  let ele = el.target;

      anime({
        targets: `.${artistArray[1]}`,
        scale: 1,
        easing: 'easeOutExpo',
        duration: 1500,
    })

  if (ele.classList.contains('mateus')) {
    songNumber = 0;
    anime({
      targets: '.song',
      translateX: '255px',
      easing: 'easeOutExpo',
    }); 
  } else if (ele.classList.contains('julliany')) {
    songNumber = 1;
    anime({
      targets: '.song',
      translateX: '0px',
      easing: 'easeOutExpo',
    });
  } else {
    songNumber = 2;
    anime({
      targets: '.song',
      translateX: '-255px',
      easing: 'easeOutExpo',
    });
  }
});


container.addEventListener('click', () => {
    container.classList.toggle('costa');
    musica();
});


function musica() {
    if (container.classList.contains('costa')) {
        if (songNumber === 0){
        audio = new Audio('./assets/js/music/presenca.mp3');
        if(letra != 0){
            audio.currentTime = 0;
        } else {
        audio.currentTime = tempo;
    }
        audio.play();
        letra = 0;
        
audio.addEventListener('timeupdate', function() {
    const value = (100 / audio.duration) * audio.currentTime;
    progressBar.value = value;  
    let progresso = value-3;
    circle.style.margin = '10px ' + progresso + '%';
  });
    } else if (songNumber === 1) {
        audio = new Audio('./assets/js/music/você.mp3');
        if(letra != 1){
            audio.currentTime = 0;
        } else {
        audio.currentTime = tempo;
    }
        audio.play();
        letra = 1;
           
audio.addEventListener('timeupdate', function() {
    const value = (100 / audio.duration) * audio.currentTime;
    progressBar.value = value;
    let progresso = value-3;
    circle.style.margin = '10px ' + progresso + '%';
  });
    } else {
        audio = new Audio('./assets/js/music/porta.mp3');
        if(letra != 2){
            audio.currentTime = 0;
        } else {
        audio.currentTime = tempo;
    }
        audio.play();
        letra = 2;
           
audio.addEventListener('timeupdate', function() {
    const value = (100 / audio.duration) * audio.currentTime;
    progressBar.value = value;
    let progresso = value-3;
    circle.style.margin = '10px ' + progresso + '%';
  });
    }
    } else {
        audio.pause();
        tempo = audio.currentTime;
   	progressBar.value = 0;
    }
}

controlArray.forEach((control) => {
    control.addEventListener('click', () => {
        switch (control) {
            case right:
                nextSong();
                break;

            case left:
                prevSong();
                break;
        }
    })
})

let artistArray = ['mateus', 'julliany', 'fhop']

let songNumber = 1;

anime({
    targets: '.julliany',
    scale: [0.8, 1.1],
    easing: 'easeOutExpo',
    duration: 1500,
})

function nextSong() {
    if (songNumber == 2) {
        songNumber = 0;

        anime({
            targets: '.song',
            translateX: '255px',
            easing: 'easeOutExpo',
        })
} else {
    songNumber += 1;
    scaleCoverDownNext();

    // ANIMATE TO NEXT COVER
    anime({
        targets: '.song',
        translateX: '-=255px',
        easing: 'easeOutExpo',
    })
}  
}

function prevSong() {
    if (songNumber == 0) {
        songNumber = 2;

        anime({
            targets: '.song',
            translateX: '-255px',
            easing: 'easeOutExpo',
        })
    } else {
        songNumber -= 1;
        scaleCoverDownPrev();

        // ANIMATE TO NEXT COVER
        anime({
            targets: '.song',
            translateX: '+=255px',
            easing: 'easeOutExpo',
        })
    }
}

function scaleCoverDownNext() {
    let prevSongNumber = songNumber - 1;

    anime({
        targets: `.${artistArray[prevSongNumber]}`,
        scale: 1,
        easing: 'easeOutExpo',
        duration: 1500,
    })
}

function scaleCoverDownPrev() {
    let nextSongNumber = songNumber + 1;

    anime({
        targets: `.${artistArray[nextSongNumber]}`,
        scale: 1,
        easing: 'easeOutExpo',
        duration: 1500,
    })
};

document.addEventListener('click', () => {
if (songNumber === 0) {
    titulo.style = "opacity: 0%"
    titulo.innerHTML = ''
    titulo.innerHTML = `Tua Presença Vale Mais </br> Mateus Brito`
    titulo.style = "opacity: 100%"
} else if (songNumber === 1) {
    titulo.style = "opacity: 0%"
    titulo.innerHTML = ''
    titulo.innerHTML = `Eu Tenho Você + Era Eu </br> Julliany Souza ft. Ricardinho`
    titulo.style = "opacity: 100%"
} else {
    titulo.style = "opacity: 0%"
    titulo.innerHTML = ''
    titulo.innerHTML = `Batendo à Porta </br> Fhop music`
    titulo.style = "opacity: 100%"
}})


