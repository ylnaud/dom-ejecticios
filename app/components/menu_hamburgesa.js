// MenuHamburguesa.js
import { areStrings, getElement, addDelegateEvent } from "../helpers/utils.js";

export function MenuHamburguesa(panelBtn, panel, menuLink) {
  // Validar que los parámetros sean strings
  if (!areStrings(panelBtn, panel, menuLink)) {
    console.log("Todos los parámetros deben ser strings.");
    return;
  }

  const button = getElement(panelBtn);
  const panelElement = getElement(panel);

  if (!button || !panelElement) {
    return; // Si no se encuentran los elementos, detener la ejecución
  }

  const toggleMenu = () => {
    button.classList.toggle("is-active");
    panelElement.classList.toggle("is-active");
  };

  const closeMenu = () => {
    button.classList.remove("is-active");
    panelElement.classList.remove("is-active");
  };
  // Evento para abrir/cerrar el menú
  addDelegateEvent("click", panelBtn, toggleMenu);

  // Evento para cerrar el menú al hacer clic en un enlace
  addDelegateEvent("click", menuLink, closeMenu);
}
