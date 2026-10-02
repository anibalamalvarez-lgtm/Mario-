const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    // Evita volver a saltar si ya está ejecutando la animación
    if (mario.classList.contains('jump')) return;

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
     //Convierte el valor 'Xpx' de la propiedad bottom a un número
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Detecta la colisión entre el tubo y Mario
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        // Detiene la animación del tubo y fija su posición horizontal
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Detiene la animación de Mario y fija su posición vertical
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; // CORREGIDO: Usar bottom, no left

        // Cambia la imagen a Game Over y ajusta su tamaño
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Detiene el bucle del juego
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);