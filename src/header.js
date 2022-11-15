
import './styles.css'

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
        navElem.appendChild(navLink)
        navList.appendChild(navElem)
    }
    nav.appendChild(navList)
    return nav
}

const header = () => {
    const header = document.createElement('header')
    header.appendChild(title())
    header.appendChild(nav())
    return header
}

export { header }
