export function getDom (selector) {
    return document.querySelector(selector)
}

export function displayHtml (selector, html) {
    getDom(selector).innerHtml = html
}

export function displayHtmlendStyle (selector, html, style) {
    displayHtml(selector, html)
    getDom(selector).style.color = style.color
    getDom(selector).style.fontSize = style.fontSize
}

// on peut aussi faire avec une class (ex:name) 
// lier sa feuille style css a son template
// remplir le style qu on souhaite dans le css
// Mais c'est mieux de modifier le style en css 