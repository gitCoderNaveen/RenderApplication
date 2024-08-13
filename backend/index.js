const express = require('express')
const datas = require('./Route/data')
const mongoose = require('mongoose')
const dataModel = require('./Model/data-model')
const cors = require('cors')

const app = express()

app.use(cors());

// const uri = 'mongodb+srv://naveenbscmca1518:zlTWvCrHrooGlLov@newcluster.8zvx9.mongodb.net/ProductDirectory?retryWrites=true&w=majority&appName=NewCluster';
mongoose.connect('mongodb+srv://deployUser:Welcome123@newcluster.8zvx9.mongodb.net/ProductDirectory?retryWrites=true&w=majority&appName=NewCluster')

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
