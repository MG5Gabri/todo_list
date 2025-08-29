function lgHeader() {
    let header = document.createElement('header')
    header.className = "header"

    let h1 = document.createElement('h1')
    h1.innerText = "Todo_list"
    h1.className = "tEmpresa"
    header.appendChild(h1)
    
    let divContador = document.createElement('div')
    divContador.className = "divContadorH"
    header.appendChild(divContador)

    let descContador = document.createElement('div')
    descContador.className = "descContadorH"
    descContador.innerText = "Productos"
    divContador.appendChild(descContador)

    let numContador = document.createElement('div')
    numContador.className = "numContadorH"
    divContador.appendChild(numContador)

    // Hacemos fetch para  la cantidad real de tareas
    fetch("https://backend-todo-list-2-mzxe.onrender.com/tareas")
        .then(res => res.json())
        .then(tareas => {
            numContador.innerText = tareas.length; 
        })
        .catch(err => {
            console.error("Error al obtener tareas:", err);
        });

    let divPerfil = document.createElement('div')
    divPerfil.className = "divPerfil"
    header.appendChild(divPerfil)
    
    let imgPerfil = document.createElement('img')
    imgPerfil.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAk62mwmUPBppveaHsHlVpIQMTegKOfOJZQ&s"
    divPerfil.appendChild(imgPerfil)

    return header
}

export {lgHeader}
