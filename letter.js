const playButton = document.querySelector('#play-button');
const audioPlayer = document.querySelector('#audio-player');
const spotifyTop = document.querySelector('.spotify-top');
const songTitle = document.querySelector('.song-title');
const playMe = document.querySelector('.play-me');
const scrollDown = document.querySelector('.scroll-down');
const body = document.querySelector('body');
const loveLetter = document.querySelector('.love-letter');

const firstPartText = `Haluuu Jennylene Amolong, my honey bunch sweetie pie. It's been months since I've known you, but it already feels like a year. All the time that we spent together, kahit saan, basta't kasama ka, is truly priceless. Every laughter, every smile whenever you look back at me, everytime na you are not in the mood, every conversation that we had, every quiet time, basta everytime na I am with you. I love and cherish every moment that we shared together.`;

const secondPartText = `Thank you for bringing warmth in my heart. Thank you for trusting me. Thank you for giving me a chance. Thank you for letting me love you. Thank you for reciprocating my feelings. You are such a wonderful person. And, the more I know you, the more the reason there is to love you. It's beyond words how grateful I am that I am with you. You deserve everything, Jen. You are my everything.`;

const toText = 'To my baby,';

let toIndex = 0;
const loveLetterTo = document.querySelector('.love-letter-to');
const to = toText.split(' ');

const loveLetterContentOne = document.querySelector('.love-letter-content-one');
const loveLetterContentTwo = document.querySelector('.love-letter-content-two');
let wordIndex = 0;

playButton.addEventListener('click', () => {
  body.classList.add('fade-in');
  spotifyTop.classList.add('active');
  songTitle.classList.add('active');

  playMe.style.display = 'none';

  setInterval(displayLetter, 8000);

  if (audioPlayer.paused) {
    audioPlayer.play();  
    playButton.classList.remove('fa-play');  
    playButton.classList.add('fa-pause');  
  } else {
    audioPlayer.pause();  
    playButton.classList.remove('fa-pause'); 
    playButton.classList.add('fa-play');  
  }
});

const displayLetter = () => {
  scrollDown.classList.add('pop-out');

  setTimeout(() => {
    loveLetter.classList.add('show');
    setTimeout(startLetterText, 1500);  
  }, 1500);
};

const letterSpeed = 150;

const startLetterText = () => {
  const firstPartInterval = setInterval(() => {
    if (toIndex < to.length) {
      loveLetterTo.textContent += to[toIndex] + " ";
      toIndex++;
    } else if (wordIndex < firstPartText.length) {
      loveLetterContentOne.innerHTML += firstPartText[wordIndex];
      wordIndex++;
    } else {
      clearInterval(firstPartInterval); 
      startSecondPart();  
    }
  }, letterSpeed);
};

const startSecondPart = () => {
  const secondPartInterval = setInterval(() => {
    if (wordIndex < secondPartText.length + firstPartText.length) {
      loveLetterContentTwo.innerHTML += secondPartText[wordIndex - firstPartText.length];
      wordIndex++;
    } else {
      clearInterval(secondPartInterval); 
    }
  }, letterSpeed);
};