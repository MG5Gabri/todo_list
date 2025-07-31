function lgFooter() {
    let footer = document.createElement('footer')
    footer.className = "header"

    let pfooter = document.createElement('h2')
    pfooter.innerText = "@github"
    pfooter.className = "footerRepo"
    footer.appendChild(pfooter)
    
    return footer
}

export {lgFooter}