var http = require('http');
var url = require('url');

var txt = "tess";
var admin = require('firebase-admin');

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


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  //ref.set("def");



  res.end(txt);
}).listen(8080);
