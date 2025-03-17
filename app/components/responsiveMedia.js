// responsiveMedia.js
export function responsiveMedia(id, mediaQuery, mobileContent, desktopContent) {
  const element = document.getElementById(id);

  if (!element) {
    console.error(`Elemento con id "${id}" no encontrado.`);
    return;
  }

  const updateContent = () => {
    if (
      typeof mobileContent !== "string" ||
      typeof desktopContent !== "string"
    ) {
      console.error("El contenido para móviles o escritorio no es válido.");
      return;
    }

    if (window.matchMedia(mediaQuery).matches) {
      element.innerHTML = desktopContent;
    } else {
      element.innerHTML = mobileContent;
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  updateContent();
  const debouncedUpdate = debounce(updateContent, 100);
  window.addEventListener("resize", debouncedUpdate);

  return () => {
    window.removeEventListener("resize", debouncedUpdate);
  };
}
