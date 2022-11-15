import './styles.css'


const footer = () => {
    const footer = document.createElement('footer')
    const gitHubLink = document.createElement('a')
    gitHubLink.setAttribute('href', 'https://github.com/mdtagg')
    gitHubLink.setAttribute('tabindex', '3')
    gitHubLink.textContent = 'created by Michael Tagg'
    footer.appendChild(gitHubLink)
    return footer
}

export { footer }