import { getElementById } from "../helpers/utils.js";

const d = document;
const w = window;

/**
 * Función para mostrar u ocultar un botón que permite hacer scroll al inicio de la página.
 * @param {string} btn - ID del botón.
 */
export const scrollBtnTop = (btn) => {
  // Obtener el botón del DOM
  const $btnTop = getElementById(btn);
  if (!$btnTop) {
    console.error(`No se encontró el botón con id: ${btn}`);
    return;
  }

  // Mostrar u ocultar el botón según la posición del scroll
  w.addEventListener("scroll", () => {
    const scrollTop =
      w.scrollY || d.documentElement.scrollTop || d.body.scrollTop;

    if (scrollTop > 600) {
      $btnTop.classList.remove("hidden");
    } else {
      $btnTop.classList.add("hidden");
    }
  });

  // Hacer scroll suave al hacer clic en el botón
  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${btn}`)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
};
