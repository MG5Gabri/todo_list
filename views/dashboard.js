import { lgFooter } from "../components/footer/footerComponent.js";
import { lgHeader } from "../components/header/headerComponent.js";
import { lgSection } from "../components/section/section.js";

let DOM = document.querySelector("#root")

async function cargarDashboard(DOM) {
    DOM.appendChild(lgHeader());
    
    // 👇 Esperar a que se resuelva la Promesa
    const section = await lgSection();
    DOM.appendChild(section);

    DOM.appendChild(lgFooter());
    return DOM;
}

cargarDashboard(DOM);

