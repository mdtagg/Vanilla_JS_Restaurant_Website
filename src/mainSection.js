import './styles.css'

const about = () => {
    const about = document.createElement('pre')
    const aboutText = 'We are the best pizza, \n no pizza is better than our pizza'
    about.classList.add('about')
    about.textContent = aboutText
    return about
}

const main = () => {
    const main = document.createElement('main')
    main.appendChild(about())
    return main
}

export { main }