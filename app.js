const express = require("express");
const app = express();
const movie_router = require('./routes/users')

//TODO: Create your GET Request Route Below: 



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/movies',movie_router)

module.exports = app