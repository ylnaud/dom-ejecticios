import { mediaConfig } from "../helpers/mediaConfig.js";
import { isMobileDevice } from "../helpers/utils.js";
import { responsiveMedia } from "./responsiveMedia.js";

// Función para configurar los medios responsivos
export function setupResponsiveMedia() {
  mediaConfig.forEach(({ id, mediaQuery, mobileContent, desktopContent }) => {
    responsiveMedia(id, mediaQuery, mobileContent, desktopContent);
  });
}

// Lógica principal
if (isMobileDevice()) {
  console.log("Dispositivo móvil detectado");
} else {
  console.log("Dispositivo no móvil detectado");
}

// Configurar los medios responsivos (común para ambos tipos de dispositivos)
