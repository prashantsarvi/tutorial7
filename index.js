const express = require('express')
const app= express();
const http= require('http');
const port= process.env.PORT || 3000;
const mongoose   = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));
mongoose.connect(process.env.mongo, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
  }, (err) => {
	if (err) console.log(err);
});

const userRoute= require('./api/routes/userRoute');
app.use('/user', userRoute)
app.use('/', (req,res)=> {
    res.status(200).json({
        message: "It Works :D !"
    })
})



const server= http.createServer(app);
server.listen(port);