import { header } from './header'
import { main } from './mainSection'

const content = document.getElementById('content')

content.appendChild(header())
content.appendChild(main())


