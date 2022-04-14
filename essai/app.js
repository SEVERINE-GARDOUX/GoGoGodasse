const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const { getFirestore } = require('firebase-admin/firestore');
const admin = require("firebase-admin");

const serviceAccount = require("./fire.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();
app.use(bodyParser.json())
app.use(cors())

async function add(collection, data) {
    const res = await db.collection(collection).add(data)
}

app.get('/', (req, res) => {
  res.send('Vive des vacances!')
})

app.post('/', (req, res) => {
  add('chaussures', req.body)
  res.send(req.body)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) 