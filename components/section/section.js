import { tareas } from "../tareas/tareasComponent.js";

async function lgSection() {
  const section = document.createElement('section');
  section.className = "section";

  const seccion1 = document.createElement('div');
  seccion1.className = "seccion-1";

  // Panel de información inicial
  const seccionInformacion = document.createElement('div');
  seccionInformacion.className = "div-informacion";
  seccionInformacion.textContent = "Haz clic en una tarea para ver su descripción.";

  try {
    const resp = await fetch("https://backend-todo-list-2-mzxe.onrender.com/tareas");
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const datos = await resp.json();

    // Adaptar datos al formato que esperan tus componentes
    const tareasAdaptadas = datos.map(t => ({
      indice: t.id,
      titulo: t.titulo,
      descripcion: t.descripcion,
      estado: t.estado,
      fechaAs: t.fecha_asignacion,
      fechaEn: t.fecha_entrega,
      integrantes: typeof t.integrantes === "string"
        ? t.integrantes.split(",").map(i => i.trim())
        : []
    }));

    // Usar tu componente tareas()
    seccion1.appendChild(tareas(tareasAdaptadas, seccionInformacion));

  } catch (err) {
    console.error("Error cargando tareas:", err);
    const p = document.createElement('p');
    p.textContent = "No se pudieron cargar las tareas.";
    seccion1.appendChild(p);
  }

  seccion1.appendChild(seccionInformacion);

  section.appendChild(seccion1);
  section.appendChild(seccionInformacion)

  return section;
}

export { lgSection };
