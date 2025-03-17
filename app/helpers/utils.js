// utils.js

/**
 * Valida que todos los parámetros sean strings y que existan en el DOM.
 * Lanza un error si algún parámetro no es un string o no existe en el DOM.
 * @param {...any} params - Parámetros a validar.
 * @returns {boolean} - True si todos son strings y existen en el DOM.
 * @throws {Error} - Si algún parámetro no es un string o no existe en el DOM.
 */
export const areStrings = (...params) => {
  for (const param of params) {
    if (typeof param !== "string") {
      throw new Error(
        `Error: El valor "${param}" (${typeof param}) no es un string.`
      );
    }
    if (!document.querySelector(param)) {
      throw new Error(
        `Error: No se encontró ningún elemento en el DOM con el selector "${param}".`
      );
    }
  }
  return true;
};
/**
 * 
/**
 * Verifica si un elemento existe en el DOM.
 * @param {string} selector - Selector del elemento.
 * @returns {Element|null} - El elemento si existe, null en caso contrario.
 */

export const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
    console.error(`Elemento no encontrado: ${selector}`);
  }
  return element;
};

export const getElement_Id = (selector) => {
  const element = document.getElementById(selector);
  if (!element) {
    console.error(`Elemento no encontrado: ${selector}`);
  }
  return element;
};

/**
 * Agrega un evento delegado al documento.
 * @param {string} targetSelector - Selector del objetivo del evento.
 * @param {Function} callback - Función a ejecutar cuando ocurre el evento.
 */
export const addDelegateEvent = (event, targetSelector, callback) => {
  document.addEventListener(`${event}`, (e) => {
    if (e.target.matches(targetSelector) || e.target.closest(targetSelector)) {
      callback(e);
    }
  });
};

/**
 * Obtiene un elemento del DOM por su ID.
 * @param {string} id - ID del elemento.
 * @returns {Element|null} - El elemento si existe, null en caso contrario.
 */
export const getElementById = (id) => {
  const element = document.getElementById(id);
  if (!element) {
    console.error(`Elemento no encontrado con ID: ${id}`);
  }
  return element;
};

/**
 * Agrega un evento a un elemento.
 * @param {Element} element - Elemento al que se agregará el evento.
 * @param {string} eventType - Tipo de evento (ej: "click","etc").
 * @param {Function} callback - Función a ejecutar cuando ocurre el evento.
 */
export const addEvent = (element, eventType, callback) => {
  if (element && callback) {
    element.addEventListener(eventType, callback);
  }
};
/**
 * * @param {Function} callback - Función validar si es string.
 */
export const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};
