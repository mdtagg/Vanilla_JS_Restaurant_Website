
import './styles.css'
import main from './mainSection'

const title = () => {
    const title = document.createElement('h1')
    title.setAttribute('id','title')
    title.textContent = 'The Pizza Palace'
    return title
}

const nav = () => {
    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    const navOptions = ['About', 'Menu', 'Contact']
    for(let i = 0;i < 3;i++) {
        let navElem = document.createElement('li')
        let navLink = document.createElement('a')
        navLink.textContent = navOptions[i]
        navLink.setAttribute('tabindex',[i + 1])
        navLink.addEventListener('keydown', changeTab)
        // navLink.classList.add('navLink')
        navElem.appendChild(navLink)
        navList.appendChild(navElem)
    }
    nav.appendChild(navList)
    return nav
}

let storeTab = ""
const changeTab = (e) => {
    let tab = ''
    const tabIndex = e.target.attributes.tabindex.value
    if(tabIndex === '1') {
        tab = 'about'
    }else if(tabIndex === '2') {
        tab = 'menu'
    }else {
        tab = 'contact'
    }
    storeTab = tab
    console.log(storeTab)
}

// const storeTab = (tab) => {
//     console.log(tab)
// }

const header = () => {
    const header = document.createElement('header')
    header.appendChild(title())
    header.appendChild(nav())
    return header
}

export { header, storeTab }
