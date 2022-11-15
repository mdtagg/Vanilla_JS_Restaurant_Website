import './styles.css'
import { storeTab } from './header'

// const getSection = (e) => {
//     console.log(e)
// }

// const getNavLinks = () => {
//     let navLinkTest = Array.from(document.querySelectorAll('.navLink'))
//     console.log(navLinkTest)
//     for(let i = 0;i < navLinkTest.length - 1;i++) {
//         navLinkTest[i].addEventListener('click', getSection)
//     }
//     console.log('test')
// }

// getNavLinks()

const about = () => {
    const about = document.createElement('pre')
    const aboutText = 'We are the best pizza, \n no pizza is better than our pizza'
    about.classList.add('about')
    about.textContent = aboutText
    return about
}

const main = () => {
    console.log(storeTab)
    const main = document.createElement('main')
    if(storeTab === "" || storeTab === "about") {
        main.appendChild(about())
    }else if(storeTab === "menu") {
        main.removeChild(about)
        console.log('menu test')
    }else if(storeTab === "contact") {
        console.log('contact test')
    }
    return main
}



export { main }