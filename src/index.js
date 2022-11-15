import { header } from './header'
import { main } from './mainSection'
import { footer } from './footer'

const content = document.getElementById('content')

content.appendChild(header())
content.appendChild(main())
content.appendChild(footer())


