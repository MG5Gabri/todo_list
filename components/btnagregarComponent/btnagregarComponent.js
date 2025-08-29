export function crearBotonAgregar() {
    let boton = document.createElement('button');
    boton.innerText = "Agregar Tarea";
    boton.className = "btnAgregar";

    let modal = document.createElement('div');
    modal.className = "modal oculto";

    let modalContent = document.createElement('div');
    modalContent.className = "modal-content";

    let titulo = document.createElement('h2');
    titulo.innerText = "Nueva Tarea";
    modalContent.appendChild(titulo);

    let inputTitulo = document.createElement('input');
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título de la tarea";
    modalContent.appendChild(inputTitulo);

    let inputFecha = document.createElement('input');
    inputFecha.type = "date";
    modalContent.appendChild(inputFecha);

    let inputIntegrantes = document.createElement('input');
    inputIntegrantes.type = "text";
    inputIntegrantes.placeholder = "Integrantes";
    modalContent.appendChild(inputIntegrantes);

    let cerrar = document.createElement('button');
    cerrar.innerText = "Cerrar";
    cerrar.className = "btnCerrar";
    modalContent.appendChild(cerrar);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    boton.onclick = () => {
        modal.classList.remove("oculto");
    };

    cerrar.onclick = () => {
        modal.classList.add("oculto");
    };

    return boton;
}
