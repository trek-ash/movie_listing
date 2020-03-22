const express = require('express');
const app = express()
const port = 8000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const items = require('./routes/api/items')
const users = require('./routes/api/users')
require("dotenv").config();

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

app.use('/', items) 
app.use('/', users) 
app.listen(port, ()=>{
    console.log("server running..")
})