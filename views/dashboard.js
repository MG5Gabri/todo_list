import { header } from "../components/header/headercomp.js";

let DOM = document.querySelector("#rootDashboard")

export function dashboard(DOM){
    
    let section = document.createElement('section')
    section.appendChild(header())

    DOM.appendChild(section)

    return DOM
}

dashboard(DOM)
