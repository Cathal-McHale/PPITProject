const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');


app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// getting-started.js
//const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  //await mongoose.connect('mongodb+srv://g00402138:<ATU12345!!>@cathalmchale.cvr04oh.mongodb.net/');

  // use `await mongoose.connect('mongodb://g00402138:ATU12345@127.0.0.1:27017/test');` if your database has auth enabled
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})