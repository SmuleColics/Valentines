const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const gif = document.querySelector('.gif');
const text = document.querySelector('.valentine-text');

const mimosa = ["pics/mimosaIsHappy.gif", "pics/mimosaIsCrying.gif"];

yesBtn.addEventListener('click', () => {
    text.innerHTML = "yayyy";
    gif.src = mimosa[0];
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

noBtn.addEventListener('mouseover', () => {
  gif.src = mimosa[1];

  noBtn.style.position = "absolute";
  yesBtn.style.position = "absolute";
  yesBtn.style.left = "35%";

  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomXPosition = Math.floor(Math.random() * maxX);
  const randomYPosition = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomXPosition + "px";
  noBtn.style.top = randomYPosition + "px";
});

