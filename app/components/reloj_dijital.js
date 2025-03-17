import { areStrings } from "../helpers/utils.js";

const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  const $clock = d.querySelector(clock);
  const $btnPlay = d.querySelector(btnPlay);

  // Verificar elementos en el DOM
  try {
    areStrings(clock, btnPlay, btnStop);
  } catch (err) {
    console.log(err.message);
    return;
  }

  d.addEventListener("click", (e) => {
    $clock.innerHTML = "";
    // Iniciar reloj
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        const hora = new Date().toLocaleTimeString();

        $clock.innerHTML = `<h3>${hora}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    // Detener reloj
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      $clock.innerHTML = "<h3>00:00:00</h3>";
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarma(sound, btnPlay, btnStop) {
  try {
    // Validamos que 'sound' sea un string, pero NO un selector
    if (typeof sound !== "string") {
      throw new Error(
        `Error: El valor "${sound}" (${typeof sound}) no es un string.`
      );
    }
    areStrings(btnPlay, btnStop);
  } catch (error) {
    console.log(error.message);
    return;
  }
  let alarmaTempo;

  const alarmSound = document.createElement("audio");
  alarmSound.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmaTempo = setTimeout(() => {
        // Reproducir en bucle
        alarmSound.loop = true;
        alarmSound.play();
      }, 2000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmaTempo); // Limpiar el timeout correcto
      alarmSound.pause();
      alarmSound.currentTime = 0; // Reiniciar el audio
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
