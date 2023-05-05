const container = document.querySelector('.container');
const song = document.querySelector('.song');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const progressBar = document.querySelector('.progress-bar');

let controlArray = [left, right]


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
    console.log(songNumber);
    anime({
      targets: '.song',
      translateX: '255px',
      easing: 'easeOutExpo',
    }); 
  } else if (ele.classList.contains('julliany')) {
    songNumber = 1;
	console.log(songNumber);
    anime({
      targets: '.song',
      translateX: '0px',
      easing: 'easeOutExpo',
    });
  } else {
    songNumber = 2;
console.log(songNumber);
    anime({
      targets: '.song',
      translateX: '-255px',
      easing: 'easeOutExpo',
    });
  }
console.log(songNumber);
});


container.addEventListener('click', () => {
    container.classList.toggle('costa');
    musica();
});


// Cria o objeto Audio uma vez e o torna uma variável global
const audio = new Audio();

function musica() {
    if (container.classList.contains('costa')) {
        if (songNumber === 0){
            audio.src = './assets/js/music/presenca.mp3';
            audio.play();
        } else if (songNumber === 1) {
            audio.src = './assets/js/music/você.mp3';
            audio.play();
        } else {
            audio.src = './assets/js/music/porta.mp3';
            audio.play();
        }
    } else {
        audio.pause();
        let tempo = audio.currentTime;
        console.log('tempo:', tempo);
        audio.currentTime = tempo;
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


