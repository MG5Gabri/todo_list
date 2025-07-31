import { lgHeader } from "../components/header/headerComponent.js";

let DOM = document.querySelector("#root")

function cargarDashboard(DOM) {

    DOM.appendChild(lgHeader());

    return DOM
}

cargarDashboard(DOM)
