import './styles.css'
// import { storeTab } from './header'

const about = () => {
    const about = document.createElement('pre')
    const aboutText = 'We are the best pizza, \n no pizza is better than our pizza'
    about.classList.add('panel')
    about.setAttribute('id','about')
    about.textContent = aboutText
    return about
}

const menu = () => {
    const menu = document.createElement('div')
    menu.classList.add('panel')
    menu.setAttribute('id', 'menu')
    menu.textContent = 'menu test'
    return menu
}

const contact = () => {
    const contact = document.createElement('div')
    contact.classList.add('panel')
    contact.setAttribute('id', 'contact')
    contact.textContent = 'contact test'
    return contact
}

const createMain = (tab) => {
    const main = document.createElement('main')
    main.setAttribute('id', 'mainNode')
    const mainNode = document.getElementById('mainNode')
    if(tab === "about") {
        mainNode.removeChild(mainNode.firstChild)
        mainNode.appendChild(about())
    }else if(tab === "menu") {
        mainNode.removeChild(mainNode.firstChild)
        mainNode.appendChild(menu())
    }else if(tab === "contact") {
        mainNode.removeChild(mainNode.firstChild)
        mainNode.appendChild(contact())
    }else {
        main.appendChild(about())
    }
    return main
}



export { createMain, about, menu, contact }