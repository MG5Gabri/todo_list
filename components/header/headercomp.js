
export function header(){
    
    let header = document.createElement('header')
    
    let h1 = document.createElement('h1')
    h1.innerHTML = "Todo-List"
    header.appendChild(h1)

    let divTareas = document.createElement('div')
    divTareas.className = "divTareasHeader"
    header.appendChild(divTareas)

    let divLogoUser = document.createElement('div')
    divLogoUser.className = "divLogoHeader"
    header.appendChild(divLogoUser)

    let img = document.createElement('img');
    img.src = "../assets/user-icon.png"; 
    img.alt = "Usuario";
    img.className = "userLogo";
    divLogoUser.appendChild(img);

    return header
}