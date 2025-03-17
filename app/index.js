import { App } from "./App.js";
import { moveBall, handleShortcuts } from "./components/teclado.js";

document.addEventListener("DOMContentLoaded", App);

document.addEventListener("keydown", (e) => {
  handleShortcuts(e);
  moveBall(e, ".ball", ".stage");
});
