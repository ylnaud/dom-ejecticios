// mediaConfig.js
export const mediaConfig = [
  {
    id: "youtube",
    mediaQuery: "(min-width: 768px)",
    mobileContent: `<a href="https://youtu.be/6IwUl-4pAzc?si=mw-0b_owvw0Mzs24" target="_blank" rel="noopener">Ver Video</a>`,
    desktopContent: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=GfK7SEDTz38fPm1x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "gmaps",
    mediaQuery: "(min-width: 768px)",
    mobileContent: `<a href="https://maps.app.goo.gl/dhRy8ovMy1dB7skDA" target="_blank" rel="noopener">Ver Mapa</a>`,
    desktopContent: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28143.537058546746!2d-15.466926097869878!3d28.148249777411966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4095388049acc7%3A0xde81b5fd95e0b033!2sLa%20Puntilla%20(Playa%20de%20Las%20Canteras)!5e0!3m2!1ses!2ses!4v1741837717325!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
];
