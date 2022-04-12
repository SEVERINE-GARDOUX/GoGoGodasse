export function getDom (selector) {
    return document.querySelector(selector)
}

export function displayHtml (selector, html) {
    getDom(selector).innerHtml = html
}

export function displayHtmlendStyle (selector, html, style) {
    displayHtml(selecto, html)
    getDom(selector).style.color = style.color
    getDom(selector).style.fontSize = style.fontSize
}
