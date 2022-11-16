import './styles.css';
import image from './pizza-slice.png';

const about = () => {
    const about = document.createElement('div')
    about.classList.add('panel')
    about.setAttribute('id','about')

    const myImage = new Image()
    myImage.id = 'pizzaSlice'
    myImage.src = image
    about.appendChild(myImage)

    const aboutUs = document.createElement('p')
    aboutUs.textContent = 'Serving a most excellent slice'

    const hours = document.createElement('p')
    hours.textContent = 'Hours: Mon-Fri 11-10am,\n Sat-Sun 10-12am'

    const orderNow = document.createElement('button')
    orderNow.textContent = 'Order Now'
    orderNow.id = 'orderNow'

    about.appendChild(aboutUs)
    about.appendChild(hours)
    about.appendChild(orderNow)

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

    const contactUs = document.createElement('p')
    contactUs.textContent = 'Contact Us'

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '555-555-5555'

    const address = document.createElement('p')
    address.textContent = '2900 Bedford Ave, Brooklyn, NY 11210'

    const location = document.createElement('iframe')
    location.setAttribute('src', `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96866.17426774463!2d-74.00851383317776!3d40.65043261285484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0e68bf8bc1%3A0x487ac68137fac784!2sBrooklyn%20College!5e0!3m2!1sen!2sus!4v1668619665504!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`)
    
    contact.appendChild(contactUs)
    contact.appendChild(address)
    contact.appendChild(phoneNumber)
    contact.appendChild(location)
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