



const express = require('express')
const path = require('path')
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000
const admin = require('firebase-admin');

var txt = "tess";


// Fetch the service account key JSON file contents
var serviceAccount = require("./serviceacc.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testing-a2b4e.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();



var ref = db.ref("Text");

// Attach an asynchronous callback to read the data at our posts reference
ref.once("value", function(snapshot) {
  txt = snapshot.val();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});




express()
  .set('view engine', 'ejs')
  .get('/cool', (req, res) => res.send(cool()))
  .get('/', (req, res) => res.end(txt))
  .get('/set',(req, res) => {ref.set("def");res.end(txt)})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
