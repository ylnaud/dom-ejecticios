export function LazyYouTubeVideo(containerSelector, videoId, autoplay = true) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    console.error(
      `El contenedor con selector "${containerSelector}" no existe.`
    );
    return;
  }

  // Configuración del Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadVideo();
        observer.unobserve(container); // Dejar de observar después de cargar
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(container);

  // Función para cargar el video
  function loadVideo() {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=${
      autoplay ? 1 : 0
    }`;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.tabIndex = -1; // Evitar que el iframe reciba enfoque automático

    // Limpiar el contenedor y agregar el iframe
    container.innerHTML = "";
    container.appendChild(iframe);
  }
}
