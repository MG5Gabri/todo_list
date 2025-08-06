import { tarea } from "../tarea/tareaComponent.js";

export function tareas(tareasDb, seccionInformacion) {
  let contenedor = document.createElement('div');
  contenedor.className = "tareas";

  tareasDb.forEach(t => {
    contenedor.appendChild(tarea(t, seccionInformacion));
  });

  return contenedor;
}