import { header } from './header'
import { createMain } from './mainSection'
import { footer } from './footer'

const content = document.getElementById('content')

content.appendChild(header())
content.appendChild(createMain())
content.appendChild(footer())


