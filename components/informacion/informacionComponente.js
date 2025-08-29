export function informacion(tarea) {
    let div = document.createElement('div');
    div.className = "div-informacion";
  
    let estado = document.createElement('p');
    estado.textContent = `Estado: ${tarea.estado}`;
    div.appendChild(estado);
  
    let titulo = document.createElement('h3');
    titulo.textContent = tarea.titulo;
    div.appendChild(titulo);
  
    let descripcion = document.createElement('p');
    descripcion.textContent = tarea.descripcion;
    div.appendChild(descripcion);
  
    let integrantesLabel = document.createElement('p');
    integrantesLabel.textContent = "Integrantes:";
    div.appendChild(integrantesLabel);
  
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "integrantes-detalle";
    divIntegrantes.textContent = tarea.integrantes.join(", ");
    div.appendChild(divIntegrantes);
  
    return div;
  }
  