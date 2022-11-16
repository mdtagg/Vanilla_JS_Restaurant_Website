import './styles.css'
// import { storeTab } from './header'

const about = () => {
    const about = document.createElement('pre')
    const aboutText = 'We are the best pizza, \n no pizza is better than our pizza'
    about.classList.add('about')
    about.textContent = aboutText
    return about
}

const menu = () => {

}

const contact = () => {
    
}

const createMain = (tab) => {
    
    const main = document.createElement('main')
    if(tab === "" || tab === "about") {
        main.appendChild(about())
    }else if(tab === "menu") {
        // main.removeChild(about)
        console.log('menu test')
    }else if(tab === "contact") {
        console.log('contact test')
    }else {
        main.appendChild(about())
    }
    return main
}



export { createMain }