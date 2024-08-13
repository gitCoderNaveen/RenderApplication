const express = require('express')
const datas = require('./Route/data')
const mongoose = require('mongoose')
const dataModel = require('./Model/data-model')
const cors = require('cors')

const app = express()

app.use(cors())

mongoose.connect('mongodb+srv://naveenbscmca1518:zlTWvCrHrooGlLov@newcluster.8zvx9.mongodb.net/ProductDirectory?retryWrites=true&w=majority&appName=NewCluster')

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB successfully connectd')
})

app.use('/datas',datas)

app.listen(7001, ()=>{
    console.log('sever is running on port 7001')
})
