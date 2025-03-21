import { areStrings, getElement } from "../helpers/utils.js";

const DIRECTIONS = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

let x = 0;
let y = 0;

// Función para mover la pelota con teclado
export function moveBall(e, ball, stage) {
  const $ball = getElement(ball);
  const $stage = getElement(stage);

  const ballLimits = $ball.getBoundingClientRect();
  const stageLimits = $stage.getBoundingClientRect();

  e.preventDefault();

  switch (e.keyCode) {
    case DIRECTIONS.LEFT:
      if (ballLimits.left > stageLimits.left) x--;
      break;
    case DIRECTIONS.UP:
      if (ballLimits.top > stageLimits.top) y--;
      break;
    case DIRECTIONS.RIGHT:
      if (ballLimits.right < stageLimits.right) x++;
      break;
    case DIRECTIONS.DOWN:
      if (ballLimits.bottom < stageLimits.bottom) y++;
      break;
    default:
      return; // No hacer nada si no es una tecla de dirección
  }

  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

// Variables para el control táctil
let touchStartX = 0;
let touchStartY = 0;

// Función para habilitar controles en móviles
export function enableMobileControls(ball, stage) {
  const $stage = getElement(stage);
  const $ball = getElement(ball);

  $stage.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });

  $stage.addEventListener("touchmove", (e) => {
    if (!touchStartX || !touchStartY) return;

    let touchEndX = e.touches[0].clientX;
    let touchEndY = e.touches[0].clientY;

    let diffX = touchStartX - touchEndX;
    let diffY = touchStartY - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Movimiento horizontal
      if (diffX > 0) {
        x--; // Izquierda
      } else {
        x++; // Derecha
      }
    } else {
      // Movimiento vertical
      if (diffY > 0) {
        y--; // Arriba
      } else {
        y++; // Abajo
      }
    }

    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;

    // Resetear variables de toque
    touchStartX = 0;
    touchStartY = 0;
  });
}

// Activar controles en PC y móviles
export function initControls(ball, stage) {
  document.addEventListener("keydown", (e) => moveBall(e, ball, stage));
  enableMobileControls(ball, stage);
}
