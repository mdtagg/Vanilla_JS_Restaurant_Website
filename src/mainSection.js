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
    const menuOptions = ['Pizzas', 'Small', 'Medium', 'Large']

    const menuItems = [
        createMenuItem('Pepperoni', 14, 17, 20),
        createMenuItem('Cheese', 10,15,18),
        createMenuItem('Meat-Lovers',16,20,22),
        createMenuItem('Hawaiian',15,18,20),
        createMenuItem('White', 12,15,18)
    ]

    const totalMenu = menuOptions.concat(menuItems).flat()
    
    for(let i = 0;i < totalMenu.length;i++) {
        const menuItem = document.createElement('div')
        menuItem.setAttribute('id', `menuItem${i}`)
        menuItem.textContent = totalMenu[i]
        menu.appendChild(menuItem)
    }
    
    return menu
}

const createMenuItem = (item,small,medium,large) => {
    const menuItem = item
    const smallPrice = `$${small.toString()}`
    const mediumPrice = `$${medium.toString()}`
    const largePrice = `$${large.toString()}`
    return [menuItem,smallPrice,mediumPrice,largePrice]
    
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