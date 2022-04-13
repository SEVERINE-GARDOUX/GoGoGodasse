const express = require('express')
const app = express()
const port = 3000
const { getFirestore } = require('firebase-admin/firestore');
const admin = require("firebase-admin");

const serviceAccount = require("./fire.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

async function add(collection, data) {
    const res = await db.collection(collection).add(data)
}
add ('chaussures', {
        brend: 'Adidas',
        price: '50€'
}) 

app.get('/', (req, res) => {
  res.send('Vive des vacances!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })