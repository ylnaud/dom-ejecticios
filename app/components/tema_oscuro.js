import { getElement } from "../helpers/utils.js";

/**
 * Función para alternar entre modo oscuro y claro usando el atributo data-dark.
 * @param {string} btn - Selector del botón que activa el modo oscuro.
 * @param {string} attrDark - Nombre del atributo personalizado (en este caso, "data-dark").
 */
export default function DarkModel(btn, attrDark) {
  const $btn = getElement(btn);
  const $body = document.body;
  const sone = "/app/assets/gafas.svg"; // Ícono para modo claro
  const moon = "/app/assets/luna.svg"; // Ícono para modo oscuro

  // Verificar si el sistema prefiere el modo oscuro
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Aplicar el modo oscuro si el sistema lo prefiere
  if (systemPrefersDark) {
    $body.setAttribute(attrDark, "true");
    $btn.innerHTML = `<img src="${moon}" alt="Modo Oscuro" />`; // Mostrar luna
  } else {
    $btn.innerHTML = `<img src="${sone}" alt="Modo Claro" />`; // Mostrar gafas
  }

  // Alternar el modo oscuro al hacer clic en el botón
  $btn.addEventListener("click", () => {
    const isDark = $body.getAttribute(attrDark) === "true";
    $body.setAttribute(attrDark, !isDark);

    // Cambiar el ícono del botón
    if ($body.getAttribute(attrDark) === "true") {
      $btn.innerHTML = `<img src="${moon}" alt="Modo Oscuro" />`; // Mostrar luna
    } else {
      $btn.innerHTML = `<img src="${sone}" alt="Modo Claro" />`; // Mostrar gafas
    }

    // Guardar la preferencia en localStorage
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });

  // Verificar la preferencia guardada en localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    $body.setAttribute(attrDark, "true");
    $btn.innerHTML = `<img src="${moon}" alt="Modo Oscuro" />`; // Mostrar luna
  } else if (savedTheme === "light") {
    $body.setAttribute(attrDark, "false");
    $btn.innerHTML = `<img src="${sone}" alt="Modo Claro" />`; // Mostrar gafas
  }
}
