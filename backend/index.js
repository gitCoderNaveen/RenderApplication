const express = require('express')
const datas = require('./Route/data')
const mongoose = require('mongoose')
const dataModel = require('./Model/data-model')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'https://66bb1299be029ad2babee232--stately-druid-e94352.netlify.app', // Allow requests from this origin https://66bb1299be029ad2babee232--stately-druid-e94352.netlify.app/
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

// const uri = 'mongodb+srv://naveenbscmca1518:zlTWvCrHrooGlLov@newcluster.8zvx9.mongodb.net/ProductDirectory?retryWrites=true&w=majority&appName=NewCluster';
mongoose.connect('mongodb+srv://naveenbscmca1518:user123@mernapi.exvm5.mongodb.net/ProductDirectory?retryWrites=true&w=majority&appName=MernApi')

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB successfully connectd')
})

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

app.use('/datas',datas)

app.listen(7001, ()=>{
    console.log('sever is running on port 7001')
})
