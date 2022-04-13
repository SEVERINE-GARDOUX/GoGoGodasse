// alert()

import {notEmpty} from './validateur.js'
import {displayHtml} from './dom.js'
import { displayHtmlAndStyle } from './dom.js'

const validation = notEmpty(5)
console.log(validation)


displayHtml('h1', 'voici ma 1ere lib')


displayHtmlAndStyle('h1', 'voici ma 1ere lib', {
    color: 'green', 
    fontSize: '35px'
})