import { informacion } from "../informacion/informacionComponente.js";

export function tarea(tareaObj, seccionInformacion) {
  let divTarea = document.createElement('div');
  divTarea.className = "tarea";

  let num = document.createElement('div');
  num.textContent = `${tareaObj.indice}`;
  num.className = "numTarea"
  divTarea.appendChild(num);

  let titulo = document.createElement('div');
  titulo.textContent = tareaObj.titulo;
  titulo.className = "tituloTarea"
  divTarea.appendChild(titulo);

  let estado = document.createElement('div');
  estado.textContent = `${tareaObj.estado}`;
  estado.className = "estadoTarea"
  divTarea.appendChild(estado);

  let fechaAs = document.createElement('div');
  fechaAs.textContent = `${tareaObj.fechaAs}`;
  fechaAs.className = "fechaAsTarea"
  divTarea.appendChild(fechaAs);

  let fechaEn = document.createElement('div');
  fechaEn.textContent = `${tareaObj.fechaEn}`;
  fechaEn.className = "fechaEnTarea"
  divTarea.appendChild(fechaEn);


  let divIntegrantes = document.createElement('div');
  divIntegrantes.className = "integrantes";

  tareaObj.integrantes.forEach(icono => {
    let integrante = document.createElement('span');
    integrante.textContent = icono;
    divIntegrantes.appendChild(integrante);
  });

  divTarea.appendChild(divIntegrantes);

  let botonDescripcion = document.createElement('button');
  botonDescripcion.textContent = "Descripción";
  botonDescripcion.onclick = () => {
    seccionInformacion.innerHTML = '';
    seccionInformacion.appendChild(informacion(tareaObj));
  };
  divTarea.appendChild(botonDescripcion);

  return divTarea;
}
