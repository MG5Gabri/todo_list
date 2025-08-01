import { lgFooter } from "../components/footer/footerComponent.js";
import { lgHeader } from "../components/header/headerComponent.js";
import { lgSection } from "../components/section/section.js";

let DOM = document.querySelector("#root")

function cargarDashboard(DOM) {

    DOM.appendChild(lgHeader());
    DOM.appendChild(lgSection())
    DOM.appendChild(lgFooter())

    return DOM
}

cargarDashboard(DOM)
