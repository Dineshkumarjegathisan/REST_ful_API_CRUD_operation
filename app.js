const express = require('express');
const connectDB = require('./server/DBConnect.js');
const DBconnect = require('./server/DBConnect.js')
const router = require('./routes/index.js')
const app = express();
app.use(express.json());

app.use('/v1',router)//middileware


const port = process.env.PORT;
connectDB();
app.listen(port,()=>{
    console.log(`App Running on ${port}`);
})
