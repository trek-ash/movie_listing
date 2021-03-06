const express = require('express');
const app = express()
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const movies = require('./routes/api/movies')
const users = require('./routes/api/users')
const path = require("path")

require("dotenv").config();
// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, instancekey, email, Access-Control-Request-Headers, x-http-method-override");
  res.header("Access-Control-Max-Age", '1800');
  if (req.method === 'OPTIONS') {
      res.end();
  } else {
      res.msg = {}
      next();
  }
})
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// mongodb

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MONGODB_CONNECTED"))
  .catch(err => console.log(err));

mongoose.set("useFindAndModify", false);

app.use('/', movies) 
app.use('/', users) 
app.use(express.static(path.join(__dirname, "client", "build")))

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, ()=>{
    console.log("server running..")
})