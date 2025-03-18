// utils.js

/**
 * Valida que todos los parámetros sean strings y que existan en el DOM.
 * Lanza un error si algún parámetro no es un string o no existe en el DOM.
 * @param {...string} params - Parámetros a validar.
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
    if (!document.querySelector(param) && !document.getElementById(param)) {
      throw new Error(
        `Error: No se encontró ningún elemento en el DOM con el selector "${param}".`
      );
    }
  }
  return true;
};

/**
 * Obtiene un elemento del DOM usando un selector.
 * @param {string} selector - Selector del elemento.
 * @returns {Element|null} - El elemento si existe, null en caso contrario.
 */
export const getElement = (selector) => {
  if (typeof selector !== "string") {
    console.error(`El selector debe ser una cadena de texto.`);
    return null;
  }
  const element = document.querySelector(selector);
  if (!element) {
    console.error(`Elemento no encontrado: ${selector}`);
  }
  return element;
};

/**
 * Obtiene un elemento del DOM usando su ID.
 * @param {string} id - ID del elemento.
 * @returns {Element|null} - El elemento si existe, null en caso contrario.
 */
export const getElementById = (id) => {
  if (typeof id !== "string") {
    console.error(`El ID debe ser una cadena de texto.`);
    return null;
  }
  const element = document.getElementById(id);
  if (!element) {
    console.error(`Elemento no encontrado en el Dom: ${id}`);
  }
  return element;
};

/**
 * Agrega un evento delegado al documento.
 * @param {string} event - Tipo de evento (ej: "click", "change", etc.).
 * @param {string} targetSelector - Selector del objetivo del evento.
 * @param {Function} callback - Función a ejecutar cuando ocurre el evento.
 */
export const addDelegateEvent = (event, targetSelector, callback) => {
  if (typeof event !== "string" || typeof targetSelector !== "string") {
    console.error(
      "El tipo de evento y el selector deben ser cadenas de texto."
    );
    return;
  }
  if (typeof callback !== "function") {
    console.error("El callback debe ser una función.");
    return;
  }
  document.addEventListener(event, (e) => {
    if (e.target.matches(targetSelector) || e.target.closest(targetSelector)) {
      callback(e);
    }
  });
};

/**
 * Agrega un evento a un elemento.
 * @param {Element} element - Elemento al que se agregará el evento.
 * @param {string} eventType - Tipo de evento (ej: "click", "change", etc.).
 * @param {Function} callback - Función a ejecutar cuando ocurre el evento.
 */
export const addEvent = (element, eventType, callback) => {
  if (!element || !(element instanceof Element)) {
    console.error("El elemento proporcionado no es válido.");
    return;
  }
  if (typeof eventType !== "string") {
    console.error("El tipo de evento debe ser una cadena de texto.");
    return;
  }
  if (typeof callback !== "function") {
    console.error("El callback debe ser una función.");
    return;
  }
  element.addEventListener(eventType, callback);
};

/**
 * Verifica si el dispositivo es móvil.
 * @returns {boolean} - True si es un dispositivo móvil, false en caso contrario.
 */
export const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};
