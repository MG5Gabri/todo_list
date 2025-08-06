import { tareas } from "../tareas/tareasComponent.js";
import { tareasDb } from "../../data/tareasDb.js";

function lgSection() {
    let section = document.createElement('section')
    section.className = "section"

      // Sección principal
    let seccion1 = document.createElement('div');
    seccion1.className = "seccion-1";


    // Contenedor para la información detallada de una tarea
    let seccionInformacion = document.createElement('div');
    seccionInformacion.className = "div-informacion";

    // Lista de tareas
    seccion1.appendChild(tareas(tareasDb, seccionInformacion));

    // Panel de información (vacio al inicio o con tareasDb[0])
    seccionInformacion.appendChild(document.createTextNode("Haz clic en una tarea para ver su descripción."));
    seccion1.appendChild(seccionInformacion);

    section.appendChild(seccion1)
    section.appendChild(seccionInformacion)
    
    return section
}

export { lgSection }