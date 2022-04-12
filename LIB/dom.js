export function getDom (selector) {
    return document.querySelector(selector)
}

export function displayHtml (selector, html) {
    getDom(selector).innerHtml = html
}