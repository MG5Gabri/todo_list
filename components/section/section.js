import { section1 } from "./section1Component.js"
import { section2 } from "./section2Component.js"

function lgSection() {
    let section = document.createElement('section')
    section.className = "section"

    section.appendChild(section1())
    section.appendChild(section2())
    
    return section
}

export { lgSection }