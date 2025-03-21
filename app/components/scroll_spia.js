export default function scrollSpy() {
  const $sections = document.querySelectorAll("section[data-scroll-spy]");

  const options = {
    root: null, // null significa que observa el viewport
    threshold: 0.5, // Se activará cuando el 50% del elemento esté visible
    rootMarin: "-250px",
  };

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      console.log(`Sección: ${id}, visible: ${entry.isIntersecting}`);
      if (entry.isIntersecting) {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("is-active"); // Agrega una clase cuando es visible
      } else {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("is-active"); // La remueve cuando deja de ser visible
      }
    });
  };

  const observer = new IntersectionObserver(cb, options);
  $sections.forEach((section) => observer.observe(section));
}
