import { areStrings, getElement } from "../helpers/utils.js";

const DIRECTIONS = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  // Verificar elementos en el DOM o que sean String
  try {
    !areStrings(ball, stage);
  } catch (err) {
    console.error(err.message);
  }

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

export function handleShortcuts(e) {
  /*  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`ctrl:${e.ctrlKey}`);
  console.log(`alt:${e.altKey}`);
  console.log(`shift:${e.shiftKey}`);
  console.log(e); */

  if (e.key === "a" && e.altKey) {
    alert("Alert");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Confirm");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Prompt");
  }
}
