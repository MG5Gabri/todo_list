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
    numContador.innerText = "5"
    divContador.appendChild(numContador)

    let divPerfil = document.createElement('div')
    divPerfil.className = "divPerfil"
    header.appendChild(divPerfil)
    
    let imgPerfil = document.createElement('img')
    imgPerfil.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAk62mwmUPBppveaHsHlVpIQMTegKOfOJZQ&s"
    divPerfil.appendChild(imgPerfil)

    return header
}

export {lgHeader}