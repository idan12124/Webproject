const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const mysql = require('mysql')


app.listen('5000')

const db = mysql.createConnection({
    host:"freedb.tech",
    user:"freedbtech_testTew134",
    password:"idan.cohen12124@gmail.com",
    database:"freedbtech_Data"
})

db.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log('Db connect!')
    }
})

app.get('/Login', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(req.body.password, salt)
    
        res.json({'test':123})

    }catch{
        res.status(501).send()
    }
})