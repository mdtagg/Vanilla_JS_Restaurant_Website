import './styles.css'
import { storeTab } from './header'

const about = () => {
    const about = document.createElement('pre')
    const aboutText = 'We are the best pizza, \n no pizza is better than our pizza'
    about.classList.add('about')
    about.textContent = aboutText
    return about
}

const main = () => {
    
    const main = document.createElement('main')
    if(storeTab === "" || storeTab === "about") {
        main.appendChild(about())
    }else if(storeTab === "menu") {
        // main.removeChild(about)
        console.log('menu test')
    }else if(storeTab === "contact") {
        console.log('contact test')
    }
    return main
}



export { main }