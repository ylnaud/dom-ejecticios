import { MenuHamburguesa } from "./components/menu_hamburgesa.js";

import { alarma, digitalClock } from "./components/reloj_dijital.js";
import { setupResponsiveMedia } from "./components/setupResponsiveMedia.js";
import { isMobileDevice } from "./helpers/utils.js";

export function App() {
  MenuHamburguesa(".hamburger", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma("app/assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  setupResponsiveMedia();
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
