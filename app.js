const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/api');

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//routes
app.use("/",api);

const port = process.env.PORT ||5000;
app.listen(port, () =>{
	console.log(`server listening on port ${port}`);
});
