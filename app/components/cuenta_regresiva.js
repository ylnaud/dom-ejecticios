import { areStrings, getElementById } from "../helpers/utils.js";

/**
 * Función para crear un contador regresivo hasta el cumpleaños.
 * @param {string} id - ID del elemento donde se mostrará el contador.
 * @param {string} birthDate - Fecha de nacimiento en formato "MM-DD".
 * @param {string} finalMsg - Mensaje final cuando sea el cumpleaños.
 */
export function birthdayCountdown(id, birthDate, finalMsg) {
  if (!areStrings(id)) {
    console.error("Todos los parámetros deben ser cadenas de texto.");
    return;
  }

  const $countdown = getElementById(id);
  if (!$countdown) {
    console.error(`No se encontró el elemento con id: ${id}`);
    return;
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  let targetDate = new Date(`${currentYear}-${birthDate} 00:00:00`);

  // Si la fecha ya pasó este año, usar el siguiente año
  if (targetDate < now) {
    targetDate = new Date(`${currentYear + 1}-${birthDate} 00:00:00`);
  }

  const countdownTempo = setInterval(() => {
    const now = new Date();
    const timeDiff = targetDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<p>${finalMsg}</p>`;
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    $countdown.innerHTML = `<p>Faltan ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos para tu cumpleaños.<p/>`;
  }, 1000);
}
