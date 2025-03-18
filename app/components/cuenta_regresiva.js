import { areStrings, getElementById } from "../helpers/utils.js";

/**
 * Función para crear un contador regresivo.
 * @param {string} id - ID del elemento donde se mostrará el contador.
 * @param {string} limitDate - Fecha límite en formato válido para el constructor Date.
 * @param {string} finalMsg - Mensaje final cuando el contador llega a cero.
 */
export function countDown(id, limitDate, finalMsg) {
  // Validar que el id sea una cadena
  if (!areStrings(id)) {
    console.error("El parámetro 'id' debe ser una cadena de texto.");
    return;
  }

  // Obtener el elemento del DOM
  const $countdown = getElementById(id);
  if (!$countdown) {
    console.error(`No se encontró el elemento con id: ${id}`);
    return;
  }

  // Validar que la fecha límite sea válida
  const countdownDate = new Date(limitDate).getTime();
  if (isNaN(countdownDate)) {
    console.error("La fecha límite no es válida.");
    return;
  }

  // Función para formatear el tiempo restante
  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // Función para verificar si es tu cumpleaños
  const isBirthday = () => {
    const now = new Date();
    const targetDate = new Date(limitDate);

    // Comparar mes y día (ignorar el año)
    return (
      now.getMonth() === targetDate.getMonth() &&
      now.getDate() === targetDate.getDate()
    );
  };

  // Función para actualizar el contador
  const updateCountdown = () => {
    const now = new Date().getTime();
    const limitTime = countdownDate - now;

    // Verificar si es tu cumpleaños
    if (isBirthday()) {
      clearInterval(countdownTempo);
      $countdown.textContent = finalMsg;
      return;
    }

    // Si el tiempo ha terminado, detener el intervalo
    if (limitTime <= 0) {
      clearInterval(countdownTempo);
      $countdown.textContent = "El evento ha terminado.";
      return;
    }

    // Actualizar el contenido del elemento con el tiempo formateado
    $countdown.textContent = formatTime(limitTime);
  };

  // Actualizar el contador cada segundo
  const countdownTempo = setInterval(updateCountdown, 1000);

  // Ejecutar la primera actualización inmediatamente
  updateCountdown();
}
