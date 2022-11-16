
import './styles.css'
import { createMain } from './mainSection'

const title = () => {
    const title = document.createElement('h1')
    title.setAttribute('id','title')
    title.textContent = 'The Pizza Palace'
    return title
}

// let storeTab = ""

const nav = () => {
    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    const navOptions = ['About', 'Menu', 'Contact']
    
    for(let i = 0;i < 3;i++) {
        let navElem = document.createElement('li')
        let navLink = document.createElement('a')
        navLink.textContent = navOptions[i]
        navLink.setAttribute('data-attribute', [i])
        navLink.addEventListener('click', changeTab)
        navElem.appendChild(navLink)
        navList.appendChild(navElem)
    }
    nav.appendChild(navList)
    return nav
}
const changeTab = (e) => {
    let tab = ''
    const tabIndex = e.target.dataset.attribute
    if(tabIndex === '0') {
        tab = 'about'
    }else if(tabIndex === '1') {
        tab = 'menu'
    }else {
        tab = 'contact'
    }
    createMain(tab)
    // console.log(storeTab)
}

const header = () => {
    const header = document.createElement('header')
    header.appendChild(title())
    header.appendChild(nav())
    return header
}

export { header, nav}
