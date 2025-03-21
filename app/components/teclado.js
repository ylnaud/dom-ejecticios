export function initControls(ballId, stageId) {
  const $ball = document.getElementById(ballId);
  const $stage = document.getElementById(stageId);

  if (!$ball || !$stage) {
    console.error("Error: No se encontraron los elementos ball o stage.");
    return;
  }

  let x = 0,
    y = 0;
  let isKeyboardActive = false;
  let touchStartX = 0,
    touchStartY = 0;
  let lastX = 0,
    lastY = 0;

  function getStageLimits() {
    return $stage.getBoundingClientRect();
  }

  function updateBallPosition() {
    $ball.style.transform = `translate(${x}px, ${y}px)`;
  }

  // 🚀 ACTIVAR MODO TECLADO CON CTRL + B
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "b") {
      isKeyboardActive = !isKeyboardActive;

      document.getElementById("on").innerText = `Modo teclado: ${
        isKeyboardActive ? "ON" : "OFF"
      }`;
    }

    if (!isKeyboardActive) return;

    const stageLimits = getStageLimits();
    const ballLimits = $ball.getBoundingClientRect();
    e.preventDefault();

    switch (e.key) {
      case "ArrowLeft":
        if (ballLimits.left > stageLimits.left) x -= 10;
        break;
      case "ArrowUp":
        if (ballLimits.top > stageLimits.top) y -= 10;
        break;
      case "ArrowRight":
        if (ballLimits.right < stageLimits.right) x += 10;
        break;
      case "ArrowDown":
        if (ballLimits.bottom < stageLimits.bottom) y += 10;
        break;
    }

    updateBallPosition();
  });

  // 🚀 MOVIMIENTO TÁCTIL FLUIDO
  $stage.addEventListener("touchstart", (e) => {
    const stageLimits = getStageLimits();
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    lastX = x; // Actualizamos la posición inicial
    lastY = y;
  });

  $stage.addEventListener("touchmove", (e) => {
    e.preventDefault(); // Evitar scroll en móviles
    const stageLimits = getStageLimits();
    const ballSize = $ball.offsetWidth;

    let touchEndX = e.touches[0].clientX;
    let touchEndY = e.touches[0].clientY;

    let deltaX = touchEndX - touchStartX;
    let deltaY = touchEndY - touchStartY;

    let newX = lastX + deltaX;
    let newY = lastY + deltaY;

    // 📌 RESTRICCIÓN DENTRO DEL `.stage`
    if (newX >= 0 && newX + ballSize <= stageLimits.width) {
      x = newX;
    }
    if (newY >= 0 && newY + ballSize <= stageLimits.height) {
      y = newY;
    }

    updateBallPosition();
  });

  window.addEventListener("resize", () => {
    lastX = 0;
    lastY = 0;
    x = 0;
    y = 0;
    updateBallPosition();
  });
}
