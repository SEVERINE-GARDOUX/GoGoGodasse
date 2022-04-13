const express = require('express')
const app = express()
const port = 3000

const admin = require("firebase-admin");

const serviceAccount = require("./fire.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.get('/', (req, res) => {
  res.send('Vive des vacances!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })