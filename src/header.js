
import './styles.css'

const title = () => {

    const title = document.createElement('div')
    title.setAttribute('id','title')
    title.textContent = 'Pizza Place'
    return title
}

const nav = () => {
    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    for(let i = 0;i < 3;i++) {
        let navElem = document.createElement('li')
        let navLink = document.createElement('a')
        navLink.textContent = 'test'
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
