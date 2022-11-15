
import './styles.css'
import main from './mainSection'

const title = () => {
    const title = document.createElement('h1')
    title.setAttribute('id','title')
    title.textContent = 'The Pizza Palace'
    return title
}

let storeTab = ""

const nav = () => {
    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    const navOptions = ['About', 'Menu', 'Contact']
    
    for(let i = 0;i < 3;i++) {
        let navElem = document.createElement('li')
        let navLink = document.createElement('a')
        navLink.textContent = navOptions[i]
        navLink.setAttribute('tabindex',[i + 1])
        // navLink.addEventListener('keydown', changeTab)
        navLink.addEventListener('keydown', main)
        navElem.appendChild(navLink)
        navList.appendChild(navElem)
        // addEvent(navLink,'onfocus',changeTab)
    }
    nav.appendChild(navList)
    return nav
    }
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
    // console.log(storeTab)
}

const header = () => {
    const header = document.createElement('header')
    header.appendChild(title())
    header.appendChild(nav())
    return header
}

export { header, storeTab, nav}
