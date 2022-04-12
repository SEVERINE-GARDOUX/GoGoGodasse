// alert()

import {notEmpty} from './validateur.js'

const validation = notEmpty()
console.log(validation)


import {displayHtml} from './dom.js'

displayHtml('h1', 'voici ma 1ere lib')

import { displayHtmlAndStyle } from './dom.js'

displayHtmlAndStyle('h1', 'voici ma 1ere lib', {
    color: 'green', 
    fontSize: '35px'
})