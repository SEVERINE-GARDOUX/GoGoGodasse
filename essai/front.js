const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const product = {
        name:input.value
    }
    addProduct(product)
})

function addProduct(product) {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify(product)

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}
