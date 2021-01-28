const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const authRoute = require('./routes/auth.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const updateRoute = require('./routes/updateProfile')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/update", updateRoute)
app.use("/api/users", authRoute)
app.listen('5001')

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true} ,
    () => console.log("DB Connected!"))
