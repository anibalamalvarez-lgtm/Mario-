const mario = documet.querySelector(.mario)
const pipe = documet.querySelector(.pipe)

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

constloop = setInterval(() => {

    console.log('loop')

  const pipePosition = pipe.offsetLef;
  const marioPosition = +mario.getComputedstyle(mario).bottom.replace('px', '');

if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = '${pipePosition}px';

    mario.style.animation = 'none';
    mario.style.left = '${marioPosition}px';

    mario.src = './images/game-over.png';
    mario.style.width = '75px'
    mario.style.marginlef = '50px'

    clearinterval(loop)

}

}, 10);

documet.addEventListener{'keydom', jump}