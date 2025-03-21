import { scrollBtnTop } from "./components/boton_scroll.js";
import { birthdayCountdown } from "./components/cuenta_regresiva.js";
import userDeviceInfo from "./components/deteccion_dispositivos.js";
import { LazyYouTubeVideo } from "./components/iframe.js";

import { MenuHamburguesa } from "./components/menu_hamburgesa.js";

import { alarma, digitalClock } from "./components/reloj_dijital.js";
import scrollSpy from "./components/scroll_spia.js";
import { setupResponsiveMedia } from "./components/setupResponsiveMedia.js";
import DarkModel from "./components/tema_oscuro.js";
import { isMobileDevice } from "./helpers/utils.js";

export function App() {
  MenuHamburguesa(".hamburger", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma("app/assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  setupResponsiveMedia();
  // Ejemplo de uso
  // Llamada a la función con el formato correcto de fecha

  birthdayCountdown("miguel", "07-05", "🎉 ¡Feliz Cumpleaños Hijo mio! 🎂🎊");
  birthdayCountdown("duanly", "07-28", "🎉 ¡Feliz Cumpleaños Duanly! 🎂🎊");
  scrollBtnTop("scroll");
  DarkModel(".dark-theme-btn", "data-dark");

  // Crear un contenedor en tu HTML
  const containerId = ".youtube-video-container";
  const videoId = "6IwUl-4pAzc"; // Reemplaza con el ID de tu video de YouTube
  const autoplay = false; // Cambia a false si no quieres autoplay

  LazyYouTubeVideo(containerId, videoId, false);
  userDeviceInfo("user-device");
  scrollSpy();
}

// Cargar imagen según la conexión y el dispositivo
const imgElement = document.getElementById("responsive-image");
const $title = document.getElementById("optimizacion");

function init() {
  if (!imgElement || !$title) {
    console.error(
      'Elementos "responsive-image" u "optimizacion" no encontrados en el DOM.'
    );
    return; // Detener la ejecución si no se encuentran los elementos
  }
}
init();

if (isMobileDevice()) {
  imgElement.src = "app/assets/foto.webp";
  imgElement.alt = "Imagen optimizada para móvil y conexión lenta";
  $title.innerHTML = "<h2>Optimización Móvil con Vanilla JS</h2>";
} else {
  imgElement.src = "app/assets/foto.jpg";
  imgElement.alt = "Imagen de alta calidad";
  $title.innerHTML = "<h2>Imagen PC o Tablet con Vanilla JS</h2>";
}
