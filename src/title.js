
import './styles.css'
import pizza from './pizza.png'

const titleComp = () => {

    const title = document.createElement('div')
    const myPizzaImage = new Image()
    myPizzaImage.src = pizza
    title.textContent = 'test'

    title.appendChild(myPizzaImage)
    return title
}

export { titleComp }
// document.body.appendChild(component())
